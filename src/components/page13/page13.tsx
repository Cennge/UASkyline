import "./page13.css";

export function Page13() {
    const data1 = [
        { parameter: "6S2P", value: "2650" },
        { parameter: "6S3P", value: "3800" },
        { parameter: "6S4P", value: "5200" },
    ];
    const data2 = [
        { parameter: "6S2P", value: "2900" },
        { parameter: "6S3P", value: "4100" },
        { parameter: "6S4P", value: "5800" },
    ];
    const data3 = [
        { parameter: "6S2P", value: "2000" },
        { parameter: "6S3P", value: "2800" },
        { parameter: "6S4P", value: "3800" },
    ];

    const renderTable = (
        title: string,
        data: { parameter: string; value: string }[],
        delay: number
    ) => (
        <div
            className="page13-mini-table"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={delay}
        >
            <div className="page13-table-title">{title}</div>
            <div className="page13-table-content">
                {data.map((row, index) => (
                    <div key={index} className="page13-table-row">
                        <span className="page13-parameter">{row.parameter}</span>
                        <span className="page13-value">{row.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="page13-skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="page13-skyline-background"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay={0}
            />
            <img
                className="page13-madeinua-icon"
                src="./public/img/madeInUa.jpg"
                alt="Made in UA"
                data-aos="fade-down-left"
                data-aos-duration="1000"
                data-aos-delay={100}
            />
            <img
                className="page13-bottom-image"
                data-aos="fade-up-left"
                data-aos-duration="1000"
                data-aos-delay={200}
                src="./public/logo/UASkyline_logo8.png"
                alt="Logo"
            />

            <div
                className="page13-inner"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={300}
            >
                <div
                    className="page13-left"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay={400}
                >
                    <div className="page13-left-frame">
                        <div className="page13-left-content">
                            <div
                                className="page13-title"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay={500}
                            >
                                АКУМУЛЯТОР ДЛЯ ДРОНІВ
                            </div>
                            <div
                                className="page13-subtitle"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay={600}
                            >
                                ЗАБЕЗПЕЧУЄ ТРИВАЛУ РОБОТУ ТА НАДІЙНІСТЬ
                            </div>
                            <div
                                className="page13-battery-image-container"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay={700}
                            >
                                <img
                                    src="./public/drones/drone_battery.png"
                                    alt="Battery"
                                    className="page13-battery-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="page13-right"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay={800}
                >
                    <div className="page13-table-row-wrapper">
                        {renderTable("Ціни на елементах Molicel P42A, грн", data1, 900)}
                        {renderTable("Ціни на АКБ на елементах Samsung 50S, грн", data2, 1000)}
                        {renderTable(
                            "Ціни на АКБ на елементах Quantum 4000mAh, грн",
                            data3,
                            1100
                        )}
                    </div>

                    <div
                        className="page13-description"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={1200}
                    >
                        Розробляємо та виготовляємо АКБ під літальні апарати, FPV-бомбері та НРК.
                        Працюємо під ТЗ замовника.
                    </div>

                    <div
                        className="page13-bottom-battery"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={1300}
                    >
                        <img src="./public/drones/2battery.png" alt="Battery Model" />
                        <div className="page13-bottom-caption">
                            Під замовленням відповідно до Вашого ТЗ
                        </div>
                    </div>

                    <div
                        className="page13-dronetypes"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={1400}
                    >
                        ДЛЯ БПЛА Вампір / Баба Яга / HeavyShot / Кажан / Немезіс / Агродрон
                    </div>
                </div>
            </div>
        </div>
    );
}