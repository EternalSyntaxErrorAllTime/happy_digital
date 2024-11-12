import type { FC } from "react";

import "./AboutAgencyBackground.scss";

const AboutAgencyBackground: FC = () => {
    return (
        <div className="AboutAgencyBackground">

            <div className="TopLine">
                <div className="Rectangle-1"></div>

                <div className="spacer"></div>

                <div className="ComboElement">
                    <div className="RoundedRectangle-1"></div>
                    <div className="RoundedRectangle-2"></div>
                    <div className="RoundedRectangle-3">
                        <div className="RoundedRectangle-4"></div>
                    </div>
                </div>

                <div className="spacer"></div>

                <div className="Rectangle-2"></div>

            </div>


            <div className="BottomLine">
                <div className="Сircle-1">
                    <div className="Сircle-2"></div>
                </div>

                <div className="spacer"></div>

                <div className="ItemRight">
                    <div className="Сircle-3"></div>
                    <div className="RoundedRectangle-5"></div>
                </div>

            </div>

        </div>
    );
}

export default AboutAgencyBackground;