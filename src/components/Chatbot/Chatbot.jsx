import React, { useState, useEffect, useRef } from "react";

import "./Chatbot.css";

const Chatbot = () => {
  const handleMainClick = () => {
    setExtraVisible(!isExtraVisible);
  };

  const [isExtraVisible1, setExtraVisible1] = useState(false);

  const handleMainClick1 = () => {
    setExtraVisible1(!isExtraVisible1);
  };

  const [isExtraVisible2, setExtraVisible2] = useState(false);

  const handleMainClick2 = () => {
    setExtraVisible2(!isExtraVisible2);
  };

  const [isExtraVisible3, setExtraVisible3] = useState(false);

  const handleMainClick3 = () => {
    setExtraVisible3(!isExtraVisible3);
  };

  const [isExtraVisible4, setExtraVisible4] = useState(false);

  const handleMainClick4 = () => {
    setExtraVisible4(!isExtraVisible4);
  };

  const [isExtraVisible5, setExtraVisible5] = useState(false);

  const handleMainClick5 = () => {
    setExtraVisible5(!isExtraVisible5);
  };

  const [navmain, navhead] = useState(false);
  const nav = () => {
    navhead((show) => !show);
  };

  const [isExtraVisible, setExtraVisible] = useState(false);

  return (
    <div>
      <div className="chatCbotbg p-10">
        <div className="text-[20px] md:text-[30px] max-w-[1100px] mx-auto   items-center">
          <div
            onClick={handleMainClick}
            className="justify-between m-2 p-4 rounded-xl bg-[#ffffff] flex"
          >
            <div className="">
              What topics are covered in the courses offered on the platform?
            </div>
            <div className="main duration-300 ease-in-out animate-bounce">
              ⬇️
            </div>
          </div>
          {isExtraVisible && (
            <div className="extra text-[20px] bg-[#ffffff75] rounded-lg p-3  duration-300 ease-in-out">
              The platform offers a wide variety of courses covering a broad
              range of topics, from Mnc to Faang development skills. You can
              find courses on everything from computer.
            </div>
          )}

          <div
            onClick={handleMainClick1}
            className=" m-2 justify-between p-4 rounded-xl bg-[#ffffff] flex"
          >
            <div className="">What is the quality of the courses?</div>
            <div className="main duration-300 ease-in-out animate-bounce">
              ⬇️
            </div>
          </div>
          {isExtraVisible1 && (
            <div className="extra text-[20px] bg-[#ffffff75] rounded-lg p-3  duration-300 ease-in-out">
              The quality of the courses on the platform is high. All
              instructors are vetted and selected for their expertise and
              experience. Courses are also regularly updated to ensure that they
              are up-to-date with the latest information.
            </div>
          )}

          <div
            onClick={handleMainClick2}
            className=" m-2 justify-between p-4 rounded-xl bg-[#ffffff] flex"
          >
            <div className="">How are instructors vetted and selected?</div>
            <div className="main duration-300 ease-in-out animate-bounce">
              ⬇️
            </div>
          </div>
          {isExtraVisible2 && (
            <div className="extra text-[20px] bg-[#ffffff75] rounded-lg p-3  duration-300 ease-in-out">
              Instructors are vetted and selected through a rigorous process
              that includes a review of their qualifications, experience, and
              teaching ability. Instructors must also have a strong track record
              of success in teaching online courses.
            </div>
          )}

          <div
            onClick={handleMainClick3}
            className=" m-2 justify-between p-4 rounded-xl bg-[#ffffff] flex"
          >
            <div className="">What are the pricing options for courses?</div>
            <div
              className="main duration-300 ease-in-out animate-bounce"
              onClick={handleMainClick3}
            >
              ⬇️
            </div>
          </div>
          {isExtraVisible3 && (
            <div className="extra text-[20px] bg-[#ffffff75] rounded-lg p-3  duration-300 ease-in-out">
              FREE
            </div>
          )}

          <div
            onClick={handleMainClick4}
            className="m-2 justify-between p-4 rounded-xl bg-[#ffffff] flex"
          >
            <div className="">
              Are there any prerequisites for taking courses?
            </div>
            <div className="main duration-300 ease-in-out animate-bounce">
              ⬇️
            </div>
          </div>
          {isExtraVisible4 && (
            <div className="extra text-[20px] bg-[#ffffff75] rounded-lg p-3  duration-300 ease-in-out">
              Some courses may have prerequisites, such as a certain level of
              knowledge or experience in a particular subject. However, many
              courses are open to anyone who is interested in learning the
              topic.
            </div>
          )}

          <div
            onClick={handleMainClick5}
            className="m-2 justify-between p-4 rounded-xl bg-[#ffffff] flex"
          >
            <div className="">
              What kind of support is available for students?
            </div>
            <div className="main duration-300 ease-in-out animate-bounce">
              ⬇️
            </div>
          </div>
          {isExtraVisible5 && (
            <div className="extra text-[20px] bg-[#ffffff75] rounded-lg p-3  duration-300 ease-in-out">
              Students have access to a variety of support resources, including
              online forums, discussion groups, and one-on-one support from
              instructors. There is also a dedicated student support team that
              is available to answer questions and help students troubleshoot
              problems.{" "}
              <a target="_blank" href="https://discord.gg/FsHm39ys">
                Link...
              </a>
            </div>
          )}
          <div
            onClick={handleMainClick5}
            className="m-2 justify-between p-4 rounded-xl bg-[#ffffff] flex"
          >
            <div className="">How can I track my progress in courses?</div>
            <div className="main duration-300 ease-in-out animate-bounce">
              ⬇️
            </div>
          </div>
          {isExtraVisible5 && (
            <div className="extra text-[20px] bg-[#ffffff75] rounded-lg p-3  duration-300 ease-in-out">
              The platform provides students with a variety of tools to track
              their progress in courses. Students can view their grades, track
              their completion of modules and assignments, and see their overall
              progress towards completing the course.
              <a target="_blank" href="https://discord.gg/FsHm39ys">
                Link...
              </a>
            </div>
          )}
          <div
            onClick={handleMainClick5}
            className="m-2 justify-between p-4 rounded-xl bg-[#ffffff] flex"
          >
            <div className="">What is the community like on the platform?</div>
            <div className="main duration-300 ease-in-out animate-bounce">
              ⬇️
            </div>
          </div>
          {isExtraVisible5 && (
            <div className="extra text-[20px] bg-[#ffffff75] rounded-lg p-3  duration-300 ease-in-out">
              The platform has a vibrant community of students and instructors
              who are passionate about learning. Students can connect with each
              other through online forums, discussion groups, and social media.
              <a target="_blank" href="https://discord.gg/FsHm39ys">
                Link...
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
