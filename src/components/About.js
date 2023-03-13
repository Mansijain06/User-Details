import { Link } from "react-router-dom";
import "../App.css";

const About = ({ user }) => {
    return <div className="about-container">
        <img src={user.profilepicture} alt="profile picture" className="user-img1" />
        <div className="about-name">
            <p>{user.name}</p>
            <p className="about-email">{user.email}</p>
        </div>
        <Link to="/"><span className="about-btn">Sign Out</span></Link>
    </div>
};

export default About;
