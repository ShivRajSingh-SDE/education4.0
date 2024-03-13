import React, { useState } from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";
import { BsCapslock } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import Roadmapcor from "../Roadmap/Roadmapcor";

const CourseHome = () => {
  const [cyberSecurityVisible, setCyberSecurityVisible] = useState(false);
  const [cyberSecurityVisible2, setCyberSecurityVisible2] = useState(false);

  return (
    <>
      <Back title="Explore Courses" />
      <br />
      <h1 className="tech   border-b-2 ">Tech Section</h1>

      <div
        className="flex flex-wrap justify-center items-center
      "
      >
        <CoursesCard />
      </div>

      <Roadmapcor />
    </>
  );
};

export default CourseHome;
