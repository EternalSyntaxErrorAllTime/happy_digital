import type { FC } from "react";

import { ReactSVG } from "react-svg";

import { OurServicesBackground } from "../../component/OurServicesBackground";

import "./OurServicesPage.scss";

import { v4 } from "uuid";


/**
 * Функция создает элементы для информации в центре экрана
 */
function gerenateLiElement(bubleSVG: string, text: string): JSX.Element {
  return (
    <li className="ElementLi" key={v4()}>
      <div>
        <ReactSVG src={bubleSVG} className="buble" />
      </div>
      <p>{text}</p>
    </li>
  );
}

const ValueForInfo = [
  { img: "./icons/buble-li-1.svg", text: "Разработка сайтов: от простых лендингов до сложных корпоративных порталов." },
  { img: "./icons/buble-li-2.svg", text: "SEO-продвижение: вывод вашего сайта на первые позиции поисковых систем." },
  { img: "./icons/buble-li-3.svg", text: "SMM: создание и ведение страниц в социальных сетях, привлечение целевой аудитории." },
  { img: "./icons/buble-li-4.svg", text: "Контекстная реклама: настройка рекламных кампаний в Google Ads и Яндекс.Директ." },
  { img: "./icons/buble-li-5.svg", text: "Разработка уникального фирменного стиля и графического контента." },
];



const OurServicesPage: FC = () => {
  return (
    <div className="OurServicesPage">

      <header className="title">
        <ReactSVG src="./icons/buble-5.svg" />
        <p>Мы предлагаем<br/>широкий спектр услуг</p>
      </header>

      <ol className="Info">
        {ValueForInfo.map((currElement) => gerenateLiElement(currElement.img, currElement.text))}
      </ol>

      <OurServicesBackground />
    </div>
  );
}

export default OurServicesPage;