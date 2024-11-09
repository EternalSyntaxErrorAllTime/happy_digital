import type { FC } from "react";

import "./IndexBacground.scss";

const IndexBacground: FC = () => {
  return (
    <div className="IndexBacground">
      <div className="TopLine">
        <div className="Rectangle-1"></div>
        <div className="spacer"></div>
        <div className="Rectangle-2"></div>
        <div className="spacer"></div>
        <div className="RoundedRectangle-3"></div>
        <div className="spacer"></div>
        <div className="Rectangle-4"></div>
        <div className="spacer"></div>
        <div className="RoundedRectangle-5"></div>
      </div>

      <div className="BottomLine">
        <div className="Сircle-1">
          <div className="Сircle-2"></div>
        </div>

        <div className="spacer"></div>

        <div className="RightElemtn">
          <div className="Сircle-3"></div>
          <div className="Rectangle-1"></div>
          <div className="Rectangle-2"></div>
        </div>
      </div>

    </div>
  );
}

export default IndexBacground;