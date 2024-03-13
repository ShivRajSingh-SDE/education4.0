import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import AdminAdd from "./Admin/AdminAdd";
import RoadMap from "./Admin/RoadMap";
import Notes from "./Admin/Notes";
import AdminHome from "./Admin/AdminHome";
import AddNotification from "./Admin/AddNotification";

function Admin() {
  const [userProfile, setUserProfile] = useState(null);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      axios
        .get(`http://localhost:8000/api/user/${userEmail}`)
        .then((response) => {
          setUserProfile(response.data);
          if (userEmail === "shivrajsingh.info.me@gmail.com") {
            setAdmin(true);
          } else {
            setAdmin(response.data.Admin);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  if (!admin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="course" element={<AdminAdd />} />
        <Route path="roadmap" element={<RoadMap />} />
        <Route path="test-notes" element={<Notes />} />
        <Route path="notification" element={<AddNotification />} />
      </Routes>
    </>
  );
}

export default Admin;
