
const Project = ({image,projectHeading,projectDescription}) => {
    return ( 
        <div className="project-section">
        <h2>{projectHeading}</h2>
            <img alt="" className="project-image" src={image}/>
            <p>{projectDescription}</p>
            <div className="extr">
                <button className="moreBtn">...more</button>
                <button className="codeBtn">code</button>
            </div>
        </div>
     );
}
 
export default Project;