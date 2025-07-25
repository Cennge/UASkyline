import './page3.css';

export function Page3() {
    return (
        <div className="page3-skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="page3-skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
            />

            <img className="page3-madeinua-icon" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" src="./public/img/madeInUa.jpg" alt="Made in UA" />
            <img className="page3-bottom-image" data-aos="fade-up-left" data-aos-duration= "1000" src="./public/logo/UASkyline_logo8.png" alt="Logo" />

            <div className="page3-columns">
                <div className="page3-column">
                    <h2 className="page3-title" data-aos="fade-down" data-aos-duration="1000" >Чому ми кращі за інших?</h2>
                    <div className="page3-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        <img src="./public/icons/1.png" alt="icon" />
                        <p>Команда з ветеранів та бойовим досвідом</p>
                    </div>
                    <div className="page3-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" >
                        <img src="./public/icons/2.png" alt="icon" />
                        <p>Досвід прямого бойового застосування FPV</p>
                    </div>
                    <div className="page3-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" >
                        <img src="./public/icons/3.png" alt="icon" />
                        <p>Гнучка модульність та швидке оновлення</p>
                    </div>
                    <div className="page3-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" >
                        <img src="./public/icons/4.png" alt="icon" />
                        <p>Замкнена екосистема: виробництво — підтримка</p>
                    </div>
                </div>

                <div className="page3-column">
                    <h2 className="page3-title" data-aos="fade-down" data-aos-duration="1000">Чому купити саме у нас?</h2>
                    <div className="page3-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" >
                        <img src="./public/icons/5.png" alt="icon" />
                        <p>Комплекс «під ключ» — від ТЗ до навчання</p>
                    </div>
                    <div className="page3-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" >
                        <img src="./public/icons/6.png" alt="icon" />
                        <p>Гарантія, сервіс, техпідтримка, модернізація</p>
                    </div>
                    <div className="page3-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" >
                        <img src="./public/icons/7.png" alt="icon" />
                        <p>Оптимізація під бойові задачі, вимоги екіпажів та умов застосування</p>
                    </div>
                    <div className="page3-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        <img src="./public/icons/8.png" alt="icon" />
                        <p>Незалежні від імпорту — локальне виробництво</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
