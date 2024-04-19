import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default from "./Property1Default";
import "./AboutHighlightedFeatures.css";

const AboutHighlightedFeatures = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/page2");
  }, [navigate]);

  return (
    <div className="about-highlighted-features1">
      <img
        className="previous-icon"
        loading="lazy"
        alt=""
        src="/previous.svg"
      />
      <div className="main">
        <div className="content">
          <div className="iterator-x">
            <h1 className="your-audience-wants1">Your audience wants links</h1>
            <div className="make-it-easy1">
              Make it easy for them by linking products to every post and video
            </div>
          </div>
          <div className="wrapper-group-300">
            <img
              className="wrapper-group-300-child"
              loading="lazy"
              alt=""
              src="/group-300@2x.png"
            />
          </div>
        </div>
        <Property1Default
          getStarted="Try for free"
          property1DefaultBackgroundColor="#f8f9fb"
          property1DefaultWidth="unset"
          property1DefaultBorderRadius="18px"
          property1DefaultPadding="var(--padding-base) var(--padding-5xl)"
          property1DefaultPosition="unset"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          getStartedColor="#11151d"
          onButtonContainerClick={onButtonContainerClick}
        />
      </div>
      <img className="next-icon" loading="lazy" alt="" src="/next.svg" />
    </div>
  );
};

export default AboutHighlightedFeatures;
