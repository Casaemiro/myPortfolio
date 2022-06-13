import Footer from "./Footer";
import Introduction from "./Introduction";
import { Navbar } from "./Navbar"
import Social from "./Social";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Social/>
      <Footer />
    </div>
  );
}

export default App;
