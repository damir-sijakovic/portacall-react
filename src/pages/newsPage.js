import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";

const NewsPage = () => {
  return (
    <>
      <Header />
      <Slider />

      <div className="container">
        <div className="has-size-7 has-weight-black has-mb-4 has-mt-4 big-title">
          news.
        </div>

        <div className="title is-4 has-weight-black has-mb-1">What's new?</div>
        <div className="card is-shadowed">
          <iframe
            className="news-sheet"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRGjgk08ubOImq_xv7mG7um-XtZj6R_U6mJDgAvqjWx15WdojlB_LuJz2pX4ztIsrnGfRpoUXwQili3/pubhtml?widget=true&amp;headers=false"
          ></iframe>
        </div>
      </div>

      <Footer />
      <FooterLogo />
    </>
  );
};

export default NewsPage;
