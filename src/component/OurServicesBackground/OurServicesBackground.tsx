import type { FC } from "react";

import "./OurServicesBackground.scss";


const OurServicesBackground: FC = () => {
  return (
    <div className="OurServicesBackground">


      <div className="TopLine">
        <div className="LeftTop">
          <div className="Сircle-1"></div>
          <div className="Сircle-2"></div>
          <div className="Сircle-3"></div>
        </div>

        <div className="spacer"></div>

        <div className="Rectangle-1"></div>

        <div className="spacer"></div>

        <div className="RoundedRectangle-1"></div>

        <div className="spacer"></div>

        <div className="RoundedRectangle-2"></div>

      </div>


      <div className="BottomLine">

        <div className="RoundedRectangle-3">
          <div className="RoundedRectangle-4"></div>
        </div>

        <div className="spacer"></div>

        <div className="CenterBottom">
          <div className="RoundedRectangle-5"></div>
          <div className="RoundedRectangle-6"></div>
          <div className="RoundedRectangle-7">
            <div className="RoundedRectangle-8"></div>
          </div>
        </div>

        <div className="spacer"></div>

        <div className="Сircle-4"></div>

      </div>

    </div>
  );
}


export default OurServicesBackground;