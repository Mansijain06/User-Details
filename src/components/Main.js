import SideBar from "./SideBar";
import Header from "./Header";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { Outlet, useParams } from "react-router-dom";
import Chat from "./Chat";

const Main = () => {
    const param = useParams();
    const { users } = useContext(UserContext);
    const user = users[param.id - 1];

    const [showChat, setShowChat] = useState(true);

    const showChatHandler = () => {
        setShowChat(prevState => !prevState);
    }
    console.log(showChat);

    return (
        <>
            <div className="profile-container">
                <SideBar />
                <div className="profile-main">
                    <Header user={user} />
                    <Outlet />
                </div>
            </div>
            {showChat && <Chat />}
        </>
    )
}

export default Main;