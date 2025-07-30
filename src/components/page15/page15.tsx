import './page15.css';

export function Page15() {
    const data = [
        { parameter: "Напруга стабілізована (В)", value: "28 / 28" },
        { parameter: "Струм (А, до…)", value: "35 / 35-40" },
        { parameter: "Місткість (мА/Год)", value: "63000 / 65000" },
        { parameter: "Потужність (Вт/Час)", value: "1420 / 2260" },
        { parameter: "Потужність до ваги (Вт/Час/Кг)", value: "190 / 255" },
        { parameter: "Заряд від мережі 220В (Вт)", value: "500 / 1000" },
        { parameter: "Заряд від бортової мережі 12-24В (А)", value: "30 / 40" },
        { parameter: "*BMS BlueTooth управління", value: "Так" },
        { parameter: "Розмір (Д/Ш/В мм)", value: "140 / 175 / 500" },
        { parameter: "Вага (Кг)", value: "13 / 15" },
    ];

    const set = [
        { parameter: "Блок живлення від ~220В", value: "25В/15А, 42В/15А" },
        { parameter: "Кабель зарядки від бортової мережі", value: "5, 6" },
        { parameter: "Пульт дистанційного увімкнення/вимкнення батареї з індикацією стану роботи батареї (М)", value: "15, 20" }
    ];

    return (
        <div className="page15-skyline-container">
            <img
                src="./img/frame.png"
                alt="Frame Background"
                className="page15-skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
            />

            <img className="page15-bottom-image" data-aos= "fade-up-left" src="./logo/UASkyline_logo8.png" alt="Logo" />

            <div className='page15-skyline-content'>
                <div className="page15-left-side" >
                    <h1 className='page15-left-side-drone' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        АКБ ДЛЯ РЕБ
                    </h1>
                    <div className='page15-left-side-subtext'  data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        Компактні розміри пристрою та спеціальні ремені в комплекті забезпечують зручне перенесення
                        акумулятора на плечі або за спиною, що підвищує маневреність. Завдяки повному комплекту кабелів і
                        проводів, акумулятор можна заряджати від різних джерел — мережі, автомобіля або генератора.
                    </div>
                    <div className="page15-table-container" data-aos= "fade-right" data-aos-duration="1000" data-aos-delay="500">
                        <table className="page15-table">
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className="page15-tr" >
                                        <td className="page15-td page15-td-first">{row.parameter}</td>
                                        <td className="page15-td page15-td-last">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="page15-table-container">
                        <table className="page15-table-bottom" data-aos= "fade-right" data-aos-duration="1000" data-aos-delay="500" >
                            <thead>
                                <tr>
                                    <th className="page15-td page15-td-first">Комплектація</th>
                                    <th className="page15-td page15-td-last">Опис</th>
                                </tr>
                            </thead>
                            <tbody>
                                {set.map((row, index) => (
                                    <tr key={index} className="page15-tr">
                                        <td className="page15-td page15-td-first">{row.parameter}</td>
                                        <td className="page15-td page15-td-last">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='page15-right-side' >
                    <div className="page15-banner" data-aos ="zoom-in" data-aos-duration ="1000" data-aos-delay="300"> 
                        7S1P (LIFEPO4) | 10S1P (LI-NMC)
                    </div>

                    <img
                        src="./drones/REB_BATTERY.png"
                        alt="Battery"
                        data-aos ="zoom-in"
                        data-aos-duration ="1000"
                        data-aos-delay="300"
                        className='page15-right-side-img' />
                        
                </div>
            </div>
        </div>
    );
}