import './page11.css';

export function Page11() {
    return (
        <div className="page11-skyline-container">
            <img className="page11-madeinua-icon" src="./public/img/madeInUa.jpg" alt="Made in UA" data-aos="fade-right" data-aos-duration="800" />
            
            <div className='page11-upper' data-aos="fade-right" data-aos-duration="1000">
                <h1 className='page11-left-side-drone'
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200">
                    SKIF
                </h1>
                <h2 className='page11-left-side-subtext' data-aos="fade-left" data-aos-delay="300">ДОДАТКОВІ МОДИФІКАЦІЇ BY UASKYLINE</h2>
            </div>

            <div className='page11-skyline-content'>
                <div className="page11-left-side" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className='page11-block-drone'
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        SKIF-13 Optical
                    </h1>

                    <img src="/drones/SKIF_13_optical.png" alt="SKIF_13_optical-info" className='page11-middle-side-img' />

                    <h2 className='page11-left-side-subtext' data-aos="fade-left" data-aos-delay="300">SKIF-13 basic +Оптоволоконна котушка “На дроті” на 15/20/25</h2>
                </div>
                <div className='page11-right-side' data-aos="fade-left" data-aos-duration="1000">
                    <h1 className='page11-block-drone'
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        SKIF-13 Digital
                    </h1>

                    <img src="/drones/SKIF_13_digital.png" alt="SKIF_13_optical-info" className='page11-middle-side-img' />

                    <h2 className='page11-left-side-subtext' data-aos="fade-left" data-aos-delay="300">SKIF-13 basic + Відеосистема цифрова Walksnail Moonlight DJI O3 Air Unit та DJI O4 Air Unit</h2>
                </div>
            </div>
        </div>
    );
}