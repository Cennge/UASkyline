import './page4.css';

export function Page4() {
    return (
        <div className="page4-skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="page4-skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
            />
            <div className="page4-skyline-content">
                <div className='page4-left-side'>
                    <div className='page4-left-side-header'>
                        <h2 className='page4-left-side-name'>БЕЗПІЛОТНИЙ АВІАЦІЙНИЙ КОМПЛЕКС</h2>
                        <h1 className='page4-left-side-drone'>SKIF-10</h1>
                    </div>
                    <img
                        src="./drones/SKIF_10.png"
                        alt="SKIF_10"
                        className='page4-left-side-img'
                    />
                    <div className="page4-left-side-features-list">
                        <ul className="page4-left-side-features-items">
                            <li className="page4-left-side-feature-item">Локалізація українських компонентів 80%</li>
                            <li className="page4-left-side-feature-item">Універсальне кріплення під БЧ</li>
                        </ul>
                    </div>

                </div>

                <div className='page4-right-side'>
                    <div className='page4-right-side-header'>
                        <img
                            src="./logo/UASkyline_logo8.png"
                            alt="UASkyline"
                            className='page4-right-side-logo'
                        />
                        <div className="page4-drone-card">
                            <h3 className="page4-drone-title">SKIF-10</h3>
                            <p className="page4-drone-subtitle">
                                Коли треба не просто дістати — а <br /> гарантовано знищити.
                            </p>
                            <p className="page4-drone-description">
                                Високоточний дрон-камікадзе для виконання завдань на передньому краї. <br />
                                Працює швидко, влучно, без компромісів.
                            </p>
                            <div className="page4-drone-accent-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
