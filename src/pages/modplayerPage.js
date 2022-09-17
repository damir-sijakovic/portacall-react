import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";

const Modplayer = () => {
  return (
    <>
      <Header />
      <Slider />

      <div className="container">
        <br />
        <div className="card is-shadowed">
          <img src="./assets/img/modplayer.png" />
          <div className="has-size-7 has-weight-black has-mb-4 project-title">
            ArModPlugPlayer.
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">
          What is ArModPlugPlayer ?
        </div>
        <div className="card is-shadowed">
          <div className="has-text-dark is-semitransparent">About</div>
          <div className="divider"></div>
          <div className="has-mb-2 is-flex has-items-start">
            <span>
              <b>A simple and neat player for aros/i386.</b>
              <br />
              Decoder= libmodplug v0.8.5 by Olivier Lapicque olivierl()jps.net.
              <br />
              Output = AHI.
              <br />
              GUI = Zune/mui.
              <br />
              <br />
              Zune/Volume class.
              <br />
              Zune/info display class.
              <br />
              Zune/Duration/TimeLine class.
              <br />
              <br />
              PDF created using Txt2Pdf.
              <br />
              Gfx/icons done using LunaPaint.
              <br />
              Archived via arZIP.
              <br />
              <br />
              All done natively on acer aspireone/icaros.
              <br />
            </span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">Features</div>
        <div className="card is-shadowed">
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              Plays 22 different mod formats, including: MOD, S3M, XM, IT, 669,
              AMF, AMS, DBM, DMF, DSM, FAR,MDL, MED, MTM, OKT, PTM, STM, ULT,
              UMX, MT2, PSM, MID.
            </span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              plays timidity's GUS patch files (*.pat): a multi sample pat file
              with n samples can be played with a Frere Jacques canon with n
              voices.
            </span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              {" "}
              plays all types of MIDI files (*.mid): uses the timidity .pat
              files for samples (when available) recognizes environment
              variables: MMPAT_PATH_TO_CFG set to the directory where the file
              "timidity.cfg" and the subdirectory "instruments" can be found,
              default: "timidity:". MMMID_SPEED for experimenting with the mod
              speed (1 thru 9) MMMID_VERBOSE for feedback on the conversion
              process MMMID_DEBUG for sake of completeness, only useful for
              maintainers
            </span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              plays textfiles written in the ABC music notation (*.abc): uses
              the timidity .pat files for samples (when available) recognizes
              environment variables: MMPAT_PATH_TO_CFG set to the directory
              where the file "timidity.cfg" and the subdirectory "instruments"
              can be found, default: "timidity:"
            </span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">CLI/Usage</div>
        <div className="card is-shadowed">
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>if you want to play via cli/shell than type.</span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              "ArmodPlugPlayer module_name.extension" (example ArmodPlugPlayer
              test.mod)
            </span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Than hit [ play ] .</span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">Bugs</div>
        <div className="card is-shadowed">
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Report at sertk118()gmail.com (Aros version only)</span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">Screenshot</div>
        <div className="has-mt-1 image-container">
          <img src="./assets/img/arModplayer.jpg" />
        </div>
      </div>

      <Footer />
      <FooterLogo />
    </>
  );
};

export default Modplayer;
