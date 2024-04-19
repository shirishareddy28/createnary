import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default1 from "./Property1Default1";
import Property1Default from "./Property1Default";
import "./Queue.css";

const Queue = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/page2");
  }, [navigate]);

  return (
    <section className="queue">
      <div className="dictionary">
        <Property1Default1
          property1DefaultIconOverflow="unset"
          property1DefaultIconPosition="relative"
          property1DefaultIconTop="unset"
          property1DefaultIconLeft="unset"
        />
      </div>
      <div className="database">
        <div className="hero-content1">
          <div className="reducer">
            <div className="expander">
              <h1 className="welcome-to-indias-container1">
                <span>{`Welcome To India’s First `}</span>
                <span className="creators-marketplace1">
                  Creator’s Marketplace
                </span>
              </h1>
              <h3 className="create-your-first">
                Create your first E-Store @ Zero Cost
              </h3>
            </div>
            <div className="empower-your-creativity">
              Empower your creativity with Createnary. Showcase, sell, and
              connect with a global audience effortlessly, turn your products
              into profits.
            </div>
          </div>
          <Property1Default
            getStarted="Get Started"
            property1DefaultBackgroundColor="#4a508e"
            property1DefaultWidth="unset"
            property1DefaultBorderRadius="18px"
            property1DefaultPadding="var(--padding-base) var(--padding-5xl)"
            property1DefaultPosition="unset"
            property1DefaultTop="unset"
            property1DefaultLeft="unset"
            getStartedColor="#f8f9fb"
            onButtonContainerClick={onButtonContainerClick}
          />
        </div>
      </div>
      <div className="hero-image">
        <div className="wrapper-32767469-responsive-de1">
          <img
            className="responsive-device-33-copy-21"
            loading="lazy"
            alt=""
            src="/32767469-responsive-device-33-copy-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Queue;
