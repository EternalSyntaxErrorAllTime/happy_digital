import type { FC } from "react";

import "./PageAboutAgency.scss";

import { AboutAgencyBackground } from "../../component/AboutAgencyBackground";

import { ReactSVG } from "react-svg";

const PageAboutAgency: FC = () => {
    return (
        <div className="PageAboutAgency">

            <div className="InfoCompany">
                <div className="text">
                    <h2>Happy</h2>
                    <p>Агентство цифрового маркетинга, специализирующееся на быстром достижении высоких результатов.</p>
                </div>
                <ReactSVG src="./icons/buble-4.svg" />
            </div>

            <div className="MainInfo">
                <div className="Сorner-1">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                </div>

                <div className="text">
                    <ol>
                        <li>Инновации: мы всегда стремимся быть на шаг впереди, используя новейшие инструменты и подходы для достижения ваших целей.</li>
                        <li>Качество: для нас важно, чтобы каждый проект был выполнен на высшем уровне, поэтому мы тщательно контролируем все процессы.</li>
                        <li>Командная работа: взаимодействие внутри команды и с клиентами – основа нашего успеха. Мы ценим мнение каждого участника процесса.</li>
                        <li>Результат: наша главная цель – достижение конкретных результатов, которые помогут вашему бизнесу расти и развиваться.</li>
                    </ol>
                </div>

                <div className="Сorner-2">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                </div>
            </div>

            <AboutAgencyBackground />
        </div>
    );
}

export default PageAboutAgency;