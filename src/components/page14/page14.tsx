import './page14.css';

export function Page14() {
    const batterySpecs = [
        { parameter: "Максимальна напруга повністю зарядженої батареї", value: "17.6В" },
        { parameter: "Номінальна напруга", value: "15.4В" },
        { parameter: "Ємність батареї", value: "5000 mAh (5 Ah, 77 Wh)" },
        { parameter: "Середній струм споживання дрона становить", value: "10A" },
        { parameter: "Середня споживана потужність", value: "160Вт" },
        { parameter: "Вага батареї", value: "330г" },
    ];

    return (
        <div className="page14-skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="page14-skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
            />

            <img className="page14-bottom-image" data-aos="fade-up-left" data-aos-duration="1000" src="./logo/UASkyline_logo8.png" alt="Logo" />

            <div className="page14-skyline-content">
                <div className="page14-left-side" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="page14-left-side-drone" data-aos="fade-left" data-aos-delay="200">
                        АКБ ДЛЯ MAVIC
                    </h1>
                    <h2 className="page14-left-side-subtext" data-aos="fade-left" data-aos-delay="300">
                        Технічні характеристики
                    </h2>

                    <div className="page14-table-container" data-aos="fade-up" data-aos-delay="400">
                        <table className="page14-table">
                            <tbody>
                                {batterySpecs.map((row, index) => (
                                    <tr key={index} className="page14-tr" data-aos="fade-up" data-aos-delay={500 + index * 50}>
                                        <td className="page14-td page14-td-first">{row.parameter}</td>
                                        <td className="page14-td page14-td-last">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="page14-left-side-table-footer" data-aos="fade-up" data-aos-delay="1100">
                        <p className="page14-footer-title">Як це працює:</p>
                        <p className="page14-footer-text">
                            Ви надсилаєте нам батарею від дрона, а ми доопрацьовуємо її для підключення додаткового акумулятора
                            та виготовляємо цей додатковий акумулятор.
                        </p>

                        <div className="price-block" data-aos="fade-up" data-aos-delay="1200">
                            <div className="price-label">Пристосування батареї</div>
                            <div className="price-tag">430 <span className="price-currency">грн.</span></div>
                        </div>

                        <div className="price-block" style={{ marginTop: "20px" }} data-aos="fade-up" data-aos-delay="1300">
                            <div className="price-label">Додаткова батарея</div>
                            <div className="price-tag">1390 <span className="price-currency">грн.</span></div>
                        </div>
                    </div>
                </div>

                <div className="page14-right-side" data-aos="fade-left" data-aos-duration="1000">
                    <img
                        src="./drones/MAVIC_battery.png"
                        alt="АКБ Mavic"
                        className="page14-right-side-img"
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        data-aos-delay="100"
                    />
                </div>
            </div>
        </div>
    );
}
