import Project from "./Project";
import Capture from "./images/Capture.PNG"

const Portfolio = () => {
    return ( 
        <div className="Portfolio-section">
            <Project image={Capture} projectHeading={"Game of life"} projectDescription={"teaching which I am excellent at and I find pleasure in helping others understand. I don’t see myself as the best engineer but I am always willing and ready to learn."}/>
            <Project image={Capture} projectHeading={"Past question app"} projectDescription={"teaching which I am excellent at and I find pleasure in helping others understand. I don’t see myself as the best engineer but I am always willing and ready to learn."}/>
            <Project image={Capture} projectHeading={"portfilio"} projectDescription={"teaching which I am excellent at and I find pleasure in helping others understand. I don’t see myself as the best engineer but I am always willing and ready to learn."}/>

        </div>
     );
}
 
export default Portfolio;