import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";

const ContactPage = () => {
  return (
    <>
      <Header />
      <Slider />

      <div className="container">
        <div className="has-size-7 has-weight-black has-mb-4 has-mt-4 big-title">
          contact.
        </div>

        <div className="title is-4 has-weight-black has-mb-1">About me</div>
        <div className="card is-shadowed">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf2dXvem_4CjmGv83D5SAQcpaSofl7g_q01xZcv6Xl--VLtJQ/viewform?embedded=true"
            width="100%"
            height="642"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>

      <Footer />
      <FooterLogo />
    </>
  );
};

export default ContactPage;
