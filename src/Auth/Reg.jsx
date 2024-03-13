import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../img/c1.png";
import axios from "axios";
import Back from "../components/common/back/Back";
import "./Reg.css";
import pic from "./logo.png";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Reg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [useDemoPic, setUseDemoPic] = useState(false);

  const defaultPic =
    "https://image.lexica.art/full_webp/fc4d6aac-7a70-4e63-ada1-eb84f69e2ae6";

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/Signup", {
        email,
        password,
        name,
        pic: pic || defaultPic,
        department,
      });

      if (response.data === "exist") {
        alert("User Already exists");
      } else if (response.data === "not exist") {
        localStorage.setItem("userEmail", email);
        window.location.href = "/";
      }
    } catch (error) {
      alert("Wrong Details");
      console.error(error);
    }
  }

  // ---------google ---------------------

  return (
    <div className="p-10">
      <Back title="Signup" />
      <div
        className="login-container bg-[#86e5dee4]
       justify-center items-center
       flex flex-col p-5"
      >
        <p className="login-title my-10 text-[30px]">SignUp</p>
        <form onSubmit={submit} className=" w-[100%]">
          <div
            className="reg-form-group flex flex-col p-4
        "
          >
            <label htmlFor="RegEmailAddress">Email Address</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              id="RegEmailAddress"
              type="email"
              className="p-2"
            />
          </div>

          <div
            className="reg-form-group flex flex-col p-4
        "
          >
            <label htmlFor="regPassword">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              id="regPassword"
              type="password"
              className="p-2"
            />
          </div>

          <div
            className="reg-form-group flex flex-col p-4
        "
          >
            <label htmlFor="regName">Name</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              id="regName"
              className="p-2"
              type="text"
            />
          </div>

          <div className="reg-form-group flex flex-col p-4">
            <label htmlFor="regDepartment">Department</label>
            <select
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
              id="regDepartment"
              className="p-2"
              defaultValue="" // Set the default selected option
            >
              <option value="" disabled>
                Select Department
              </option>
              <option value="csa">CSA</option>
              <option value="cse">CSE</option>
            </select>
          </div>

          <div
            className="reg-form-group flex flex-col p-4
        "
          >
            <label htmlFor="regPic">Pic URL</label>
            <input
              onChange={(e) => {
                setPic(e.target.value);
              }}
              placeholder="Profile Pic Url "
              id="regPic"
              type="text"
              className="p-2"
            />
            <div className="  justify-center items-center flex ">
              <p>Or</p>
            </div>
            <p className="demo-pic-text  justify-center items-center flex">
              Use default demo picture:
              <input
                type="checkbox"
                className="demo-pic-checkbox ml-2 "
                checked={useDemoPic}
                onChange={() => setUseDemoPic(!useDemoPic)}
              />
            </p>
          </div>

          <div
            className="reg-form-group flex flex-col p-4
        "
          >
            <button type="submit w-[80%]">Submit</button>
          </div>
        </form>

        <div className="reg-links">
          <Link className=" text" to="/login">
            or Already have Account ?{" "}
            <span className=" text-[blue]">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reg;
