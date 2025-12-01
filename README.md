<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CUMELT MAROC - Литье Медных Слитков</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        /* СБРОС СТИЛЕЙ И БАЗА */
        :root {
            --primary-color: #222222; /* Глубокий темный цвет (из текста логотипа) */
            --accent-color: #b85c38;  /* Медный цвет (из круга логотипа) */
            --bg-color: #f8f4f0;      /* Светлый фон с теплым оттенком */
            --text-color: #444;       /* Основной цвет текста */
            --light-text: #fff;
        }
        body {
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--bg-color);
        }
        
        /* КОНТЕЙНЕРЫ */
        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* ШАПКА */
        header {
            background: #fff;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            padding: 1.2rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            font-weight: 700;
            font-size: 1.8rem;
            color: var(--primary-color);
            text-decoration: none;
            letter-spacing: 1px;
        }
        .logo span {
            color: var(--accent-color); /* Акцент на MAROC */
        }

        /* ГЛАВНЫЙ ЭКРАН (HERO) */
        .hero {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 120px 0;
            background: linear-gradient(135deg, #fff 60%, var(--bg-color) 40%);
            position: relative;
            overflow: hidden;
        }
        .hero-text {
            flex: 1;
            padding-right: 60px;
            z-index: 2;
        }
        .hero-text h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            color: var(--primary-color);
            line-height: 1.1;
            font-weight: 700;
        }
        .hero-text p {
            font-size: 1.3rem;
            color: #666;
            margin-bottom: 40px;
        }
        .hero-img {
            flex: 1.2;
            position: relative;
        }
        /* Эффект "раскаленного металла" для изображения */
        .hero-img::after {
            content: '';
            position: absolute;
            top: 10%;
            right: -10%;
            width: 80%;
            height: 80%;
            background: var(--accent-color);
            opacity: 0.2;
            filter: blur(60px);
            z-index: -1;
            border-radius: 50%;
        }
        .hero-img img {
            width: 100%;
            border-radius: 16px;
            box-shadow: 0 25px 50px rgba(184, 92, 56, 0.25); /* Тень с медным оттенком */
            transform: perspective(1000px) rotateY(-5deg);
            transition: 0.5s;
        }
        .hero-img img:hover {
             transform: perspective(1000px) rotateY(0deg);
        }
        .btn {
            display: inline-block;
            background: var(--accent-color);
            color: var(--light-text);
            padding: 14px 35px;
            border-radius: 8px;
            text-decoration: none;
            transition: 0.3s;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 5px 15px rgba(184, 92, 56, 0.4);
        }
        .btn:hover {
            background: #a04a2a; /* Немного темнее при наведении */
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(184, 92, 56, 0.6);
        }

        /* О НАС */
        .about {
            padding: 100px 0;
            text-align: center;
            background: #fff;
        }
        .section-title {
            font-size: 2.8rem;
            color: var(--primary-color);
            margin-bottom: 20px;
            position: relative;
            display: inline-block;
        }
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--accent-color);
            border-radius: 2px;
        }
        .about p {
            max-width: 800px;
            margin: 40px auto 60px;
            font-size: 1.1rem;
        }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            text-align: left;
        }
        .feature-card {
            background: var(--bg-color);
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: 0.3s;
            border-bottom: 4px solid transparent;
        }
        .feature-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent-color);
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
        .feature-card h3 {
            color: var(--primary-color);
            font-size: 1.4rem;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        .feature-card h3 span {
            color: var(--accent-color);
            margin-right: 10px;
            font-size: 1.8rem;
        }

        /* КОНТАКТЫ */
        .contacts {
            background: linear-gradient(to right, var(--primary-color), #333);
            color: var(--light-text);
            padding: 100px 0;
            position: relative;
        }
        .contacts::before {
             content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(to right, var(--accent-color), transparent);
        }
        .contacts h2 {
            color: var(--light-text);
        }
        .contacts h2::after {
            background: var(--accent-color);
        }
        .contacts-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            margin-top: 50px;
        }
        .contact-info p {
            font-size: 1.2rem;
            margin-bottom: 40px;
            opacity: 0.9;
        }
        .contact-item {
            margin-bottom: 25px;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
        }
        .contact-item span {
            color: var(--accent-color);
            margin-right: 15px;
            font-size: 1.5rem;
        }
        
        /* ПОДВАЛ */
        footer {
            text-align: center;
            padding: 30px;
            background: #1a1a1a;
            color: #888;
            font-size: 0.9rem;
        }

        /* АДАПТИВНОСТЬ (МОБИЛЬНЫЕ) */
        @media (max-width: 992px) {
            .hero {
                flex-direction: column-reverse;
                text-align: center;
                padding: 60px 0;
            }
            .hero-text {
                padding-right: 0;
                margin-top: 50px;
            }
            .hero-text h1 {
                font-size: 2.8rem;
            }
            .hero-img img {
                 transform: none;
            }
            .hero-img::after {
                display: none;
            }
        }
        @media (max-width: 768px) {
            .contacts-grid {
                grid-template-columns: 1fr;
                gap: 40px;
            }
            .section-title {
                font-size: 2.2rem;
            }
        }
    </style>
</head>
<body>

    <header>
        <div class="container">
            <nav>
                <a href="#" class="logo">CUMELT <span>MAROC</span></a>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="container" style="display: flex; align-items: center; flex-wrap: wrap;">
            <div class="hero-text">
                <h1>Искусство Медного Литья</h1>
                <p>Производство высококачественных медных слитков. Мы объединяем вековые традиции с современными технологиями для создания продукта исключительной чистоты.</p>
                <a href="#contacts" class="btn">Связаться с нами</a>
            </div>
            <div class="hero-img">
                <img src="https://images.unsplash.com/photo-1617791160144-153697771198?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Литье меди">
            </div>
        </div>
    </section>

    <section class="about">
        <div class="container">
            <h2 class="section-title">О Компании</h2>
            <p>CUMELT MAROC — это лидер в области переработки и литья меди. Наш опыт и стремление к совершенству позволяют нам поставлять продукцию, соответствующую самым строгим мировым стандартам качества.</p>
            
            <div class="features">
                <div class="feature-card">
                    <h3><span>⭐</span> Высочайшее Качество</h3>
                    <p>Наши медные слитки отличаются исключительной чистотой и однородностью состава, что подтверждено сертификатами.</p>
                </div>
                <div class="feature-card">
                    <h3><span>🔥</span> Передовые Технологии</h3>
                    <p>Используем современное плавильное оборудование для точного контроля температуры и процесса литья.</p>
                </div>
                <div class="feature-card">
                    <h3><span>🤝</span> Надежное Партнерство</h3>
                    <p>Мы ценим долгосрочные отношения и гарантируем стабильность поставок для вашего бизнеса.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="contacts" id="contacts">
        <div class="container">
            <h2 class="section-title">Контакты</h2>
            <div class="contacts-grid">
                <div class="contact-info">
                    <p>Свяжитесь с нами, чтобы обсудить сотрудничество или получить консультацию.</p>
                    
                    <div class="contact-item"><span>📍</span> Марокко, г. Касабланка, Индустриальная зона</div>
                    <div class="contact-item"><span>📞</span> +212 (0) 522 00 00 00</div>
                    <div class="contact-item"><span>✉️</span> info@cumeltmaroc.com</div>
                </div>
                <div class="map">
                    <p style="font-size: 1.2rem; opacity: 0.8; padding-top: 20px;">Часы работы:<br>Пн-Пт: с 9:00 до 18:00</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            &copy; 2024 CUMELT MAROC. Все права защищены.
        </div>
    </footer>

</body>
</html>
