import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";

const Unzip = () => {
  return (
    <>
      <Header />
      <Slider />

      <div className="container">
        <br />
        <div className="card is-shadowed">
          <img src="./assets/img/zip.png" />
          <div className="has-size-7 has-weight-black has-mb-4 project-title">
            ArZip.
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">
          What is ArZip ?
        </div>
        <div className="card is-shadowed">
          <div className="has-text-dark is-semitransparent">Features</div>
          <div className="divider"></div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Unpacks zip archives.</span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">Screenshot</div>
        <div className="has-mt-1 image-container">
          <img src="./assets/img/arzip_final.png" />
        </div>
      </div>

      <Footer />
      <FooterLogo />
    </>
  );
};

export default Unzip;
