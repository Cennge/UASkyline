import './page10.css';

export function Page10() {
    const batterySpecs = [
        { parameter: "Сценарії Детонації Плати", value: "Умови Спрацювання" },
        { parameter: "При зіткненні з перешкодою", value: "Детонація відбувається, коли рама БпЛА вдаряється в ціль, поверхню, чи перешкоду, і відбувається різка зміна швидкості. Напрямок зіткнення — будь-який" },
        { parameter: "Самознищення", value: "Через 30 хвилин з моменту активації тумблер запобіжника No2." },
    ];

    return (
        <div className="page10-skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="page10-skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
            />

            <img className="page10-madeinua-icon" src="./public/img/madeInUa.jpg" alt="Made in UA" data-aos="fade-right" data-aos-duration="800" />
            <img className="page10-bottom-image" data-aos="fade-up-left" data-aos-duration="1000" src="./public/logo/UASkyline_logo8.png" alt="Logo" />

            <div className="page10-skyline-content">
                <div className="page10-left-side" data-aos="fade-right" data-aos-duration="1000">
                    <div className='page10-header-part'>
                        <h2 className="page10-left-side-subtext" data-aos="fade-left" data-aos-delay="300">
                            кодифікована плата ініціації
                        </h2>
                        <h1 className="page10-left-side-drone" data-aos="fade-left" data-aos-delay="200">
                            УПБМ-3
                        </h1>
                    </div>
                    <img src="/drones/upbm-info.png" alt="upbm-info" className='page10-middle-side-img' />

                    <div className='page10-footer-part' data-aos="fade-up" data-aos-delay="500">
                        <div className="page10-table-container" data-aos="fade-up" data-aos-delay="400">
                            <table className="page10-table">
                                <tbody>
                                    {batterySpecs.map((row, index) => (
                                        <tr key={index} className="page10-tr" data-aos="fade-up" data-aos-delay={500 + index * 50}>
                                            <td className="page10-td page10-td-first">{row.parameter}</td>
                                            <td className="page10-td page10-td-last">{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <div style={{ position: "relative", display: "inline-block" }} data-aos="fade-up" data-aos-delay="600">
                                <div className="page10-banner">
                                    <span className="page10-main-text">Ціна від 800<span style={{ color: "#fff", fontWeight: "normal", fontSize: 15 }}>грн</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
