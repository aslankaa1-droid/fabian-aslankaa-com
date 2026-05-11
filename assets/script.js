/* FABIAN landing v2 — i18n + reveal + nav + form */

const T = {
  ru: {
    "nav.about": "О бренде",
    "nav.product": "Продукт",
    "nav.market": "Рынок",
    "nav.strategy": "Стратегия",
    "nav.investors": "Инвесторам",
    "nav.partners": "HoReCa",
    "nav.contact": "Контакты",

    "hero.script": "fabian",
    "hero.headline": "Кавказ. Стекло. Пауза.",
    "hero.lede": "Премиальная негазированная вода в стекле для отелей, ресторанов и кафе СНГ. Бренд с патентом 2018 года, ажурным дизайном и кавказским происхождением.",
    "hero.cta1": "Стать инвестором",
    "hero.cta2": "Партнёрство HoReCa",
    "hero.m1.n": "8 стран",
    "hero.m1.l": "Целевая география",
    "hero.m2.n": "₽600+",
    "hero.m2.l": "Цена в HoReCa",
    "hero.m3.n": "2031",
    "hero.m3.l": "Лидерство в категории",

    "about.eyebrow": "О бренде",
    "about.h": "Вода, которая молчит",
    "about.lede": "FABIAN — не подражание Evian. Это собственный голос: ажурная синяя каллиграфия, кавказские истоки и halal-сертификация с первого дня. Мы строим бренд для тех, кто ценит ритуал, а не маркетинговый шум.",
    "about.p1.t": "01. Происхождение",
    "about.p1.d": "Кавказские источники с минерализацией 0,15–0,4 г/л и pH 7,0–7,6. Контролируемая рецептура — ТУ позволяет тиражировать бренд на разных розливах без потери стандарта.",
    "about.p2.t": "02. Эстетика",
    "about.p2.d": "Ажурная синяя каллиграфия от LenaMcCoder Branding. Стекло-флинт с тиснёной этикеткой. Дизайн узнаваем за 1 секунду на любой ресторанной полке.",
    "about.p3.t": "03. Halal",
    "about.p3.d": "Сертификация halal с первого дня — единственный премиум-локальный бренд воды с публичным статусом. Открывает мусульманскую аудиторию России, СНГ и ОАЭ.",
    "about.p4.t": "04. Право",
    "about.p4.d": "Товарный знак Роспатента № 648525 в 32 классе МКТУ. Защита расширяется через Мадридский протокол на 9 стран СНГ + ОАЭ.",

    "product.eyebrow": "Продукт",
    "product.h": "Две формы. Один стандарт.",
    "product.lede": "Стартовая линейка — 0,33 л и 0,75 л. Стекло-флинт прозрачное, тиснёная этикетка из cotton paper, синяя каллиграфия с золотым акцентом.",
    "product.s1.t": "Объём",
    "product.s1.v": "0,33 л · 0,75 л",
    "product.s2.t": "Тип",
    "product.s2.v": "Негазированная столовая",
    "product.s3.t": "Минерализация",
    "product.s3.v": "0,15–0,4 г/л",
    "product.s4.t": "pH",
    "product.s4.v": "7,0–7,6",
    "product.s5.t": "Тара",
    "product.s5.v": "Стекло флинт",
    "product.s6.t": "Срок годности",
    "product.s6.v": "12 месяцев",

    "market.eyebrow": "Рынок",
    "market.h": "Окно открыто сейчас",
    "market.lede": "Уход Evian, Perrier и San Pellegrino из российской HoReCa, запрет PET-стекла в Москве с сентября 2025 года и рост премиум-сегмента на 11% — три фактора, которые открывают единственное в десятилетии окно для запуска нового бренда стеклянной воды.",
    "market.n1.v": "₽14–18 млрд",
    "market.n1.t": "Объём HoReCa СНГ",
    "market.n2.v": "2 800+",
    "market.n2.t": "Премиум-точек МСК",
    "market.n3.v": "+11 %",
    "market.n3.t": "Рост в деньгах 2025",
    "market.n4.v": "1 100+",
    "market.n4.t": "Отелей 4–5*",

    "strategy.eyebrow": "Стратегия",
    "strategy.h": "Три фазы — пять лет",
    "strategy.lede": "Гибридная модель: сначала прямой контроль и культовый статус в Москве и Петербурге, затем розлив-франшиза по модели Coca-Cola для покрытия СНГ без огромного CapEx.",
    "strategy.s1.y": "2026",
    "strategy.s1.t": "Anchor-пилот МСК + СПб",
    "strategy.s1.d": "Контракт с Архыз КЧР, своя HoReCa-команда, 100 anchor-ресторанов в Москве и 50 в Петербурге, культовый статус через сомелье. Раунд $4–5 млн.",
    "strategy.s2.y": "2028",
    "strategy.s2.t": "Розлив-франшиза по РФ",
    "strategy.s2.d": "4–5 региональных bottlers (СЗФО, Юг, Урал, Сибирь, Поволжье). Entry fee $200–500K + royalty 6–10%. Бренд получает пассивный поток.",
    "strategy.s3.y": "2030",
    "strategy.s3.t": "Глобальная экспансия",
    "strategy.s3.d": "Master-licenses в Казахстане, Беларуси, Узбекистане, Армении, ОАЭ. Капекс несут франчайзи. Бренд готов к exit на стратега или IPO.",

    "inv.eyebrow": "Инвесторам",
    "inv.h": "Сделка с реалистичной экономикой",
    "inv.lede": "JV в Dubai DMCC + ООО-операционка в РФ. Правообладатель ТЗ ГК «Центр» вносит знак как non-cash вклад. Инвесторы получают долю в чистом cap-table без royalty-нагрузки.",
    "inv.f1.l": "Раунд",
    "inv.f1.v": "$4,5–8 млн",
    "inv.f2.l": "IRR",
    "inv.f2.v": "38 %",
    "inv.f3.l": "Payback",
    "inv.f3.v": "3,7 года",
    "inv.f4.l": "Terminal EV",
    "inv.f4.v": "$130 млн",
    "inv.cta": "Скачать инвест-меморандум",
    "inv.html": "Открыть онлайн",

    "badge.eyebrow": "Brand Valuation · ISO 10668",
    "badge.title": "Оценка бренда",

    "doc.memo.label": "Investment Memorandum",
    "doc.memo.title": "Инвест-меморандум",
    "doc.memo.meta": "IB-формат · 15 разделов · 4 приложения",
    "doc.val.label": "Brand Valuation · ISO 10668",
    "doc.val.title": "Оценка бренда",
    "doc.val.meta": "Сценарии РФ и СНГ · Income / Market / Cost",
    "doc.val.fair": "Fair value:",
    "doc.download": "Скачать",
    "doc.open": "Открыть",
    "doc.online": "Открыть онлайн",

    "partners.eyebrow": "HoReCa",
    "partners.h": "Стать партнёром бренда",
    "partners.lede": "Открываем приём заявок от ресторанов, отелей и сетей в Москве и Санкт-Петербурге на пилотный листинг с июля 2026 года.",
    "form.name": "Имя",
    "form.email": "E-mail",
    "form.venue": "Заведение",
    "form.city": "Город",
    "form.phone": "Телефон",
    "form.message": "Комментарий",
    "form.submit": "Отправить заявку",

    "contact.eyebrow": "Контакты",
    "contact.h": "Связь с проектом",
    "contact.lede": "Свяжитесь с командой проекта для инвестиционных предложений или сотрудничества в HoReCa.",
    "contact.l1": "Куратор проекта",
    "contact.v1": "Идрис Аслан Анзорович",
    "contact.l2": "Телефон",
    "contact.v2": "+7 (969) 795-55-55",
    "contact.l3": "Телефон 2",
    "contact.v3": "+7 (925) 203-77-77",
    "contact.l4": "E-mail",
    "contact.v4": "aslankaa@yandex.ru",
    "contact.l5": "Сайт",
    "contact.v5": "aslankaa.com",
    "contact.cta": "Скачать одностраничник",

    "footer.privacy": "Политика конфиденциальности",
    "footer.copy": "© 2026 FABIAN. Все права защищены.",
    "cookie.text": "Сайт использует cookies для улучшения опыта.",
    "cookie.accept": "Принять"
  },
  en: {
    "nav.about": "Brand", "nav.product": "Product", "nav.market": "Market",
    "nav.strategy": "Strategy", "nav.investors": "Investors", "nav.partners": "HoReCa", "nav.contact": "Contact",

    "hero.script": "fabian",
    "hero.headline": "Caucasus. Glass. Pause.",
    "hero.lede": "Premium still water in glass for hotels, restaurants and cafés across the CIS. A brand with a 2018 trademark, lace-pattern design and Caucasian heritage.",
    "hero.cta1": "Become investor", "hero.cta2": "HoReCa partnership",
    "hero.m1.n": "8 markets", "hero.m1.l": "Target geography",
    "hero.m2.n": "$8+", "hero.m2.l": "HoReCa price",
    "hero.m3.n": "2031", "hero.m3.l": "Category leadership",

    "about.eyebrow": "Brand", "about.h": "Water that is silent",
    "about.lede": "FABIAN is not an Evian imitation. It has its own voice: lace-blue calligraphy, Caucasian origin and halal certification from day one. We build a brand for those who value ritual, not marketing noise.",
    "about.p1.t": "01. Origin", "about.p1.d": "Caucasian springs with mineralisation 0.15–0.4 g/L and pH 7.0–7.6. A controlled formula — our TU specification allows replication across multiple bottling sites without loss of standard.",
    "about.p2.t": "02. Aesthetic", "about.p2.d": "Lace blue calligraphy by LenaMcCoder Branding. Flint glass with embossed cotton-paper label. Recognisable in a second on any restaurant shelf.",
    "about.p3.t": "03. Halal", "about.p3.d": "Halal certified from day one — the only premium local water brand with public status. Opens Muslim audiences across Russia, CIS and the UAE.",
    "about.p4.t": "04. Right", "about.p4.d": "Trademark No. 648525 of Russian Patent Office, class 32. Protection extends through Madrid Protocol to 9 CIS states + UAE.",

    "product.eyebrow": "Product", "product.h": "Two forms. One standard.",
    "product.lede": "Launch range — 0.33 L and 0.75 L. Transparent flint glass, embossed cotton paper label, blue calligraphy with golden accent.",
    "product.s1.t": "Volume", "product.s1.v": "0.33 L · 0.75 L",
    "product.s2.t": "Type", "product.s2.v": "Still table water",
    "product.s3.t": "Mineralisation", "product.s3.v": "0.15–0.4 g/L",
    "product.s4.t": "pH", "product.s4.v": "7.0–7.6",
    "product.s5.t": "Bottle", "product.s5.v": "Flint glass",
    "product.s6.t": "Shelf life", "product.s6.v": "12 months",

    "market.eyebrow": "Market", "market.h": "The window is now",
    "market.lede": "The exit of Evian, Perrier and San Pellegrino from Russian HoReCa, the PET ban in Moscow from September 2025, and 11% premium-segment growth — three factors that open a once-in-a-decade window to launch a new glass water brand.",
    "market.n1.v": "$160M+", "market.n1.t": "CIS HoReCa volume",
    "market.n2.v": "2,800+", "market.n2.t": "Premium venues Moscow",
    "market.n3.v": "+11%", "market.n3.t": "Value growth 2025",
    "market.n4.v": "1,100+", "market.n4.t": "Hotels 4–5★",

    "strategy.eyebrow": "Strategy", "strategy.h": "Three phases — five years",
    "strategy.lede": "A hybrid model: first direct control and cult status in Moscow and Saint Petersburg, then a Coca-Cola-style bottling franchise to cover the CIS without massive CapEx.",
    "strategy.s1.y": "2026", "strategy.s1.t": "Anchor pilot — Moscow + SPB",
    "strategy.s1.d": "Contract with Arkhyz KCR, dedicated HoReCa team, 100 anchor restaurants in Moscow and 50 in Saint Petersburg, cult status through sommeliers. Round $4–5M.",
    "strategy.s2.y": "2028", "strategy.s2.t": "Russian bottling franchise",
    "strategy.s2.d": "4–5 regional bottlers (NW, South, Urals, Siberia, Volga). Entry fee $200–500K + 6–10% royalty. The brand earns a passive royalty stream.",
    "strategy.s3.y": "2030", "strategy.s3.t": "Global expansion",
    "strategy.s3.d": "Master licenses in Kazakhstan, Belarus, Uzbekistan, Armenia, UAE. CapEx is borne by franchisees. Brand ready for strategic exit or IPO.",

    "inv.eyebrow": "Investors", "inv.h": "A deal with realistic economics",
    "inv.lede": "JV in Dubai DMCC + Russian operating LLC. Trademark holder GC Center contributes the brand as a non-cash injection. Investors get a clean cap-table without royalty drag.",
    "inv.f1.l": "Round", "inv.f1.v": "$4.5–8M",
    "inv.f2.l": "IRR", "inv.f2.v": "38%",
    "inv.f3.l": "Payback", "inv.f3.v": "3.7 years",
    "inv.f4.l": "Terminal EV", "inv.f4.v": "$130M",
    "inv.cta": "Download memorandum",
    "inv.html": "Open online",

    "partners.eyebrow": "HoReCa", "partners.h": "Become a brand partner",
    "partners.lede": "We accept applications from restaurants, hotels and chains in Moscow and Saint Petersburg for the pilot listing starting July 2026.",
    "form.name": "Name", "form.email": "E-mail", "form.venue": "Venue",
    "form.city": "City", "form.phone": "Phone", "form.message": "Comments",
    "form.submit": "Submit",

    "contact.eyebrow": "Contact", "contact.h": "Reach the project",
    "contact.lede": "Get in touch with the project team for investment proposals or HoReCa partnership.",
    "contact.l1": "Project lead", "contact.v1": "Idris Aslan Anzorovich",
    "contact.l2": "Phone", "contact.v2": "+7 (969) 795-55-55",
    "contact.l3": "Phone 2", "contact.v3": "+7 (925) 203-77-77",
    "contact.l4": "E-mail", "contact.v4": "aslankaa@yandex.ru",
    "contact.l5": "Web", "contact.v5": "aslankaa.com",
    "contact.cta": "Download one-pager",

    "footer.privacy": "Privacy policy",
    "footer.copy": "© 2026 FABIAN. All rights reserved.",
    "cookie.text": "This website uses cookies to enhance your experience.",
    "cookie.accept": "Accept",

    "badge.eyebrow": "Brand Valuation · ISO 10668",
    "badge.title": "Brand Valuation",

    "doc.memo.label": "Investment Memorandum",
    "doc.memo.title": "Investment Memorandum",
    "doc.memo.meta": "IB format · 15 sections · 4 appendices",
    "doc.val.label": "Brand Valuation · ISO 10668",
    "doc.val.title": "Brand Valuation",
    "doc.val.meta": "Russia and CIS scenarios · Income / Market / Cost",
    "doc.val.fair": "Fair value:",
    "doc.download": "Download",
    "doc.open": "Open",
    "doc.online": "Open online"
  },
  fr: {
    "nav.about": "Marque", "nav.product": "Produit", "nav.market": "Marché",
    "nav.strategy": "Stratégie", "nav.investors": "Investisseurs", "nav.partners": "HoReCa", "nav.contact": "Contact",
    "hero.script": "fabian",
    "hero.headline": "Caucase. Verre. Pause.",
    "hero.lede": "Eau plate premium en verre pour hôtels, restaurants et cafés de la CEI. Une marque avec une marque déposée de 2018, un design en dentelle et une origine caucasienne.",
    "hero.cta1": "Devenir investisseur", "hero.cta2": "Partenariat HoReCa",
    "hero.m1.n": "8 marchés", "hero.m1.l": "Géographie cible",
    "hero.m2.n": "8 €+", "hero.m2.l": "Prix HoReCa",
    "hero.m3.n": "2031", "hero.m3.l": "Leadership de catégorie",
    "about.eyebrow": "Marque", "about.h": "L'eau qui se tait",
    "about.lede": "FABIAN n'est pas une imitation d'Evian. Une voix propre : calligraphie bleue en dentelle, origine caucasienne et certification halal dès le premier jour. Nous construisons une marque pour ceux qui valorisent le rituel.",
    "about.p1.t": "01. Origine", "about.p1.d": "Sources caucasiennes, minéralisation 0,15–0,4 g/L et pH 7,0–7,6. Formule contrôlée — notre TU permet la reproduction sur plusieurs sites d'embouteillage sans perte de standard.",
    "about.p2.t": "02. Esthétique", "about.p2.d": "Calligraphie bleue en dentelle par LenaMcCoder Branding. Verre flint avec étiquette en papier de coton gaufrée. Reconnaissable en une seconde.",
    "about.p3.t": "03. Halal", "about.p3.d": "Certifiée halal dès le premier jour — la seule marque premium locale avec ce statut public. Ouvre les publics musulmans de Russie, CEI et EAU.",
    "about.p4.t": "04. Droit", "about.p4.d": "Marque déposée n° 648525 de Rospatent, classe 32. Protection étendue via le Protocole de Madrid à 9 États CEI + EAU.",
    "product.eyebrow": "Produit", "product.h": "Deux formes. Un standard.",
    "product.lede": "Gamme de lancement — 0,33 L et 0,75 L. Verre flint transparent, étiquette gaufrée, calligraphie bleue avec accent doré.",
    "product.s1.t": "Volume", "product.s1.v": "0,33 L · 0,75 L",
    "product.s2.t": "Type", "product.s2.v": "Eau plate de table",
    "product.s3.t": "Minéralisation", "product.s3.v": "0,15–0,4 g/L",
    "product.s4.t": "pH", "product.s4.v": "7,0–7,6",
    "product.s5.t": "Bouteille", "product.s5.v": "Verre flint",
    "product.s6.t": "DLC", "product.s6.v": "12 mois",
    "market.eyebrow": "Marché", "market.h": "La fenêtre est maintenant",
    "market.lede": "Le retrait d'Evian, Perrier et San Pellegrino de la HoReCa russe, l'interdiction du PET à Moscou depuis septembre 2025 et la croissance de 11 % du segment premium — trois facteurs qui ouvrent une fenêtre unique pour lancer une nouvelle marque d'eau en verre.",
    "market.n1.v": "160 M$+", "market.n1.t": "Volume HoReCa CEI",
    "market.n2.v": "2 800+", "market.n2.t": "Lieux premium Moscou",
    "market.n3.v": "+11 %", "market.n3.t": "Croissance 2025",
    "market.n4.v": "1 100+", "market.n4.t": "Hôtels 4–5★",
    "strategy.eyebrow": "Stratégie", "strategy.h": "Trois phases — cinq ans",
    "strategy.lede": "Modèle hybride : d'abord contrôle direct et statut culte à Moscou et Saint-Pétersbourg, puis franchise d'embouteillage façon Coca-Cola pour couvrir la CEI sans CapEx massif.",
    "strategy.s1.y": "2026", "strategy.s1.t": "Pilote Moscou + SPB",
    "strategy.s1.d": "Contrat avec Arkhyz KCR, équipe HoReCa dédiée, 100 restaurants ancres à Moscou et 50 à Saint-Pétersbourg. Tour $4–5 M.",
    "strategy.s2.y": "2028", "strategy.s2.t": "Franchise russe",
    "strategy.s2.d": "4–5 embouteilleurs régionaux. Droit d'entrée $200–500 K + redevance 6–10 %. Flux de redevances passif.",
    "strategy.s3.y": "2030", "strategy.s3.t": "Expansion mondiale",
    "strategy.s3.d": "Master licenses au Kazakhstan, Biélorussie, Ouzbékistan, Arménie, EAU. Prêt pour une sortie stratégique ou IPO.",
    "inv.eyebrow": "Investisseurs", "inv.h": "Une économie réaliste",
    "inv.lede": "JV à Dubai DMCC + LLC opérationnelle russe. Le titulaire de la marque, GC Center, apporte la marque en nature. Cap-table propre.",
    "inv.f1.l": "Tour", "inv.f1.v": "$4,5–8 M",
    "inv.f2.l": "TRI", "inv.f2.v": "38 %",
    "inv.f3.l": "Retour", "inv.f3.v": "3,7 ans",
    "inv.f4.l": "VE finale", "inv.f4.v": "$130 M",
    "inv.cta": "Télécharger le mémorandum",
    "inv.html": "Ouvrir en ligne",
    "partners.eyebrow": "HoReCa", "partners.h": "Devenir partenaire",
    "partners.lede": "Nous acceptons les candidatures de restaurants, hôtels et chaînes à Moscou et Saint-Pétersbourg pour le listing pilote à partir de juillet 2026.",
    "form.name": "Nom", "form.email": "E-mail", "form.venue": "Établissement",
    "form.city": "Ville", "form.phone": "Téléphone", "form.message": "Commentaires", "form.submit": "Envoyer",
    "contact.eyebrow": "Contact", "contact.h": "Joindre le projet",
    "contact.lede": "Contactez l'équipe du projet pour des propositions d'investissement ou un partenariat HoReCa.",
    "contact.l1": "Chef de projet", "contact.v1": "Idris Aslan Anzorovich",
    "contact.l2": "Téléphone", "contact.v2": "+7 (969) 795-55-55",
    "contact.l3": "Téléphone 2", "contact.v3": "+7 (925) 203-77-77",
    "contact.l4": "E-mail", "contact.v4": "aslankaa@yandex.ru",
    "contact.l5": "Site", "contact.v5": "aslankaa.com",
    "contact.cta": "Télécharger la fiche",
    "footer.privacy": "Politique de confidentialité",
    "footer.copy": "© 2026 FABIAN. Tous droits réservés.",
    "cookie.text": "Ce site utilise des cookies pour améliorer votre expérience.",
    "cookie.accept": "Accepter",

    "badge.eyebrow": "Évaluation de marque · ISO 10668",
    "badge.title": "Évaluation de marque",

    "doc.memo.label": "Mémorandum d'investissement",
    "doc.memo.title": "Mémorandum d'investissement",
    "doc.memo.meta": "Format IB · 15 sections · 4 annexes",
    "doc.val.label": "Évaluation de marque · ISO 10668",
    "doc.val.title": "Évaluation de marque",
    "doc.val.meta": "Scénarios Russie et CEI · Revenu / Marché / Coût",
    "doc.val.fair": "Juste valeur :",
    "doc.download": "Télécharger",
    "doc.open": "Ouvrir",
    "doc.online": "Ouvrir en ligne"
  },
  ar: {
    "nav.about": "العلامة", "nav.product": "المنتج", "nav.market": "السوق",
    "nav.strategy": "الإستراتيجية", "nav.investors": "المستثمرون", "nav.partners": "قطاع الضيافة", "nav.contact": "تواصل",
    "hero.script": "fabian",
    "hero.headline": "القوقاز. الزجاج. الوقفة.",
    "hero.lede": "مياه فاخرة غير غازية في زجاج للفنادق والمطاعم والمقاهي في رابطة الدول المستقلة. علامة تجارية مسجلة منذ 2018 بتصميم خط دانتيل وأصل قوقازي.",
    "hero.cta1": "كن مستثمرًا", "hero.cta2": "شراكة HoReCa",
    "hero.m1.n": "8 أسواق", "hero.m1.l": "الجغرافيا المستهدفة",
    "hero.m2.n": "8$+", "hero.m2.l": "السعر في HoReCa",
    "hero.m3.n": "2031", "hero.m3.l": "ريادة الفئة",
    "about.eyebrow": "العلامة", "about.h": "الماء الذي يصمت",
    "about.lede": "FABIAN ليس تقليدًا لإيفيان. صوت خاص: خط أزرق دانتيلي، أصل قوقازي وشهادة حلال من اليوم الأول.",
    "about.p1.t": "01. الأصل", "about.p1.d": "ينابيع قوقازية، تمعدن 0.15–0.4 غ/ل و pH 7.0–7.6. صيغة محكومة قابلة للتكرار في عدة مواقع تعبئة.",
    "about.p2.t": "02. الجمال", "about.p2.d": "خط أزرق دانتيلي من LenaMcCoder. زجاج فلينت مع ملصق قطني محفور.",
    "about.p3.t": "03. حلال", "about.p3.d": "شهادة حلال منذ اليوم الأول — العلامة المحلية الفاخرة الوحيدة بهذا الوضع العام.",
    "about.p4.t": "04. الحق", "about.p4.d": "علامة تجارية رقم 648525 لدى مكتب البراءات الروسي، الفئة 32.",
    "product.eyebrow": "المنتج", "product.h": "شكلان. معيار واحد.",
    "product.lede": "خط الإطلاق — 0.33 ل و 0.75 ل. زجاج فلينت شفاف، ملصق ورق قطني محفور، خط أزرق بلمسة ذهبية.",
    "product.s1.t": "الحجم", "product.s1.v": "0.33 ل · 0.75 ل",
    "product.s2.t": "النوع", "product.s2.v": "ماء طاولة غير غازي",
    "product.s3.t": "التمعدن", "product.s3.v": "0.15–0.4 غ/ل",
    "product.s4.t": "pH", "product.s4.v": "7.0–7.6",
    "product.s5.t": "العبوة", "product.s5.v": "زجاج فلينت",
    "product.s6.t": "مدة الصلاحية", "product.s6.v": "12 شهرًا",
    "market.eyebrow": "السوق", "market.h": "النافذة مفتوحة الآن",
    "market.lede": "خروج إيفيان وبيرييه وسان بيليجرينو من قطاع HoReCa الروسي، حظر PET في موسكو منذ سبتمبر 2025، ونمو القطاع الفاخر بنسبة 11% — ثلاثة عوامل تفتح نافذة فريدة من نوعها.",
    "market.n1.v": "+160 م$", "market.n1.t": "حجم HoReCa CIS",
    "market.n2.v": "+2,800", "market.n2.t": "أماكن فاخرة موسكو",
    "market.n3.v": "+11%", "market.n3.t": "نمو 2025",
    "market.n4.v": "+1,100", "market.n4.t": "فنادق 4–5★",
    "strategy.eyebrow": "الإستراتيجية", "strategy.h": "ثلاث مراحل — خمس سنوات",
    "strategy.lede": "نموذج هجين: السيطرة المباشرة والمكانة المرموقة في موسكو وسانت بطرسبرغ، ثم امتياز التعبئة على غرار كوكاكولا لتغطية رابطة الدول المستقلة.",
    "strategy.s1.y": "2026", "strategy.s1.t": "تجربة موسكو + سانت بطرسبرغ",
    "strategy.s1.d": "عقد مع أرخيز KCR، فريق HoReCa مخصص، 100 مطعم محوري في موسكو و50 في سانت بطرسبرغ. جولة 4–5 مليون دولار.",
    "strategy.s2.y": "2028", "strategy.s2.t": "امتياز التعبئة الروسي",
    "strategy.s2.d": "4–5 معبئين إقليميين. رسوم دخول 200–500 ألف دولار + إتاوة 6–10%.",
    "strategy.s3.y": "2030", "strategy.s3.t": "التوسع العالمي",
    "strategy.s3.d": "تراخيص رئيسية في كازاخستان، بيلاروسيا، أوزبكستان، أرمينيا، الإمارات.",
    "inv.eyebrow": "المستثمرون", "inv.h": "صفقة باقتصاد واقعي",
    "inv.lede": "مشروع مشترك في DMCC دبي + شركة تشغيل في روسيا. مالك العلامة GC Center يساهم بالعلامة كحصة عينية.",
    "inv.f1.l": "الجولة", "inv.f1.v": "4.5–8 م$",
    "inv.f2.l": "IRR", "inv.f2.v": "38%",
    "inv.f3.l": "استرداد", "inv.f3.v": "3.7 سنوات",
    "inv.f4.l": "القيمة النهائية", "inv.f4.v": "130 م$",
    "inv.cta": "تحميل المذكرة",
    "inv.html": "افتح عبر الإنترنت",
    "partners.eyebrow": "HoReCa", "partners.h": "كن شريكًا للعلامة",
    "partners.lede": "نقبل طلبات المطاعم والفنادق والسلاسل في موسكو وسانت بطرسبرغ لإدراج تجريبي ابتداءً من يوليو 2026.",
    "form.name": "الاسم", "form.email": "البريد", "form.venue": "المؤسسة",
    "form.city": "المدينة", "form.phone": "الهاتف", "form.message": "تعليقات", "form.submit": "إرسال",
    "contact.eyebrow": "تواصل", "contact.h": "تواصل مع المشروع",
    "contact.lede": "تواصل مع فريق المشروع للحصول على عروض استثمارية أو شراكة HoReCa.",
    "contact.l1": "مدير المشروع", "contact.v1": "أصلان إدريس أنزوروفيتش",
    "contact.l2": "الهاتف", "contact.v2": "+7 (969) 795-55-55",
    "contact.l3": "الهاتف 2", "contact.v3": "+7 (925) 203-77-77",
    "contact.l4": "البريد", "contact.v4": "aslankaa@yandex.ru",
    "contact.l5": "الموقع", "contact.v5": "aslankaa.com",
    "contact.cta": "تنزيل ملخص الصفحة الواحدة",
    "footer.privacy": "سياسة الخصوصية",
    "footer.copy": "© 2026 FABIAN. جميع الحقوق محفوظة.",
    "cookie.text": "يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربتك.",
    "cookie.accept": "قبول",

    "badge.eyebrow": "تقييم العلامة التجارية · ISO 10668",
    "badge.title": "تقييم العلامة التجارية",

    "doc.memo.label": "مذكرة الاستثمار",
    "doc.memo.title": "مذكرة الاستثمار",
    "doc.memo.meta": "صيغة بنكية · 15 قسماً · 4 ملاحق",
    "doc.val.label": "تقييم العلامة التجارية · ISO 10668",
    "doc.val.title": "تقييم العلامة التجارية",
    "doc.val.meta": "سيناريوهات روسيا ورابطة الدول المستقلة · الدخل / السوق / التكلفة",
    "doc.val.fair": "القيمة العادلة:",
    "doc.download": "تحميل",
    "doc.open": "افتح",
    "doc.online": "افتح عبر الإنترنت"
  }
};

const LANGS = ["ru", "en", "fr", "ar"];

const LANG_NAMES = { ru: "Русский", en: "English", fr: "Français", ar: "العربية" };

function applyLang(lang) {
  if (!T[lang]) lang = "ru";
  const dict = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (dict[k]) el.textContent = dict[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const k = el.getAttribute("data-i18n-ph");
    if (dict[k]) el.placeholder = dict[k];
  });

  document.querySelectorAll(".lang-menu button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  const cur = document.querySelector(".lang-current");
  if (cur) cur.textContent = lang.toUpperCase();

  try { localStorage.setItem("fabian_lang", lang); } catch (e) {}
}

function initLang() {
  const params = new URLSearchParams(location.search);
  let lang = params.get("lang");
  if (!lang) {
    try { lang = localStorage.getItem("fabian_lang"); } catch (e) {}
  }
  if (!lang || !LANGS.includes(lang)) {
    const nav = (navigator.language || "ru").slice(0, 2).toLowerCase();
    lang = LANGS.includes(nav) ? nav : "ru";
  }
  applyLang(lang);
}

/* === THEME === */
const THEMES = ["light", "auto", "dark"];

function applyTheme(theme) {
  if (!THEMES.includes(theme)) theme = "auto";
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll(".theme-switch button").forEach(b => {
    b.classList.toggle("active", b.dataset.theme === theme);
  });
  try { localStorage.setItem("fabian_theme", theme); } catch (e) {}
}

function initTheme() {
  let theme;
  try { theme = localStorage.getItem("fabian_theme"); } catch (e) {}
  if (!THEMES.includes(theme)) theme = "auto";
  applyTheme(theme);
}

/* === DOM ready === */
document.addEventListener("DOMContentLoaded", () => {

  /* Build language dropdown */
  const dd = document.querySelector(".lang-dropdown");
  const trigger = dd && dd.querySelector(".lang-trigger");
  const menu = dd && dd.querySelector(".lang-menu");
  if (dd && trigger && menu) {
    LANGS.forEach(l => {
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.lang = l;
      b.setAttribute("role", "option");
      b.innerHTML = `<span class="code">${l.toUpperCase()}</span><span>${LANG_NAMES[l] || l}</span>`;
      b.addEventListener("click", () => {
        applyLang(l);
        dd.classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
      });
      menu.appendChild(b);
    });
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = dd.classList.toggle("open");
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", (e) => {
      if (!dd.contains(e.target)) {
        dd.classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && dd.classList.contains("open")) {
        dd.classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
        trigger.focus();
      }
    });
  }

  initLang();
  initTheme();

  /* Theme switch buttons */
  document.querySelectorAll(".theme-switch button").forEach(b => {
    b.addEventListener("click", () => applyTheme(b.dataset.theme));
  });

  /* History nav (back / home / forward) */
  const hb = document.querySelector(".history-nav .back");
  const hh = document.querySelector(".history-nav .home");
  const hf = document.querySelector(".history-nav .forward");
  if (hb) hb.addEventListener("click", () => history.back());
  if (hh) hh.addEventListener("click", (e) => {
    e.preventDefault();
    if (location.hash && location.hash !== "#hero") {
      history.pushState(null, "", location.pathname + location.search);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  if (hf) hf.addEventListener("click", () => history.forward());

  /* Header scrolled state */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Burger nav */
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        burger.classList.remove("open");
        nav.classList.remove("open");
      });
    });
  }

  /* Reveal on scroll */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* Forms */
  document.querySelectorAll("form").forEach(f => {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(f);
      const data = Object.fromEntries(fd.entries());
      console.log("Form data:", data);
      f.reset();
      const btn = f.querySelector("button[type='submit']");
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = "✓";
        btn.disabled = true;
        setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 2200);
      }
    });
  });

  /* Cookie */
  const cb = document.getElementById("cookieBanner");
  const ck = document.getElementById("cookieAccept");
  let cookieAccepted = false;
  try { cookieAccepted = !!localStorage.getItem("fabian_cookie_ok"); } catch (e) {}
  if (cb) {
    if (cookieAccepted) cb.setAttribute("hidden", "");
    else cb.removeAttribute("hidden");
  }
  if (ck) {
    ck.addEventListener("click", () => {
      if (cb) {
        cb.setAttribute("hidden", "");
        cb.style.display = "none";
      }
      try { localStorage.setItem("fabian_cookie_ok", "1"); } catch (e) {}
    });
  }
});
