import { useState } from "react";
import About from "./About";

const Header = ({ user }) => {
    const [showAbout, setShowAbout] = useState(false);

    const showAboutHandler = () => {
        setShowAbout(prevState => !prevState);
    }
    console.log(showAbout);


    return (
        <>
            <header className="profile-header" onClick={showAboutHandler}>
                <p>Profile</p>
                <p className="profile-head-side">
                    <img src={user?.profilepicture} alt="user" className="user-img" />
                    <span>{user?.name}</span>
                </p>
            </header>
            {showAbout && <About user={user} />}
        </>
    );
};

export default Header;
