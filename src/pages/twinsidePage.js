import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";

const Twinside = () => {
  return (
    <>
      <Header />
      <Slider />

      <div className="container">
        <br />
        <div className="card is-shadowed">
          <img src="./assets/img/twins.png" />
          <div className="has-size-7 has-weight-black has-mb-4 project-title">
            twinsIDE.
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">
          What is TwinsIDE ?
        </div>
        <div className="card is-shadowed">
          <div className="has-text-dark is-semitransparent">Features</div>
          <div className="divider"></div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              A native AROS software, writing and compiled using just AROS.
            </span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Twins_TextEditor2022.</span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Syntax Highlighting for c/c++.</span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>integrated to use gcc/g++.</span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">Future plans</div>
        <div className="card is-shadowed">
          <div className="has-text-dark is-semitransparent">Details</div>
          <div className="divider"></div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              Plugin support for other languages (currently just c/c++).{" "}
            </span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Work on UI.</span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">Screenshot</div>
        <div className="has-mt-1 image-container">
          <img src="./assets/img/twins_pic.png" />
        </div>
      </div>

      <Footer />
      <FooterLogo />
    </>
  );
};

export default Twinside;
