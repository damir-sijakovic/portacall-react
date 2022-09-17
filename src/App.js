import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./comps/loading/loading";
import Header from "./comps/header/header";
import Test from "./comps/test/test";

const FourZeroFourPage = lazy(() => import("./pages/fourZeroFourPage"));
const HomePage = lazy(() => import("./pages/homePage"));
const AboutPage = lazy(() => import("./pages/aboutPage"));
const NewsPage = lazy(() => import("./pages/newsPage"));
const ContactPage = lazy(() => import("./pages/contactPage"));
const DownloadsPage = lazy(() => import("./pages/downloadsPage"));
const TwinsidePage = lazy(() => import("./pages/twinsidePage"));
const MurksPage = lazy(() => import("./pages/murksPage"));
const ModplayerPage = lazy(() => import("./pages/modplayerPage"));
const UnzipPage = lazy(() => import("./pages/unzipPage"));
const DiskdoctorPage = lazy(() => import("./pages/diskdoctorPage"));
const HarmonyPage = lazy(() => import("./pages/harmonyPage"));
const FramebuildPage = lazy(() => import("./pages/framebuildPage"));






const App = () => {
	

	
  return (
    <>
     
       <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="*" element={<FourZeroFourPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/twinside" element={<TwinsidePage />} />
            <Route path="/murks" element={<MurksPage />} />
            <Route path="/modplayer" element={<ModplayerPage />} />
            <Route path="/unzip" element={<UnzipPage />} />
            <Route path="/diskdoctor" element={<DiskdoctorPage />} />
            <Route path="/harmony" element={<HarmonyPage />} />
            <Route path="/framebuild" element={<FramebuildPage />} />
          </Routes>
        </Suspense>
      </Router>
     
      
    </>
  );
};

export default App;
