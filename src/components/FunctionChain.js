import SliderElements from "./SliderElements";
import Property1Default from "./Property1Default";
import "./FunctionChain.css";

const FunctionChain = () => {
  return (
    <section className="function-chain">
      <div className="input-bundle">
        <div className="output-cluster">
          <h2 className="estimate-earning-potential1">
            ESTIMATE EARNING POTENTIAL
          </h2>
        </div>
        <div className="estimated-calculator">
          <div className="main1">
            <div className="sliders">
              <div className="constant-holder">
                <div className="what-kind-of1">
                  What kind of influencer are you?
                </div>
                <div className="dropdown1">
                  <div className="property1">
                    <div className="pages-wrapper">
                      <div className="pages1">Select influencer type?</div>
                    </div>
                    <img className="chevron-icon1" alt="" src="/chevron.svg" />
                  </div>
                </div>
              </div>
              <SliderElements howManyFollowersDoYouHave="How many followers do you have?" />
              <div className="iteration-loop">
                <div className="amount2">
                  <div className="k1">500K</div>
                </div>
              </div>
              <SliderElements
                howManyFollowersDoYouHave="How many products do you list monthly?"
                propWidth="unset"
              />
              <div className="iteration-loop1">
                <div className="amount3">
                  <div className="div5">25</div>
                </div>
              </div>
            </div>
            <div className="values-wrapper">
              <div className="values">
                <div className="values-inner">
                  <div className="monthly-earning-parent">
                    <h3 className="monthly-earning1">Monthly Earning</h3>
                    <div className="wrapper">
                      <b className="b8">₹12,000</b>
                    </div>
                  </div>
                </div>
                <div className="yearly-earnings">
                  <div className="yearly-earning-wrapper">
                    <h3 className="yearly-earning1">Yearly Earning</h3>
                  </div>
                  <b className="b9">₹1,44,000</b>
                </div>
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <Property1Default
              getStarted="Calculate"
              property1DefaultBackgroundColor="#4a508e"
              property1DefaultWidth="unset"
              property1DefaultBorderRadius="18px"
              property1DefaultPadding="var(--padding-base) var(--padding-5xl)"
              property1DefaultPosition="unset"
              property1DefaultTop="unset"
              property1DefaultLeft="unset"
              getStartedColor="#f8f9fb"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionChain;
