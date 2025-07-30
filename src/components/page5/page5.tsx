import './page5.css';

export function Page5() {
    const data = [
        { parameter: "Максимальна дальність", value: "до 30 км" },
        { parameter: "Тактичний радіус дії", value: "до 25 км" },
        { parameter: "Максимальне корисне навантаження", value: "до 4кг (рекомендоване 2-2.5кг)" },
        { parameter: "Максимальна швидкість ", value: "140 км/год" },
        { parameter: "Крейсерська швидкість", value: "60-80 км/год" },
        { parameter: "Рама", value: "10’’ карбон" },
        { parameter: "KV двигунів ", value: "900kv" },
        { parameter: "Камера", value: "1500tvl" },
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
        <div className="page5-skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="page5-skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
            />

            <img className="page5-madeinua-icon" src="./img/madeInUa.jpg" alt="Made in UA" data-aos="fade-right" data-aos-duration="800" />
            <img className="page5-bottom-image" data-aos="fade-up-left" data-aos-duration="1000" src="./logo/UASkyline_logo8.png" alt="Logo" />

            <div className='page5-skyline-content'>
                <div className="page5-left-side" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className='page5-left-side-drone'
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        SKIF-10D
                    </h1>
                    <h2 className='page5-left-side-subtext' data-aos="fade-left" data-aos-delay="300">TTX</h2>
                    <div className="page5-table-container" data-aos="fade-up" data-aos-delay="400">
                        <table className="page5-table">
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className="page5-tr" data-aos="fade-up" data-aos-delay={500 + index * 50}>
                                        <td className="page5-td page5-td-first">{row.parameter}</td>
                                        <td className="page5-td page5-td-last">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="page5-left-side-table-footer" data-aos="fade-up" data-aos-delay="1100">
                        <p>(*) Технічні характеристики можуть бути змінені відповідно до замовлення</p>
                        <p>Рекомендовані АКБ</p>
                    </div>

                    <div className="page5-table-container page5-table-container1" style={{ marginTop: 20 }} data-aos="fade-up" data-aos-delay="1200">
                        <table className="page5-table">
                            <tbody>
                                <tr>
                                    {batteryData.map((item, idx) => (
                                        <td key={idx} className="page5-td">{item}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='page5-right-side' data-aos="fade-left" data-aos-duration="1000">
                    <div className="page5-banner" data-aos="zoom-in" data-aos-delay="200">
                        FPV КАМІКАДЗЕ
                    </div>

                    <img
                        src="./drones/SKIF_10D.png"
                        alt="SKIF_10D"
                        className='page5-right-side-img'/>

                    <div>
                        <div style={{ position: "relative", display: "inline-block" }} data-aos="fade-up" data-aos-delay="600">
                            <div className="page5-banner">
                                <span className="page5-main-text">Ціна від 16 000 <span style={{ color: "#fff", fontWeight: "normal", fontSize: 15 }}>грн</span></span>
                            </div>
                            <span className="page5-sticker">БЕЗ АКБ</span>
                        </div>
                        <div className='page5-right-side-banner-description' data-aos="fade-up" data-aos-delay="700">
                            <p>ціни вказані без % на прибуток </p>
                            <p>  та операційних витрат</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}