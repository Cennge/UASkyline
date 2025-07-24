import './page1.css';

export function Page1() {
    return (
        <div className="page1-skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="page1-skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
            />
            <div className="page1-skyline-content">
                <div className="page1-skyline-left">
                    <div className="page1-skyline-logo">
                        <img
                            src="logo/UASkyline_logo5.png" alt="Skyline"
                            className="page1-background-image"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        />
                    </div>
                    <div className="page1-skyline-description" data-aos="zoom-in-up" data-aos-duration="1000">
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
                        <p className="page1-highlight" data-aos="zoom-in-up" data-aos-duration="1500">
                            Свій для своїх. Робимо те, що справді працює.
                        </p>
                    </div>
                </div>

                <div className="page1-skyline-right">
                    <img
                        src="img/verified.png"
                        alt="verified"
                        className='page1-verified'
                        data-aos="zoom-out"
                        data-aos-duration="1500"
                    />
                    <img
                        src="img/soldier-1.png"
                        alt="Military Soldier"
                        className="page1-soldier-image"
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                    />
                </div>
            </div>
        </div>
    );
}
