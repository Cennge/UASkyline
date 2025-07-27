import './page6.css';

export function Page6() {
    const data = [
        { parameter: "Максимальна дальність", value: "до 30 км" },
        { parameter: "Тактичний радіус дії", value: "до 25 км" },
        { parameter: "Максимальне корисне навантаження", value: "до 4кг (рекомендоване 2-2.5кг)" },
        { parameter: "Максимальна швидкість ", value: "140 км/год" },
        { parameter: "Крейсерська швидкість", value: "60-80 км/год" },
        { parameter: "Рама", value: "10’’ карбон" },
        { parameter: "KV двигунів ", value: "900kv" },
        { parameter: "Камера", value: "тепловізійна Seek UAV 256 - 256х192\n сутінкова - Caddx Ratel Pro 1500tv" },
        { parameter: "Частотний діапазон каналів управління", value: "360-560mHz\n730-1030mHz\n2100-2690mHz(*)" },
        { parameter: "Відео (*) Підтримка L, X, S діапазонів", value: "1.2-1.3 / 3.3/ 4.9-6.0 ггц (*)" },
        { parameter: "Потужність відеопередавача", value: "до 3000mW" },
        { parameter: "Експлуатаційний діапазон", value: "(від -15 до +40)°C" },
        { parameter: "Температура опади (сніг, дощ, туман), швидкість вітру", value: "до 15 м/с" },
        { parameter: "Акумуляторна збірка", value: "6s4p 20000Mha" }
    ];

    const batteryData = [
        "6s3p 12000Mha",
        "6s3p 15000Mha",
        "6s4p 18000Mha",
        "6s4p 20000Mha"
    ];

    return (
        <div className="page6-skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="page6-skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
            />

            <img className="page6-madeinua-icon" src="./public/img/madeInUa.jpg" alt="Made in UA" data-aos="fade-right" data-aos-duration="800" />
            <img className="page6-bottom-image" data-aos="fade-up-left" data-aos-duration="1000" src="./public/logo/UASkyline_logo8.png" alt="Logo" />

            <div className='page6-skyline-content'>
                <div className="page6-right-side" data-aos="fade-left" data-aos-duration="1000">
                    <div className="page6-banner" data-aos="zoom-in" data-aos-delay="200">
                        FPV КАМІКАДЗЕ
                    </div>

                    <img
                        src="./drones/SKIF_10TN.png"
                        alt="SKIF_10D"
                        className='page6-right-side-img'
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        data-aos-delay="100" />

                    <div>
                        <div style={{ position: "relative", display: "inline-block" }} data-aos="fade-up" data-aos-delay="600">
                            <div className="page6-banner">
                                <span className="page6-main-text">Ціна від 25 000 <span style={{ color: "#fff", fontWeight: "normal", fontSize: 15 }}>грн</span></span>
                            </div>
                            <span className="page6-sticker">БЕЗ АКБ</span>
                        </div>
                        <div className='page6-right-side-banner-description' data-aos="fade-up" data-aos-delay="700">
                            <p>ціни вказані без % на прибуток </p>
                            <p>  та операційних витрат</p>
                        </div>
                    </div>
                </div>

                <div className="page6-left-side" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className='page6-left-side-drone'
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        SKIF-10TN
                    </h1>
                    <h2 className='page6-left-side-subtext' data-aos="fade-left" data-aos-delay="300">TTX</h2>
                    <div className="page6-table-container" data-aos="fade-up" data-aos-delay="400">
                        <table className="page6-table">
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className="page6-tr" data-aos="fade-up" data-aos-delay={500 + index * 50}>
                                        <td className="page6-td page6-td-first">{row.parameter}</td>
                                        <td className="page6-td page6-td-last">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="page6-left-side-table-footer" data-aos="fade-up" data-aos-delay="1100">
                        <p>(*) Технічні характеристики можуть бути змінені відповідно до замовлення</p>
                        <p>Рекомендовані АКБ</p>
                    </div>

                    <div className="page6-table-container page6-table-container1" style={{ marginTop: 20 }} data-aos="fade-up" data-aos-delay="1200">
                        <table className="page6-table">
                            <tbody>
                                <tr>
                                    {batteryData.map((item, idx) => (
                                        <td key={idx} className="page6-td">{item}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}