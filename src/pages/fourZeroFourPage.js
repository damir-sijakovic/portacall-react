import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";

const FourZeroFourPage = () => {
  return (
    <>
      <Header />
      <Slider />

      <div className="container">
        <h1>404</h1>
        <p> Page not found!</p>
      </div>

      <Footer />
      <FooterLogo />
    </>
  );
};

export default FourZeroFourPage;
