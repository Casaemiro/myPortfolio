import Project from "./Project";
import Capture from "./images/Capture.PNG"
import Capture2 from "./images/Capture2.PNG"

const Portfolio = () => {
    return ( 
        <div className="Portfolio-section">
            <Project image={Capture} projectHeading={"Game of life"} projectDescription={"teaching which I am excellent at and I find pleasure in helping others understand. I don’t see myself as the best engineer but I am always willing and ready to learn."}/>
            <Project image={Capture} projectHeading={"Questions.Ask"} projectDescription={"This is a project I worked on which solves the problem of access to past questions with rgards to preperation for different types of exams in Cameroon"}/>
            <Project image={Capture2} projectHeading={"portfilio"} projectDescription={"This personal portfolio site is one of the projects I did earlier in 2022 durring my training at iknite space. It is simple, yet beautful and super attractive"}/>

        </div>
     );
}
 
export default Portfolio;