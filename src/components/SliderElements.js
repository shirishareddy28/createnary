import { useMemo } from "react";
import "./SliderElements.css";

const SliderElements = ({ howManyFollowersDoYouHave, propWidth }) => {
  const howManyFollowersStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="slider-elements">
      <div className="how-many-followers1" style={howManyFollowersStyle}>
        {howManyFollowersDoYouHave}
      </div>
      <div className="slider12">
        <div className="slider-states">
          <div className="unactive2" />
          <div className="active-parent">
            <div className="active2" />
            <div className="frame-child6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderElements;
