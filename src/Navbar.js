import "./index.css";
export const Navbar = () => {
    return ( 
        <div className="top-nav" id="topest">
            <h1>A.Silas Magho</h1>
            <div className="links">
                <a href="#about-me">about me</a>
                <a href="https://drive.google.com/file/d/10LFultyGOU8XO3I8oNF6AEJN_3fTz77Q/view"  download>download_resume</a>
                <a href="#portfolio">portfolio</a>
                <a href="/" data-bs-toggle="modal" data-bs-target="#exampleModal" >contact</a>
                <a href="https://github.com/Casaemiro">GitHub</a>
            </div>
        </div>
     );
}
 