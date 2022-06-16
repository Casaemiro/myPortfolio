import Aboutme from "./Aboutme";
import Footer from "./Footer";
import Introduction from "./Introduction";
import { Navbar } from "./Navbar"
import Portfolio from "./Portfolio";
import SectionHeader from "./SectionHeader";
import Social from "./Social";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <SectionHeader secHead={"Portfolio"} secId={"portfolio"}/>
      <Portfolio />
      <SectionHeader secHead={"About me"} secId={"about-me"}/>
      <Aboutme />
      <Social/>
      <Footer />
    </div>
  );
}

export default App;
