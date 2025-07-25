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
                </div>

                <div className='page4-right-side'>
                </div>
            </div>
        </div>
    );
}
