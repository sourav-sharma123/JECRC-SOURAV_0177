import React from "react";
// import { useAuth } from "../context/Authcontext";
// import { useNavigate} from 
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

function UserProfile() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/login");
    }
    return (
        <div>
            <h2>User Profile</h2>
            {/* <p>UserName: {user.username}</p>
            <button onClick={handleLogout}>Logout</button> */}
            {user ? (
                <>
                    <p>UserName: {user.username}</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <p>No user logged in</p>
            )}
        </div>
    );
}
export default UserProfile;