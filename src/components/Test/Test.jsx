import React, { useState } from "react";
import Back from "../common/back/Back";
import Testcard from "./Testcard";

import OnlineCourses from "../allcourses/OnlineCourses";

import { AiOutlineArrowDown } from "react-icons/ai";

const Test = () => {
  const [cyberSecurityVisible, setCyberSecurityVisible] = useState(false);

  return (
    <>
      <Back title="Test & Assigment" />

      <Testcard />

      <OnlineCourses />
    </>
  );
};

export default Test;
