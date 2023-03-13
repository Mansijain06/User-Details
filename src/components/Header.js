const Header = ({ user }) => {
    return (
        <header className="profile-header">
            <p>Profile</p>
            <p className="profile-head-side">
                <img src={user?.profilepicture} alt="user" className="user-img" />
                <span>{user?.name}</span>
            </p>
        </header>
    );
};

export default Header;
