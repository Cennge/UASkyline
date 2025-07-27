import './page7.css';

export function Page7() {
    return (
        <div className="page7-skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="page7-skyline-background"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
            />

            <img className="page7-madeinua-icon" src="./public/img/madeInUa.jpg" alt="Made in UA" />

            <div className="page7-skyline-content">
                <div className='page7-left-side'>
                    <div className='page7-left-side-header'>
                        <h2
                            className='page7-left-side-name'
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            БЕЗПІЛОТНИЙ АВІАЦІЙНИЙ КОМПЛЕКС
                        </h2>
                        <h1
                            className='page7-left-side-drone'
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            SKIF-8
                        </h1>
                    </div>
                    <img
                        src="./drones/SKIF_8.png"
                        alt="SKIF_10"
                        className='page7-left-side-img'
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="400"
                    />
                    <div className="page7-left-side-features-list">
                        <ul
                            className="page7-left-side-features-items"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="600"
                        >
                            <li className="page7-left-side-feature-item">Локалізація українських компонентів 80%</li>
                            <li className="page7-left-side-feature-item">Універсальне кріплення під БЧ</li>
                        </ul>
                    </div>
                </div>

                <div className='page7-right-side'>
                    <div className='page7-right-side-header'>
                        <img
                            src="./logo/UASkyline_logo8.png"
                            alt="UASkyline"
                            className='page7-right-side-logo'
                            data-aos="flip-left"
                            data-aos-duration="800"
                        />
                        <div className="page7-drone-card" data-aos="fade-up" data-aos-duration="1000">
                            <h3 className="page7-drone-title">SKIF-8</h3>
                            <p className="page7-drone-subtitle">
                                FPV-штурмовик ближньої
                                дистанції. Влучає там, де інші
                                не пролазять. Швидкий.
                                Маневрений. Летить —
                                вражає.
                            </p>
                            <p className="page7-drone-description">
                                Легкий ударний дрон
                                ближньої дії, створений для
                                знищення живої сили, техніки
                                противника шляхом прямого
                                ураження. Ідеально підходить
                                для бойових задач в умовах
                                щільної забудови, у роботі
                                мобільних груп та при
                                виконанні точкових ударів.
                                Працює там, де потрібна
                                швидкість, рішучість і точність.
                            </p>
                            <div className="page7-drone-accent-line"></div>
                        </div>

                        <img
                            src="./drones/SKIF_10_рама.png"
                            alt="skif-10 frame"
                            className='page7-imagedrone-frame'
                            data-aos="zoom-in-up"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
