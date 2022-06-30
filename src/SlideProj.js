import Project from "./Project"
import Capture from "./images/Capture6.PNG"
import Capture2 from "./images/Capture2.PNG"
import Capture3 from "./images/Capture3.PNG"
import Capture4 from "./images/Capture4.PNG"
import Capture5 from "./images/Capture5.PNG"
import Capture7 from "./images/Capture7.PNG"


const SlideProj = () => {
    return (
        < >
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{
                width: "70%",
                height: "65vh",
                position: "relative",
                left: "0%",
                zIndex: "10",
                padding: "1em 1em 1em",
                margin: "0 auto",
                backgroundSize: "cover",
                transition: "left 0s .75s",
                marginTop: "1%",
                backgroundColor: "#000e390e"

            }}>
                <div className="carousel-inner">
                    <div className="carousel-item active " data-bs-interval="10000" style={{
                        // display:"inline",
                        // justifyContent: "center",
                        // backgroundColor: "green"
                    }}>
                    <div style={{
                        display:"flex",
                        justifyContent: "center",
                        // backgroundColor: "green"
                    }}> 
                        <Project image={Capture} projectHeading={"Image Search App"} projectDescription={"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."} morelink={"https://github.com/Casaemiro/game-of-life"} gitlink={"https://github.com/Casaemiro/game-of-life"} /><Project image={Capture4} projectHeading={"Fight Hunger"} projectDescription={"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."} morelink={"https://github.com/Casaemiro/game-of-life"} gitlink={"https://github.com/Casaemiro/game-of-life"} />
                    </div>

                    </div>
                    <div className="carousel-item " data-bs-interval="2000" style={{
                        // display:"inline",
                        // justifyContent: "center",
                        // backgroundColor: "red"
                    }}>
                    <div style={{
                        display:"flex",
                        justifyContent: "center",
                        // backgroundColor: "green"
                    }}><Project image={Capture3} projectHeading={"Questions.Ask"} style={{
                            width: "0px auto"
                        }} projectDescription={"This is a project I worked on which solves the problem of access to past questions with rgards to preperation for different types of exams in Cameroon"} morelink={"https://questionapp-e915e.web.app"} gitlink={"https://github.com/Casaemiro/questionapp"} /><Project image={Capture5} projectHeading={"WeatherInfo"} style={{
                            width: "0px auto"
                        }} projectDescription={"This is a project I worked on which solves the problem of access to past questions with rgards to preperation for different types of exams in Cameroon"} morelink={"https://questionapp-e915e.web.app"} gitlink={"https://github.com/Casaemiro/questionapp"} /></div>
                        
                    </div>
                    <div className="carousel-item " style={{
                        // display:"inline",
                        // justifyContent: "center",
                        // backgroundColor: "blue"
                    }}>
                        <div style={{
                        display:"flex",
                        justifyContent: "center",
                        // backgroundColor: "green"
                    }}> <Project image={Capture2} projectHeading={"portfilio"} projectDescription={"This personal portfolio site is one of the projects I did earlier in 2022 durring my training at iknite space. It is simple, yet beautful and super attractive"} morelink={"https://portfolio-5db3c.web.app"} gitlink={"https://github.com/Casaemiro/myPortfolio"} /><Project image={Capture7} projectHeading={"Survey Form"} projectDescription={"This personal portfolio site is one of the projects I did earlier in 2022 durring my training at iknite space. It is simple, yet beautful and super attractive"} morelink={"https://portfolio-5db3c.web.app"} gitlink={"https://github.com/Casaemiro/myPortfolio"} /></div>
                       
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default SlideProj;