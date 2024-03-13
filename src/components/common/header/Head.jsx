import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Head = () => {
  const [click, setClick] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  console.log(userProfile);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      axios
        .get(`http://localhost:8000/api/user/${userEmail}`)
        .then((response) => {
          setUserProfile(response.data);
          console.log(response.data);
        })

        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const handleResetClick = () => {
    localStorage.removeItem("userEmail");
    window.location.reload();
  };

  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <Link
              className="
             text-[40px] font-bold text-[white]"
              to="/"
            >
              SMART EDU
            </Link>
            <span></span>
          </div>

          <div className="social flex flex-row  justify-around items-center">
            <a href="https://www.facebook.com" target="_blank">
              <i className="fab fa-facebook-f icon"></i>
            </a>

            <a href="https://www.instagram.com" target="_blank">
              <i className="fab fa-instagram icon"></i>
            </a>

            <a href="https://www.twitter.com" target="_blank">
              <i className="fab fa-twitter icon"></i>
            </a>

            <a href="https://www.youtube.com" target="_blank">
              <i className="fab fa-youtube icon"></i>
            </a>

            <a
              target="_blank"
              className=" hover:bg-white bg-[#1eb2a6] text-[white] hover:text-[#1eb2a6]  p-3 rounded-2xl ml-2 hover:scale-105 ease-in-out  duration-300"
              href="https://discord.gg/RA6QTdkM"
            >
              Query Room
            </a>
            <Link
              to="/notification"
              target="_blank"
              className=" hover:bg-white bg-[#1eb2a6] text-[white] hover:text-[#1eb2a6]  p-3 rounded-2xl ml-2 hover:scale-105 ease-in-out  duration-300"
            >
              Notification
            </Link>

            {userProfile ? (
              <li
                onClick={handleResetClick}
                className="p-3 ml-2 rounded-2xl hover:bg-[#1eb2a6] hover:text-[white] bg-[#ffffff2f] border-2 m-1"
              >
                <Link className="subli" id="loginbtn" to="/signup">
                  Logout
                </Link>
              </li>
            ) : (
              <li className="p-3 ml-2 rounded-2xl hover:bg-[#1eb2a6] hover:text-[white] bg-[#ffffff2f] border-2 m-1">
                <Link className="subli" id="loginbtn" to="/signup">
                  Login
                </Link>
              </li>
            )}

            {userProfile && userProfile.Admin ? (
              <li className="p-3 ml-2 rounded-2xl hover:bg-[#1eb2a6] hover:text-[white] bg-[#ffffff2f] border-2 m-1">
                <Link className="subli" id="loginbtn" to="/admin">
                  Admin
                </Link>
              </li>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
