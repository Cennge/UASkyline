import './page1.css';

export function Page1() {
    return (
        <div className="skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
            />
            <div className="skyline-content">
                <div className="skyline-left">
                    <div className="skyline-logo">
                        <img
                            src="logo/UASkyline_logo5.png" alt="Skyline"
                            className="background-image"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        />
                    </div>
                    <div className="skyline-description" data-aos="zoom-in-up" data-aos-duration="1000">
                        <p>
                            Ми — український виробник дронів, що спеціалізується на створенні кастомних рішень під реальні задачі.
                            У нашій основі — власне виробництво, бойовий досвід і гнучкий підхід: кожен безпілотник проєктується
                            відповідно до вимог підрозділу чи проєкту. Надійність, адаптивність і швидке впровадження — це те, що відрізняє нас від інших.
                        </p>
                        <br />
                        <p>
                            Наша команда — це ветерани війни, інженери, пілоти, випробувачі та аналітики, які об'єднали практику,
                            технічну експертизу та розуміння реального бою. Ми не працюємо “на стіл” — ми створюємо рішення,
                            які одразу йдуть у поле бою та дають результат. Команда дихає одним ритмом із підрозділами,
                            розуміє фронтові потреби й знає, як реалізувати задачу у готовий продукт.
                        </p>
                        <p className="highlight" data-aos="zoom-in-up" data-aos-duration="1500">
                            Свій для своїх. Робимо те, що справді працює.
                        </p>
                    </div>
                </div>

                <img
                    src="img/verified.png"
                    alt="verified"
                    className='verified'
                    data-aos="zoom-out"
                    data-aos-duration="1500"
                />

                <div className="skyline-right">
                    <img
                        src="img/soldier-1.png"
                        alt="Military Soldier"
                        className="soldier-image"
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                    />
                </div>
            </div>
        </div>
    );
}
