import FAQs from "./FAQs";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="page-1-inner">
      <div className="frame-parent4">
        <div className="frame-wrapper1">
          <div className="frame-parent5">
            <div className="frequently-asked-questions-container">
              <h2 className="frequently-asked-questions1">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>
            <div className="quick-answers-to-container">
              <p className="quick-answers-to1">
                Quick answers to questions you may have. Can’t find what you're
                looking for?
              </p>
              <p className="check-out-our">Check out our full documentation</p>
            </div>
          </div>
        </div>
        <div className="faq-items">
          <FAQs
            coibaseWallet="How much does it cost to set up a store?"
            icon="/icon.svg"
            fAQsBackgroundColor="#d6d6d6"
            fAQsWidth="unset"
            fAQsPosition="unset"
            fAQsTop="unset"
            fAQsLeft="unset"
            coibaseWalletFontWeight="600"
            coibaseWalletFontFamily="Urbanist"
            coibaseWalletColor="#11151d"
            coibaseWalletFontSize="16px"
          />
          <FAQs
            coibaseWallet="What kind of digital products can I sell?"
            icon="/icon.svg"
            fAQsBackgroundColor="#d6d6d6"
            fAQsWidth="unset"
            fAQsPosition="unset"
            fAQsTop="unset"
            fAQsLeft="unset"
            coibaseWalletFontWeight="600"
            coibaseWalletFontFamily="Urbanist"
            coibaseWalletColor="#11151d"
            coibaseWalletFontSize="16px"
          />
          <div className="div6">
            <div className="do-i-need-technical-skills-to-group">
              <div className="do-i-need1">
                Do I need technical skills to use the platform?
              </div>
              <img className="icon3" alt="" src="/icon1.svg" />
            </div>
            <div className="line1" />
            <div className="no-not-at1">
              No, not at all! Our platform is designed with user-friendliness in
              mind. You can easily navigate and set up your store without any
              technical expertise. It's as simple as a few clicks to get
              started!
            </div>
          </div>
          <FAQs
            coibaseWallet="Is there a limit to the number of products I can list?"
            icon="/icon.svg"
            fAQsBackgroundColor="#d6d6d6"
            fAQsWidth="unset"
            fAQsPosition="unset"
            fAQsTop="unset"
            fAQsLeft="unset"
            coibaseWalletFontWeight="600"
            coibaseWalletFontFamily="Urbanist"
            coibaseWalletColor="#11151d"
            coibaseWalletFontSize="16px"
          />
          <FAQs
            coibaseWallet="How do I receive payments for my sales?"
            icon="/icon.svg"
            fAQsBackgroundColor="#d6d6d6"
            fAQsWidth="unset"
            fAQsPosition="unset"
            fAQsTop="unset"
            fAQsLeft="unset"
            coibaseWalletFontWeight="600"
            coibaseWalletFontFamily="Urbanist"
            coibaseWalletColor="#11151d"
            coibaseWalletFontSize="16px"
          />
          <FAQs
            coibaseWallet="Can I sell internationally on this marketplace?"
            icon="/icon.svg"
            fAQsBackgroundColor="#d6d6d6"
            fAQsWidth="unset"
            fAQsPosition="unset"
            fAQsTop="unset"
            fAQsLeft="unset"
            coibaseWalletFontWeight="600"
            coibaseWalletFontFamily="Urbanist"
            coibaseWalletColor="#11151d"
            coibaseWalletFontSize="16px"
          />
          <FAQs
            coibaseWallet="What support and resources are available for sellers?"
            icon="/icon.svg"
            fAQsBackgroundColor="#d6d6d6"
            fAQsWidth="unset"
            fAQsPosition="unset"
            fAQsTop="unset"
            fAQsLeft="unset"
            coibaseWalletFontWeight="600"
            coibaseWalletFontFamily="Urbanist"
            coibaseWalletColor="#11151d"
            coibaseWalletFontSize="16px"
          />
          <FAQs
            coibaseWallet="Is there a review process for uploaded products?"
            icon="/icon.svg"
            fAQsBackgroundColor="#d6d6d6"
            fAQsWidth="unset"
            fAQsPosition="unset"
            fAQsTop="unset"
            fAQsLeft="unset"
            coibaseWalletFontWeight="600"
            coibaseWalletFontFamily="Urbanist"
            coibaseWalletColor="#11151d"
            coibaseWalletFontSize="16px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
