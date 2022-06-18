import Project from "./Project";
import Capture from "./images/Capture.PNG"
import Capture2 from "./images/Capture2.PNG"
import Capture3 from "./images/Capture3.PNG"


const Portfolio = () => {
    return ( 
        <div className="Portfolio-section">
            <Project image={Capture} projectHeading={"Game of life"} projectDescription={"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."} morelink={"https://github.com/Casaemiro/game-of-life"} gitlink={"https://github.com/Casaemiro/game-of-life"}/>
            <Project image={Capture3} projectHeading={"Questions.Ask"} projectDescription={"This is a project I worked on which solves the problem of access to past questions with rgards to preperation for different types of exams in Cameroon"} morelink={"https://questionapp-e915e.web.app"} gitlink={"https://github.com/Casaemiro/questionapp"}/>
            <Project image={Capture2} projectHeading={"portfilio"} projectDescription={"This personal portfolio site is one of the projects I did earlier in 2022 durring my training at iknite space. It is simple, yet beautful and super attractive"} morelink={"https://portfolio-5db3c.web.app"} gitlink={"https://github.com/Casaemiro/myPortfolio"}/>

        </div>
     );
}
 
export default Portfolio;

