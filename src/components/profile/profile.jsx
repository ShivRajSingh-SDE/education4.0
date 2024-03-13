import React, { useState, useEffect } from "react";
import axios from "axios";
import Back from "../common/back/Back";
import "./profile.css";
import Awrapper from "../about/Awrapper";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const userEmail = localStorage.getItem("userEmail");

  const handleResetClick = () => {
    localStorage.removeItem("userEmail");
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUserProfile(response.data.find((user) => user.email === userEmail));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userEmail]);

  return (
    <>
      <Back title="Profile" />
      <section className="team padding"></section>

      {userProfile && userProfile.pic ? (
        <div className="profile-card">
          <img id="userprofileimg" src={userProfile.pic} alt="User Profile" />
          <h2>{userProfile.name}</h2>
          <p>Email: {userProfile.email}</p>
          <p>Department: {userProfile.department}</p>
          {userProfile.department === "csa" ? (
            <div className="department-specific-content ">
              {userProfile.department === "csa" && (
                <p>
                  Help Desk: <a href="tel:8920557494">8920557494</a>
                </p>
              )}
            </div>
          ) : (
            <div className="department-specific-content ">
              {userProfile.department === "cse" && <p>Help Desk: 9999 csa</p>}
            </div>
          )}
          <div>
            <button onClick={handleResetClick}>Logout</button>
          </div>
        </div>
      ) : null}

      {!userProfile && (
        <div className="login-button">
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      )}

      <Awrapper />
    </>
  );
};

export default Profile;
