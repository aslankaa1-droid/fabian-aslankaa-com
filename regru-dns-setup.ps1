# FABIAN — настройка DNS-записей для fabian.aslankaa.com через reg.ru API
# Добавляет 4 A-записи поддомена fabian → GitHub Pages
# Использует SSL-сертификат + альтернативный API-пароль (см. reference_regru_api_quirks.md)

param(
    [string]$Domain = "aslankaa.com",
    [string]$Subdomain = "fabian",
    [string]$CertPath = "E:\Проекты Аслана\GrandHubAi\regru-api\my.crt",
    [string]$KeyPath = "E:\Проекты Аслана\GrandHubAi\regru-api\my.key",
    [string]$CredFile = "C:\Users\ais001\Documents\Клод\пароли.txt"
)

$ErrorActionPreference = "Stop"

Write-Host "=== reg.ru DNS setup: $Subdomain.$Domain ===" -ForegroundColor Cyan

# --- 1. Проверка файлов ---
foreach ($file in @($CertPath, $KeyPath, $CredFile)) {
    if (-not (Test-Path $file)) {
        Write-Error "Файл не найден: $file"
    }
}

# --- 2. Парсинг логина/пароля reg.ru API из пароли.txt ---
# Формат файла: ключ=значение по строкам
$creds = @{}
Get-Content $CredFile | ForEach-Object {
    if ($_ -match "^([^=]+)=(.+)$") {
        $creds[$matches[1].Trim()] = $matches[2].Trim()
    }
}

$Username = $creds["regru_username"]
$Password = $creds["regru_api_password"]

if (-not $Username -or -not $Password) {
    Write-Error "В $CredFile не найдены ключи regru_username и regru_api_password"
}

Write-Host "Аккаунт reg.ru: $Username" -ForegroundColor Gray

# --- 3. GitHub Pages IPs ---
$ghPagesIPs = @(
    "185.199.108.153",
    "185.199.109.153",
    "185.199.110.153",
    "185.199.111.153"
)

# --- 4. Добавление A-записей через reg.ru API ---
# ВАЖНО: A-запись добавляется через zone/add_alias с ipaddr, НЕ add_arecord
$apiUrl = "https://api.reg.ru/api/regru2/zone/add_alias"

foreach ($ip in $ghPagesIPs) {
    Write-Host "Добавляю A-запись $Subdomain.$Domain → $ip" -ForegroundColor Yellow

    $inputData = @{
        domains = @(@{ dname = $Domain })
        subdomain = $Subdomain
        ipaddr = $ip
        username = $Username
        password = $Password
        output_format = "json"
    } | ConvertTo-Json -Compress -Depth 5

    try {
        $response = Invoke-RestMethod -Uri $apiUrl `
            -Method Post `
            -Certificate (Get-PfxCertificate -FilePath $CertPath) `
            -Body @{ input_data = $inputData; input_format = "json" } `
            -ContentType "application/x-www-form-urlencoded"

        if ($response.result -eq "success") {
            Write-Host "  OK: $ip" -ForegroundColor Green
        } else {
            Write-Host "  Ошибка: $($response.error_text)" -ForegroundColor Red
        }
    } catch {
        Write-Host "  Исключение: $_" -ForegroundColor Red
        Write-Host "  Возможные причины:"
        Write-Host "    - IP машины не в whitelist reg.ru API (добавить через панель)"
        Write-Host "    - SSL-сертификат истёк (обновить my.crt до 2027-05-03)"
        Write-Host "    - API-пароль изменён"
    }
}

# --- 5. Альтернатива через curl (если PowerShell SSL даёт проблемы) ---
Write-Host ""
Write-Host "Альтернатива через curl (если PowerShell не работает):" -ForegroundColor Cyan
Write-Host @"
foreach `$ip in $($ghPagesIPs -join ',') {
    curl --cert "$CertPath" --key "$KeyPath" `
         --data-urlencode "input_data={`"domains`":[{`"dname`":`"$Domain`"}],`"subdomain`":`"$Subdomain`",`"ipaddr`":`"`$ip`",`"username`":`"$Username`",`"password`":`"$Password`",`"output_format`":`"json`"}" `
         "$apiUrl"
}
"@

# --- 6. Проверка DNS пропагации ---
Write-Host ""
Write-Host "После пропагации (10-60 мин) проверьте:" -ForegroundColor Yellow
Write-Host "  nslookup $Subdomain.$Domain"
Write-Host "  curl -I https://$Subdomain.$Domain/"

# --- 7. Tailscale обход кеша ---
Write-Host ""
Write-Host "Если у Аслана Tailscale показывает старый IP — обход кеша:" -ForegroundColor Yellow
Write-Host "  tailscale set --accept-dns=false"
Write-Host "  ipconfig /flushdns"
Write-Host "  # после пропагации: tailscale set --accept-dns=true"

Write-Host ""
Write-Host "=== DNS SETUP ЗАВЕРШЁН ===" -ForegroundColor Green
