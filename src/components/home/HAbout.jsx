import React, { useEffect, useState } from "react";
import axios from "axios";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import AppTechTell from "../allcourses/AppTechTell.png";
import Roadmap from "../Roadmap/Roadmap";
import Roadmapcor from "../Roadmap/Roadmapcor";

const HAbout = () => {
  const [productData, setProductData] = useState([]);

  const navigateToCourse = () => {
    window.location.href = "/courses";
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading
            subtitle="our courses"
            title="explore our popular online courses"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {productData.slice(0, 2).map((val, idx) => (
              <div
                onClick={navigateToCourse}
                key={idx}
                className="card-container border-blue-400 border-2 bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative">
                  <img
                    className="object-cover w-full h-40 "
                    src={val.imageLink}
                  />
                  <div className="absolute top-0 right-0 drop-shadow-2xl shadow-2xl bg-blue-500 text-white px-2 py-1 rounded-bl-lg">
                    <span>New</span>
                  </div>
                </div>
                <div className="p-4">
                  <h1 className="text-lg font-semibold mb-2">
                    {val.imageName}
                  </h1>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <img
                        className="h-8 w-8 rounded-full mr-2"
                        src={AppTechTell}
                        alt="AppTechtell"
                      />
                      <div>
                        <h4 className="text-sm font-medium">AppTechtell</h4>
                        <span className="text-xs text-gray-500">
                          Time: {val.hours}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 fill-current ${
                              i < val.starsCount
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 15.566L4.35 18.998l1.05-6.15L1.05 8.682l6.15-.894L10 3l2.8 4.788 6.15.894-4.35 3.166 1.05 6.15z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600 ml-1">
                        ({val.starsCount})
                      </span>
                    </div>
                  </div>

                  <a
                    href={val.youtubeVideoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-5 cursor-pointer  text-blue-500 font-semibold hover:text-blue-600"
                  >
                    START NOW!
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Roadmapcor />
      </section>
    </>
  );
};

export default HAbout;
