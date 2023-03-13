
import "./Profile.css"
import UserContext from '../utils/UserContext';
import { useContext, useEffect } from "react";
import MapImag from "../assets/img/map.png";
import { useParams } from "react-router-dom";

const Profile = () => {
    const param = useParams();

    const { users, setProfileId } = useContext(UserContext);

    const user = users[param.id - 1];
    const userCompany = user?.company;
    const userAddress = user?.address;
    console.log(userAddress);

    useEffect(() => {
        setProfileId(param.id)
    }, [])


    return (
        <div className="profile-details">
            <div className="profile-details-abt">
                <div className="profile-detail-sec">
                    <img src={user?.profilepicture} alt="user" className="profile-detail-img" />
                    <h4>{user?.name}</h4>
                </div>
                <div className="profile-details-sec1">
                    <div>
                        <label>Username : </label>
                        <span>{user?.username}</span>
                    </div>
                    <div>
                        <label>e-mail : </label>
                        <span>{user?.email}</span>
                    </div>
                    <div>
                        <label>Phone : </label>
                        <span>{user?.phone}</span>
                    </div>
                    <div>
                        <label>Website : </label>
                        <span>{user?.website}</span>
                    </div>
                </div>
                <div className="profile-details-sec2">
                    <h5>Company</h5>
                    <div>
                        <label>Name : </label>
                        <span>{userCompany?.name}</span>
                    </div>
                    <div>
                        <label>catchphrase : </label>
                        <span>{userCompany?.catchPhrase}</span>
                    </div>
                    <div>
                        <label>bs : </label>
                        <span>{userCompany?.bs}</span>
                    </div>
                </div>
            </div>
            <div className="profile-address">
                <p>Address:</p>
                <div>
                    <div>
                        <label>Street : </label>
                        <span>{userAddress?.street}</span>
                    </div>
                    <div>
                        <label>Suite : </label>
                        <span>{userAddress?.suite}</span>
                    </div>
                    <div>
                        <label>City : </label>
                        <span>{userAddress?.city}</span>
                    </div>
                    <div>
                        <label>Zipcode : </label>
                        <span>{userAddress?.zipcode}</span>
                    </div>
                </div>
                <div className="profile-location">
                    <img src={MapImag} alt="Map" className="profile-map" />
                    <div className="profle-loc">
                        <div>
                            <label>Lat: </label>
                            <span>{userAddress?.geo?.lat}</span>
                        </div>
                        <div>
                            <label>Long: </label>
                            <span>{userAddress?.geo?.lng}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;