import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";
import MainWelcome from "./../comps/mainWelcome/mainWelcome";
import MainProjects from "./../comps/mainProjects/mainProjects";

const HomePage = () => {

  return (
    <>      
		<Header />
		<Slider />
		<MainWelcome />
		<MainProjects />
		<Footer />
		<FooterLogo />
    </>
  );
}

export default HomePage;
