import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";

const FramebuildPage = () => {
  return (
    <>
      <Header />
      <Slider />

      <div className="container">
        <br />
        <div className="card is-shadowed">
          <img src="./assets/img/framebuild.png" />
          <div className="has-size-7 has-weight-black has-mb-4 project-title">
            FrameBuild.
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">
          What is FrameBuild ?
        </div>
        <div className="card is-shadowed">
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              I have to admit that after playing about with the great LunaPaint
              & I <br />
              found out that you can make animation and save them as frames as
              just <br />
              finished my AviBuild app and learned alot about how avi formats
              work <br />
              the the structure of avi and I just had to pick a image format to
              work <br />
              with and same time keep the quality within the image and than I
              done <br />
              some search and found out .jpg format is better for the job.{" "}
              <br />
            </span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              Avi structure was already done in avibuild app than its all about
              me doing the rest.
            </span>
          </div>
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              FrameBuild builds .jpg image files to .avi than use AviBuild to
              put more avi files and make big nice video.
            </span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">Screenshot</div>
        <div className="has-mt-1 image-container">
          <img src="./assets/img/FrameBuild.jpg" />
        </div>
        <br />
        <div className="has-mt-1 image-container">
          <img src="./assets/img/FrameBuild2.jpg" />
        </div>
      </div>

      <Footer />
      <FooterLogo />
    </>
  );
};

export default FramebuildPage;
