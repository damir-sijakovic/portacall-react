import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";

const Murks = () => {
  return (
    <>
      <Header />
      <Slider />

      <div className="container">
        <br />
        <div className="card is-shadowed">
          <img src="./assets/img/murks.png" />
          <div className="has-size-7 has-weight-black has-mb-4 project-title">
            Murks!
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">
          What is Murks ?
        </div>
        <div className="card is-shadowed">
          <div className="has-text-dark is-semitransparent">About</div>
          <div className="divider"></div>
          <div className="has-mb-2 is-flex has-items-start">
            Murks IDE is a free Integrated Development Environment. At this
            Moment it is very limited, but it's goal is to become a real IDE
            like AmiDevCpp (Windows). Murks offers you a comfortable Environvent
            to create Applications for AROS, It comes completely with everything
            you need to start Development. Murks uses the AmiDevCpp
            Project-File-Format, so you can exchange your Projects between
            Windows and AROS. Murks is a multilingual Program. It's Interface is
            available in several languages. Thanks to AROS Locale System, Murks
            will appear in the language, you chose in AROS Locale Preferences.
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">History</div>
        <div className="card is-shadowed">
          <div className="has-text-dark is-semitransparent">Details</div>
          <div className="divider"></div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>2007-2008 Heinz-Raphael Reinke </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>2008 Krzysztof 'Deadwood' Smiechowicz</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              2022 serk118@gmail.com (serk118) / graphical changes / artwork
              damir sijakovic and Amigasystem(carlo)
            </span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">
          Murks version 2022
        </div>
        <div className="card is-shadowed">
          <div className="has-text-dark is-semitransparent">Details</div>
          <div className="divider"></div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Uses Twins-IDE TextEditor mui/zune className.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Syntax Highlighting for c/c++.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>New design and graphical changes (look & feel).</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>See manual how murks works.</span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">
          What is needed to run Murks?
        </div>
        <div className="card is-shadowed">
          <div className="has-text-dark is-semitransparent">
            You can add below lines to user-startup:
          </div>
          <div className="divider"></div>

          <div className="has-mb-2 is-flex has-items-start">
            <pre className="has-mb-2">
              Assign GCC: SYS:Development Assign USR: GCC: Assign LIB: GCC:lib
              path GCC:bin add
            </pre>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">
          What can you do with Murks?
        </div>
        <div className="card is-shadowed">
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>You can load AmiDevCpp Projects.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>You can create new Projects.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>You can edit this Projects.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>You can add new Files to a Project.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>You can add existing Files to a Project.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>You can remove Files from a Project.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              You can change the options for the Compiler and the Linker.
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>You can compile your Projects.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>You can run your Projects.</span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">Screenshots</div>
        <div className="has-mt-1 has-mb-4 image-container">
          <img src="./assets/img/murks1.png" />
        </div>

        <div className="has-mt-1 image-container">
          <img src="./assets/img/murks2.png" />
        </div>
      </div>

      <Footer />
      <FooterLogo />
    </>
  );
};

export default Murks;
