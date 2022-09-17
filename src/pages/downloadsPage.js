import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";

const DownloadsPage = () => {
  return (
    <>
      <Header />
      <Slider />

      <div className="container">
        <div className="has-size-7 has-weight-black has-mb-4 has-mt-4 big-title">
          downloads.
        </div>

        <div className="title is-4 has-weight-black has-mb-1">
          Download links
        </div>
        <div className="card is-shadowed">
          <iframe
            className="news-sheet"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMpMnH-VYEXc2sduNRUsi0qBh9UWLDkZIskZrjdpKaPFoWATUoqusbFYyzMW7w0_Wr3zwOg9eRwoM5/pubhtml?widget=true&amp;headers=false"
          ></iframe>
        </div>
      </div>

      <Footer />
      <FooterLogo />
    </>
  );
};

export default DownloadsPage;
