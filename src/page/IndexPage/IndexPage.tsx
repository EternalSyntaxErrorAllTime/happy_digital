import type { FC } from "react";

import "./IndexPage.scss";

import { ReactSVG } from "react-svg";

import { IndexBacground } from "../../component/IndexBacground";


const IndexPage: FC = () => {
  return (
    <div className="IndexPage">

      <header className="MainHeader">
        <h1 className="title">Happy</h1>
        <p className="typeCompany">Digital-agency</p>
      </header>

      <div className="Schedule">
        <ReactSVG src="./icons/buble-1.svg" className="icon-buble" />
        <div className="text">
          <p>Ваш надежный партнер</p>
          <p>в сфере</p>
          <p>интернет-продвижения</p>
        </div>
      </div>
      {/* ИЗМЕНИТЬ НА NAVLINK С СЫЛКОЙ НА СТРАНИЧКУ */}
      <div className="Order"> 
        <ReactSVG src="./icons/buble-2.svg" className="icon-buble"/>
        <div className="text">
          <p>Оформить</p>
          <p>заказ</p>
        </div>
      </div>

      <IndexBacground />

    </div>
  );
}


export default IndexPage;