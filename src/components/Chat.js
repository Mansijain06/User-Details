import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Chat = () => {
    const [showChat, setShowChat] = useState(false);

    const { users } = useContext(UserContext);

    const { id } = useParams();

    const handleShowChat = () => {
        setShowChat((prevValue) => !prevValue);
    };
    return (
        <>
            <div className="chat">
                <p className="chat-container" onClick={handleShowChat}>
                    <span> ✉️ Chats</span>
                    <span>{!showChat ? '˄' : '˅'}</span>
                </p>
                {showChat && (
                    <div className="chat-main">
                        {users.map((user) => {
                            return (
                                user.id != id && (
                                    <Link to={"/main/profile/" + user.id} key={user.id} >
                                        <span className="chat-list">
                                            <img src={user.profilepicture} className="user-img" />
                                            <li>{user.name}</li>
                                        </span>
                                    </Link>
                                )
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default Chat;
