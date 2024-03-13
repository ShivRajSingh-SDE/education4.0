import React from "react";
import { Link } from "react-router-dom";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import img from "./gitam1.jpg";

const AboutCard = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <section className="aboutHome bg-gray-100 py-20">
        <div className="container mx-auto flex justify-around items-center">
          <div className="left flex-1">
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://image.lexica.art/full_jpg/e522a8d6-4bec-4dff-aacf-8f0e6f8f1080"
              alt=""
            />
          </div>
          <div className="right flex-1 ml-12">
            <Heading
              subtitle="KEEP LEARNING"
              title="Benefits About AppTechTell Online Learning."
            />
            <div className="items mt-8">
              {homeAbout.map((val) => (
                <Link to={val.link} key={val.title}>
                  <div className="item bg-white rounded-2xl shadow-md hover:shadow-lg p-6 mb-4">
                    <div className="flex items-center mb-4">
                      <div className="img mr-4">
                        <img
                          className="w-16 h-16 rounded-full"
                          src={val.cover}
                          alt=""
                        />
                      </div>
                      <div className="text">
                        <h2 className="text-lg font-semibold">{val.title}</h2>
                        <p className="text-gray-600">{val.desc}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
