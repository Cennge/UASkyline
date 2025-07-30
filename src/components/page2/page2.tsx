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
            <img className="page2-madeinua-icon" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" src="./img/madeInUa.jpg" alt="Made in UA" />
            <img className="page2-bottom-image"  data-aos="fade-up-left" data-aos-duration= "1000"  src="./logo/UASkyline_logo8.png" alt="Logo" />

            <div className="page2-columns">
                <div className="page2-column" >
                    <h2 className="page2-title" data-aos="fade-down" data-aos-duration="1000"> Чому ми?</h2>
                    <div className="page2-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        <img src="./icons/1.png" alt="icon" />
                        <p>Ми — бойове R&D-ком’юніті з фронтовим досвідом.</p>
                    </div>
                    <div className="page2-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" >
                        <img src="./icons/2.png" alt="icon" />
                        <p>Створюємо засіб разом з екіпажами під реальні ТЗ.</p>
                    </div>
                    <div className="page2-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" >
                        <img src="./icons/3.png" alt="icon" />
                        <p>Комплекс працює одразу — без донастройки.</p>
                    </div>
                    <div className="page2-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" >
                        <img src="./icons/4.png" alt="icon" />
                        <p>Свій для своїх<br />Тут немає клієнтів — тут партнери</p>
                    </div>
                </div>

                <div className="page2-column">
                    <h2 className="page2-title" data-aos="fade-down" data-aos-duration="1000">Яку біль ми знімаємо?</h2>
                    <div className="page2-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                        <img src="./icons/5.png" alt="icon" />
                        <p>Підрозділ отримує саме той засіб, що йому потрібен</p>
                    </div>
                    <div className="page2-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        <img src="./icons/6.png" alt="icon" />
                        <p>Дрони вже адаптовані до умов, частот, батарей</p>
                    </div>
                    <div className="page2-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" >
                        <img src="./icons/7.png" alt="icon" />
                        <p>Комплекс готовий до застосування з коробки</p>
                    </div>
                    <div className="page2-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" >
                        <img src="./icons/8.png" alt="icon" />
                        <p>Жодного «допилювання» — лише результат</p>
                    </div>
                </div>
            </div>
        </div>
    );
}