
const Project = ({image,projectHeading,projectDescription,gitlink,morelink}) => {
    return ( 
        <div className="project-section" >
        <h2>{projectHeading}</h2>
            <img alt="" className="project-image" src={image}/>
            <p>{projectDescription}</p>
            <div className="extr">
                <a href={morelink}><button className="moreBtn">...more</button></a>
                <a href={gitlink}><button className="codeBtn">code</button></a>
            </div>
        </div>
     );
}
 
export default Project;