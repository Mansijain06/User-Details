import SideBar from "./SideBar";
import Header from "./Header";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { Outlet, useParams } from "react-router-dom";

const Main = () => {
    const param = useParams();
    const { users } = useContext(UserContext);
    const user = users[param.id - 1];

    return (
        <div className="profile-container">
            <SideBar />
            <div className="profile-main">
                <Header user={user} />
                <Outlet />
            </div>
        </div>
    )
}

export default Main;