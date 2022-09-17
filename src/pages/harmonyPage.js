import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";

const HarmonyPage = () => {
  return (
    <>
      <Header />
      <Slider />

      <div className="container">
        <br />
        <div className="card is-shadowed">
          <img src="./assets/img/harmony.png" />
          <div className="has-size-7 has-weight-black has-mb-4 project-title">
            HarmonyPlayer.
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">
          What is HarmonyPlayer ?
        </div>
        <div className="card is-shadowed">
          <div className="has-text-dark is-semitransparent">Features</div>
          <div className="divider"></div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              This is a native music player for arOS which supports: .669 .AMF
              .APUN .FAR .GDM .IT .IMF .MOD .MED .MTM .OKT .S3M .STM .STX .ULT
              .UNI .XM (refuses to play some of the badly writen .xm fotmat
              files (needs rework)) .Ogg .Flac .Wav .Mid .Mp3(all started as
              mp3Player)
            </span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">More...</div>
        <div className="card is-shadowed">
          <div className="has-text-dark is-semitransparent">Details</div>
          <div className="divider"></div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              Skinable (default mp3Player blue kicks in when swicthed off )
            </span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              AutoUpdate(should download new file in .lha format in same folder
              where HarmonyPlayer is installed)
            </span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              restructured entire code from mp3Player to HarmonyPlayer.
            </span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>rework on volume class</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              disabled LIGHT_ON_DARK disabled untill i am happy with the
              interface...
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>rework on graphics/skin/button...</span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">Screenshot</div>
        <div className="has-mt-1 image-container">
          <img src="./assets/img/harmony_player.png" />
        </div>
        <br />
        <div className="has-mt-1 image-container">
          <img src="./assets/img/harmony2.png" />
        </div>
      </div>

      <Footer />
      <FooterLogo />
    </>
  );
};

export default HarmonyPage;
