# Инструкция деплоя fabian.aslankaa.com

**Целевой URL:** `https://fabian.aslankaa.com/`
**Заказчик:** Абдул-Хаким Ахмадович Кагиров
**Координатор:** Идрис Аслан Анзорович

---

## Инфраструктура (как у других проектов Аслана)

| Параметр | Значение | Источник |
|---|---|---|
| Хостинг | GitHub Pages | как `grandhubai.com`, `zs.aslankaa.com`, INERTUM, ЧАПАН |
| DNS | reg.ru API | стандартный паттерн Аслана |
| SSL | Let's Encrypt автоматически через GitHub | стандарт |
| Организация на GitHub | `aslankaa1-droid` | существующий аккаунт |
| Локальные ключи reg.ru | `C:\Users\ais001\Documents\Клод\пароли.txt` | reference_regru_api_quirks.md |
| SSL-сертификат reg.ru | `E:\Проекты Аслана\GrandHubAi\regru-api\my.crt` + `my.key` | срок до 2027-05-03 |
| ai-server | НЕ ИСПОЛЬЗОВАТЬ — порты закрыты Alpha Net Telecom | reference_ai_server_network.md |

---

## Состав deploy-пакета

```
15_Деплой_fabian_aslankaa_com/
├── index.html              # лендинг, ~33 КБ
├── CNAME                   # fabian.aslankaa.com
├── .nojekyll               # отключение Jekyll (важно для assets/_)
├── .gitignore
├── DEPLOY.md               # этот файл
├── deploy.ps1              # автодеплой
├── regru-dns-setup.ps1     # настройка DNS через API
├── assets/
│   ├── style.css           # 30+ КБ
│   ├── script.js           # 38 КБ (i18n 4 языка + темы)
│   ├── animations.css      # 13 КБ
│   ├── animations.js       # 13 КБ
│   ├── logo.svg            # каллиграфия fabian (Tangerine)
│   ├── bottle_hero.png     # обрезанная бутылка
│   ├── bottle_full.png
│   └── bottle_closeup.png
└── downloads/
    ├── Investment_Memorandum_FABIAN.html / .pdf / .docx
    ├── Brand_Valuation_FABIAN.html / .pdf / .docx / .pptx
    └── translations/EN, FR, AR (15 файлов переводов)
```

Общий объём: ~3.5 МБ.

---

## Пошаговый деплой

### Шаг 1. Создание репозитория на GitHub

```bash
cd "E:/Проекты Аслана/Fabian Water HoReCa СНГ/15_Деплой_fabian_aslankaa_com"
git init
git add .
git commit -m "Initial commit: FABIAN landing"
gh repo create aslankaa1-droid/fabian-aslankaa-com --public --source=. --remote=origin --push
```

### Шаг 2. Настройка GitHub Pages

```bash
# Включить Pages из main / root
gh api -X POST repos/aslankaa1-droid/fabian-aslankaa-com/pages -f source[branch]=main -f source[path]=/

# Установить кастомный домен
gh api -X PUT repos/aslankaa1-droid/fabian-aslankaa-com/pages -f cname=fabian.aslankaa.com

# Форсировать HTTPS (boolean — обязательно -F)
gh api -X PUT repos/aslankaa1-droid/fabian-aslankaa-com/pages -F https_enforced=true
```

### Шаг 3. DNS через reg.ru API

См. `regru-dns-setup.ps1` ниже.

Добавляются 4 A-записи поддомена `fabian`:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

(стандартные IP GitHub Pages, такие же как для `grandhubai.com`, `zs.aslankaa.com`)

Альтернатива: одна CNAME-запись `fabian → aslankaa1-droid.github.io` — но GitHub рекомендует A-записи для apex/subdomain.

### Шаг 4. Проверка SSL

После пропагации DNS (~10-60 мин):
```bash
gh api repos/aslankaa1-droid/fabian-aslankaa-com/pages | jq '.https_certificate'
```

Должен показать `state: "approved"`. Если застрял в `pending` больше 2 часов — толчок:
```bash
gh api -X PUT repos/aslankaa1-droid/fabian-aslankaa-com/pages -f cname=
sleep 10
gh api -X PUT repos/aslankaa1-droid/fabian-aslankaa-com/pages -f cname=fabian.aslankaa.com
```

### Шаг 5. Tailscale MagicDNS — обход кеша

После настройки DNS Tailscale-кеш у Аслана может показывать старый IP до часа. Обход:
```bash
tailscale set --accept-dns=false
ipconfig /flushdns
# вернуть после пропагации:
tailscale set --accept-dns=true
```

### Шаг 6. Финальная проверка

- Открыть `https://fabian.aslankaa.com/` в браузере (Ctrl+F5 чтобы обойти кеш)
- Проверить: главная грузится, кнопка «Скачать инвест-меморандум» работает, иконка-бейдж «Brand Valuation» открывает отчёт оценки
- Переключить языки RU → EN → FR → AR — должны работать на лендинге и в HTML-отчётах
- Переключить темы (на странице оценки бренда)
- Кнопка «Поделиться» в отчёте оценки — открывает модалку с WhatsApp/Telegram/Email/Viber/LinkedIn/Copy

---

## Workflow для будущих обновлений

После любых правок в исходниках (`07b_Лендинг_v2_с_фото_бутылки/` или `12_Оценка_бренда/`):

```bash
cd "E:/Проекты Аслана/Fabian Water HoReCa СНГ/15_Деплой_fabian_aslankaa_com"
# (если меняли отчёты — пересобрать сначала через _build_valuation.py и _build_memorandum.py)
# затем sync обновлений:
robocopy "../07b_Лендинг_v2_с_фото_бутылки" "." /MIR /XD .git
git add .
git commit -m "Update: <описание>"
git push origin main
```

GitHub Pages обновится автоматически через 1-2 минуты.

---

## Связанные документы / ссылки

- `06_Инвесторам/_build_memorandum.py` — пересборка инвест-меморандума (HTML+DOCX+PDF)
- `12_Оценка_бренда/_build_valuation.py` — пересборка отчёта оценки (HTML+DOCX+PDF+PPTX)
- Memory references:
  - `reference_regru_api_quirks.md` — API reg.ru (zone/add_alias, не add_arecord)
  - `reference_github_pages_quirks.md` — .nojekyll, gh api -F для boolean, SSL-толчок
  - `reference_ai_server_network.md` — НЕ деплоить на ai-server (порты закрыты)
  - `project_aslankaa_card_site.md` — основной aslankaa.com, тот же подход
  - `reference_inertum_health_check.md` — INERTUM-портал, аналогичный CI/CD

---

## Контакты для эскалации

| Роль | ФИО | Контакты |
|---|---|---|
| Заказчик / Правообладатель ТЗ | Абдул-Хаким Ахмадович Кагиров (CENTER GROUP COMPANY) | через координатора |
| Координатор проекта | Идрис Аслан Анзорович | aslankaa@yandex.ru, +7 (969) 795-55-55, +7 (925) 203-77-77 |
| Технический деплой | (выполняется на машине Аслана) | aslankaa@yandex.ru |
