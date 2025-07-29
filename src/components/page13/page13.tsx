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

    const renderTable = (title: string, data: { parameter: string; value: string }[]) => (
        <div className="page13-mini-table">
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
            />

            <div className="page13-inner">
                <div className="page13-left">
                    <div className="page13-title">АКУМУЛЯТОР ДЛЯ ДРОНІВ</div>
                    <div className="page13-subtitle">ЗАБЕЗПЕЧУЄ ТРИВАЛУ РОБОТУ ТА НАДІЙНІСТЬ</div>
                    <div className="page13-battery-image-container">
                        <img
                            src="./public/drones/drone_battery.png"
                            alt="Battery"
                            className="page13-battery-image"
                        />
                    </div>
                </div>

                <div className="page13-right">
                    {renderTable("Ціни на елементах Molicel P42A, грн", data1)}
                    {renderTable("Ціни на АКБ на елементах Samsung 50S, грн", data2)}
                    {renderTable("Ціни на АКБ на елементах Quantum 4000mah, грн", data3)}
                </div>
            </div>

            <img className="page13-madeinua-icon" src="./public/img/madeInUa.jpg" alt="Made in UA" />
            <img className="page13-bottom-image" src="./public/logo/UASkyline_logo8.png" alt="Logo" />
        </div>
    );
}
