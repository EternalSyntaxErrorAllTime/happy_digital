import type { FC } from "react";
import { RootState } from "./store/store";

import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { IndexPage } from "./page/IndexPage";
import { AboutAgencyPage } from "./page/AboutAgencyPage";


import { SwitchTopic } from "./component/SwitchTopic";

import { useSelector } from "react-redux";


const App: FC = () => {
  const topic = useSelector((state: RootState) => state.switchTopic.value)

  return (
    <div className={topic === "dark" ? "BlackStyle" : "WhiteStyle"}>
      <div className="App">
        <SwitchTopic />
        <div className="SocialNetwork">
          <Link to=""><ReactSVG src="./icons/YouTube.svg" /></Link>
          <Link to=""><ReactSVG src="./icons/VK.svg" /></Link>
          <Link to=""><ReactSVG src="./icons/Telegram.svg" /></Link>
        </div>

        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about_agency" element={<AboutAgencyPage/>} />
        </Routes>

        <nav className="WebsiteNavigation">
          <ul className="text">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Основное</NavLink>
            </li>
            <li><NavLink to="/about_agency">Об агентстве</NavLink></li>
            <li><NavLink to="/zxc">Наши услуги</NavLink></li>
            <li><NavLink to="/z">Отзывы</NavLink></li>
          </ul>
          <ReactSVG src="./icons/buble-3.svg" />
        </nav>

        <button className="NextButton">
          <p>Next</p>
        </button>

      </div>
    </div>

  );
}


export default App;