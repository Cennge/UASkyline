import './page2.css';

export function Page2() {
    return (
        <div className="page2-skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="page2-skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
            />
            {/* <div className="page2-image-background">
                <img src="./public/backgrounds/background2slide.jpg" alt="Background" />
                </div> */}
            <img className="page2-madeinua-icon" src="./public/img/madeInUa.jpg" alt="Made in UA" />
            <img className="page2-bottom-image" src="./public/logo/UASkyline_logo8.png" alt="Logo" />

            <div className="page2-columns">
                <div className="page2-column">
                    <h2 className="page2-title">Чому ми?</h2>
                    <div className="page2-item">
                        <img src="./public/icons/1.png" alt="icon" />
                        <p>Ми — бойове R&D-ком’юніті з фронтовим досвідом.</p>
                    </div>
                    <div className="page2-item">
                        <img src="./public/icons/2.png" alt="icon" />
                        <p>Створюємо засіб разом з екіпажами під реальні ТЗ.</p>
                    </div>
                    <div className="page2-item">
                        <img src="./public/icons/3.png" alt="icon" />
                        <p>Комплекс працює одразу — без донастройки.</p>
                    </div>
                    <div className="page2-item">
                        <img src="./public/icons/4.png" alt="icon" />
                        <p>Свій для своїх<br />Тут немає клієнтів — тут партнери</p>
                    </div>
                </div>

                <div className="page2-column">
                    <h2 className="page2-title">Яку біль ми знімаємо?</h2>
                    <div className="page2-item">
                        <img src="./public/icons/5.png" alt="icon" />
                        <p>Підрозділ отримує саме той засіб, що йому потрібен</p>
                    </div>
                    <div className="page2-item">
                        <img src="./public/icons/6.png" alt="icon" />
                        <p>Дрони вже адаптовані до умов, частот, батарей</p>
                    </div>
                    <div className="page2-item">
                        <img src="./public/icons/7.png" alt="icon" />
                        <p>Комплекс готовий до застосування з коробки</p>
                    </div>
                    <div className="page2-item">
                        <img src="./public/icons/8.png" alt="icon" />
                        <p>Жодного «допилювання» — лише результат</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
