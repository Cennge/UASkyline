import { useEffect, useRef } from 'react';
import './page1.css';

export function Page1() {
    // Типизируем useRef для HTMLImageElement
    const droneRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if ('ontouchstart' in window) return;
        let animationFrameId: number;

        const handleMouseMove = (event: MouseEvent) => {
            cancelAnimationFrame(animationFrameId);

            animationFrameId = requestAnimationFrame(() => {
                const drone = droneRef.current;
                if (!drone) return;

                const { clientX, clientY } = event;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;

                const moveX = -(clientX / windowWidth - 0.5) * 100;
                const moveY = -(clientY / windowHeight - 0.5) * 100;

                const maxMove = 80;
                const boundedMoveX = Math.max(-maxMove, Math.min(maxMove, moveX));
                const boundedMoveY = Math.max(-maxMove, Math.min(maxMove, moveY));
                const rotateZ = -(clientX / windowWidth - 0.5) * 10;
                
                drone.style.setProperty('--rotate-z', `${rotateZ}deg`);
                drone.style.setProperty('--move-x', `${boundedMoveX}px`);
                drone.style.setProperty('--move-y', `${boundedMoveY}px`);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="page1-skyline-container">
            <img
                src="img/frame.png"
                alt="Frame Background"
                className="page1-skyline-background"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="true"
            />
            <div className="page1-skyline-content">
                <div className="page1-skyline-left">
                    <div className="page1-skyline-logo">
                        <img
                            src="logo/UASkyline_logo5.png"
                            alt="Skyline"
                            className="page1-background-image"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-once="true"
                        />
                    </div>
                    <div className="page1-skyline-description" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
                        <p>
                            Ми — український виробник дронів, що спеціалізується на створенні кастомних рішень під реальні задачі.
                            У нашій основі — власне виробництво, бойовий досвід і гнучкий підхід: кожен безпілотник проєктується
                            відповідно до вимог підрозділу чи проєкту. Надійність, адаптивність і швидке впровадження — це те, що відрізняє нас від інших.
                        </p>
                        <br />
                        <p>
                            Наша команда — це ветерани війни, інженери, пілоти, випробувачі та аналітики, які об'єднали практику,
                            технічну експертизу та розуміння реального бою. Ми не працюємо “на стіл” — ми створюємо рішення,
                            які одразу йдуть у поле бою та дають результат. Команда дихає одним ритмом із підрозділами,
                            розуміє фронтові потреби й знає, як реалізувати задачу у готовий продукт.
                        </p>
                        <p className="page1-highlight" data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="true">
                            Свій для своїх. Робимо те, що справді працює.
                        </p>
                    </div>
                </div>

                <div className="page1-skyline-right">
                    <img
                        src="img/verified.png"
                        alt="verified"
                        className="page1-verified"
                        data-aos="zoom-out"
                        data-aos-duration="1500"
                        data-aos-once="true"
                    />
                    <img
                        ref={droneRef}
                        src="img/drone-main.png"
                        alt="drone"
                        className="page1-drone-image"
                    />
                    <img
                        src="img/soldier-1.png"
                        alt="Military Soldier"
                        className="page1-soldier-image"
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        data-aos-once="true"
                    />
                </div>
            </div>
        </div>
    );
}