import './page8.css';

export function Page8() {
    const data = [
        { parameter: "Максимальна дальність", value: "до 20 км" },
        { parameter: "Тактичний радіус дії", value: "до 18 км" },
        { parameter: "Максимальне корисне навантаження", value: "до 2кг (рекомендоване 1.5-2кг)" },
        { parameter: "Максимальна швидкість ", value: "120 км/год" },
        { parameter: "Крейсерська швидкість", value: "60-80 км/год" },
        { parameter: "Рама", value: "8’’ карбон" },
        { parameter: "KV двигунів ", value: "1150kv" },
        { parameter: "Камера", value: "1500TVL" },
        { parameter: "Частотний діапазон каналів управління", value: "360-560mHz\n730-1030mHz\n2100-2690mHz(*)" },
        { parameter: "Відео (*) Підтримка L, X, S діапазонів", value: "1.2-1.3 / 3.3/ 4.9-6.0 ггц (*)" },
        { parameter: "Потужність відеопередавача", value: "до 3000mW" },
        { parameter: "Експлуатаційний діапазон", value: "(від -15 до +40)°C" },
        { parameter: "Температура опади (сніг, дощ, туман), швидкість вітру", value: "до 15 м/с" },
        { parameter: "Акумуляторна збірка", value: "6s3p 12000Mha" }
    ];

    const batteryData = [
        "6s2p 8000Mha",
        "6s3p 12000Mha"
    ];

    return (
        <div className="page8-skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="page8-skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
            />

            <img className="page8-bottom-image" data-aos="fade-up-left" data-aos-duration="1000" src="./logo/UASkyline_logo8.png" alt="Logo" />

            <div className='page8-skyline-content'>
                <div className="page8-left-side" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className='page8-left-side-drone'
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        SKIF-8D
                    </h1>
                    <h2 className='page8-left-side-subtext' data-aos="fade-left" data-aos-delay="300">TTX</h2>
                    <div className="page8-table-container" data-aos="fade-up" data-aos-delay="400">
                        <table className="page8-table">
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className="page8-tr" data-aos="fade-up" data-aos-delay={500 + index * 50}>
                                        <td className="page8-td page8-td-first">{row.parameter}</td>
                                        <td className="page8-td page8-td-last">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="page8-left-side-table-footer" data-aos="fade-up" data-aos-delay="1100">
                        <p>(*) Технічні характеристики можуть бути змінені відповідно до замовлення</p>
                        <p>Рекомендовані АКБ</p>
                    </div>

                    <div className="page8-table-container page8-table-container1" style={{ marginTop: 20 }} data-aos="fade-up" data-aos-delay="1200">
                        <table className="page8-table">
                            <tbody>
                                <tr>
                                    {batteryData.map((item, idx) => (
                                        <td key={idx} className="page8-td">{item}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='page8-right-side' data-aos="fade-left" data-aos-duration="1000">
                    <div className="page8-banner" data-aos="zoom-in" data-aos-delay="200">
                        FPV КАМІКАДЗЕ
                    </div>

                    <img
                        src="./drones/SKIF_8D.png"
                        alt="SKIF_10D"
                        className='page8-right-side-img'
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="400" />

                    <div>
                        <div style={{ position: "relative", display: "inline-block" }} data-aos="fade-up" data-aos-delay="600">
                            <div className="page8-banner">
                                <span className="page8-main-text">Ціна від 13 000 <span style={{ color: "#fff", fontWeight: "normal", fontSize: 15 }}>грн</span></span>
                            </div>
                            <span className="page8-sticker">БЕЗ АКБ</span>
                        </div>
                        <div className='page8-right-side-banner-description' data-aos="fade-up" data-aos-delay="700">
                            <p>ціни вказані без % на прибуток </p>
                            <p>  та операційних витрат</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}