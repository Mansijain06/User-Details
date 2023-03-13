
import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext from "../utils/UserContext";
import "./Profile.css"

const SideBar = () => {
    const { profileId } = useContext(UserContext);
    return (
        <aside className="profile-sidebar">
            <Link to={"/main/profile/" + profileId}>
                Profile
            </Link>
            <Link to="/main/post">
                Post
            </Link>
            <Link to="/main/gallery">
                Gallery
            </Link>
            <Link to="/main/todo">
                ToDo
            </Link>
        </aside>
    )
}

export default SideBar;