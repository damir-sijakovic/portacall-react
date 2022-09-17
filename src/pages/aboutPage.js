import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";

const AboutPage = () => {
  return (
    <>
      <Header />
      <Slider />

      <div className="container">
        <div className="has-size-7 has-weight-black has-mb-4 has-mt-4 big-title">
          about.
        </div>

        <div className="title is-4 has-weight-black has-mb-1">About site</div>
        <div className="card is-shadowed">
          <h3>Serk Portacall</h3> <br />
          Email: <b>serk118@gmail.com</b> <br />
          Blog: <b>http://serk118.blogspot.com</b> <br />
          <hr />
          Website & gfx: <b>damir.sijakovic@gmail.com</b> <br />
        </div>
      </div>

      <Footer />
      <FooterLogo />
    </>
  );
};

export default AboutPage;
