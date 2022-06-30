import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Footer from "./Footer";
import Introduction from "./Introduction";
import { Navbar } from "./Navbar"
// import Portfolio from "./Portfolio";
import SectionHeader from "./SectionHeader";
import SlideProj from "./SlideProj";
import Social from "./Social";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact />
      <Introduction />
      <SectionHeader secHead={"Portfolio"} secId={"portfolio"}/>
      <SlideProj />
      {/* <Portfolio /> */}
      <SectionHeader secHead={"About me"} secId={"about-me"} 
     />
      <Aboutme />
      <Social/>
      <Footer />
    </div>
  );
}

export default App;
