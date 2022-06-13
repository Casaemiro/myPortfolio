import social1 from "./instagram-square-brands.svg";
import social2 from "./facebook-square-brands.svg";
import social3 from "./twitter-square-brands.svg";
// import introimg from "./intro-img.JPG";
const Social = () => {
    return ( 
        <div className="social-section">
            <img src={social1} alt="" className="social-image" />
            <img src={social2} alt="" className="social-image" />
            <img src={social3} alt="" className="social-image" />
        </div>
     );
}
 
export default Social;