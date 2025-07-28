import "./page13.css"

export function Page13() {
    const data1 = [
        {parameter: "6S2P", value:"2650"},
        {parameter: "6S3P", value:"3800"},
        {parameter: "6S4P", value:"5200"},
    ];
    const data2 = [
        {parameter: "6S2P", value:"2900"},
        {parameter: "6S3P", value:"4100"},
        {parameter: "6S4P", value:"5800"},
    ];
    const data3 = [
        {parameter: "6S2P", value:"2000"},
        {parameter: "6S3P", value:"2800"},
        {parameter: "6S4P", value:"3800"},
    ];

    return (
       <div className="page13-skyline-container">
            <img 
            src="img/frame.png"
            alt="Frame Background"
                className="page13-skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
            />

            <img className="page13-madeinua-icon" src="./public/img/madeInUa.jpg" alt="Made in UA" data-aos="fade-right" data-aos-duration="800" />
            <img className="page13-bottom-image" data-aos="fade-up-left" data-aos-duration="1000" src="./public/logo/UASkyline_logo8.png" alt="Logo" />

            <div className="page13-skyline-content">
                <div className="page13-left-side" data-aos="fade-right" data-aos-duration="1000">
                <div className="page13-title" data-aos="fade-right" data-aos-duration="1000">
                    <p>АККУМУЛЯТОР ДЛЯ ДРОНІВ</p>
                    </div>
                    <div className="page13-subtitle" data-aos="fade-right" data-aos-duration = "1000" />
                    <p> ЗАБЕЗПЕЧУЄ ТРИВАЛУ РОБОТУ ТА НАДІЙНІСТЬ</p> 
            </div>
            </div>
            </div>
    );
}