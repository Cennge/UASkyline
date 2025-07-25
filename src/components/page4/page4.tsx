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
                <h1 data-aos="fade-up" data-aos-duration="500">UASKYLINE</h1>
                <p data-aos="fade-up" data-aos-duration="500">
                    A platform for students to ask questions and get answers from their peers.
                </p>
            </div>
        </div>
    );
}
