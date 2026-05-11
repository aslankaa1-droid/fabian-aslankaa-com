# FABIAN landing — auto-deploy to fabian.aslankaa.com via GitHub Pages
# Run from inside 15_Deploy_fabian_aslankaa_com folder
# Prerequisite: gh auth login (once)

param(
    [string]$RepoName = "fabian-aslankaa-com",
    [string]$Owner = "aslankaa1-droid",
    [string]$Domain = "fabian.aslankaa.com",
    [string]$CommitMsg = "Initial deploy: FABIAN landing"
)

$ErrorActionPreference = "Stop"

Write-Host "=== FABIAN deploy to $Domain ===" -ForegroundColor Cyan

# --- 1. Check dependencies ---
foreach ($tool in @("git", "gh")) {
    if (-not (Get-Command $tool -ErrorAction SilentlyContinue)) {
        Write-Error "$tool not found. Install via winget."
    }
}

# --- 2. Init git if needed ---
if (-not (Test-Path .git)) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
    git branch -M main
}

# --- 3. Add + commit ---
git add .
$status = git status --porcelain
if ($status) {
    git commit -m $CommitMsg
    Write-Host "Changes committed" -ForegroundColor Green
} else {
    Write-Host "Nothing to commit" -ForegroundColor Gray
}

# --- 4. Create repo on GitHub if missing ---
$null = gh repo view "$Owner/$RepoName" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Creating repo $Owner/$RepoName..." -ForegroundColor Yellow
    gh repo create "$Owner/$RepoName" --public --source=. --remote=origin --push
} else {
    Write-Host "Repo already exists" -ForegroundColor Gray
    $remote = git remote get-url origin 2>$null
    if (-not $remote) {
        git remote add origin "https://github.com/$Owner/$RepoName.git"
    }
    git push -u origin main
}

# --- 5. Enable GitHub Pages ---
Write-Host "Configuring GitHub Pages..." -ForegroundColor Yellow
try {
    gh api -X POST "repos/$Owner/$RepoName/pages" -f "source[branch]=main" -f "source[path]=/" 2>$null
} catch {
    Write-Host "Pages already enabled or configured" -ForegroundColor Gray
}

# --- 6. Set custom domain ---
gh api -X PUT "repos/$Owner/$RepoName/pages" -f "cname=$Domain"
Write-Host "Custom domain set: $Domain" -ForegroundColor Green

# --- 7. Force HTTPS ---
Start-Sleep -Seconds 5
gh api -X PUT "repos/$Owner/$RepoName/pages" -F "https_enforced=true" 2>$null
Write-Host "HTTPS enforced" -ForegroundColor Green

# --- 8. Status check ---
Write-Host "Checking SSL status (may take up to an hour)..." -ForegroundColor Yellow
$pagesInfo = gh api "repos/$Owner/$RepoName/pages" | ConvertFrom-Json
Write-Host "  URL: $($pagesInfo.html_url)"
Write-Host "  Status: $($pagesInfo.status)"
Write-Host "  HTTPS cert state: $($pagesInfo.https_certificate.state)"

Write-Host ""
Write-Host "=== DEPLOY DONE ===" -ForegroundColor Green
Write-Host "Next: run regru-dns-setup.ps1 to add DNS A-records"
Write-Host "After DNS propagation (10-60 min) site will be at: https://$Domain/"
