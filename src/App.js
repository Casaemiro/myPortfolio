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
      <SectionHeader secHead={"Portfolio"}/>
      <Portfolio />
      <SectionHeader secHead={"About me"}/>
      <Social/>
      <Footer />
    </div>
  );
}

export default App;
