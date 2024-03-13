import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../allcourses/AppTechTell.png";

const Testcard = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/test-notes"
        );
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);
  return (
    <>
      <section className="coursesCard bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productData.map((val, index) => (
            <div
              key={index}
              className="course-item bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-center items-center h-40">
                  <img
                    src={val.imageLink}
                    alt={val.Name}
                    className="rounded-lg h-full"
                  />
                </div>
                <div className="text p-4 flex flex-col justify-between w-full">
                  <div>
                    <h1 className="text-xl font-semibold mb-2 text-center">
                      {val.Name}
                    </h1>
                    <div className="flex items-center justify-center my-3">
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
                      <span className="text-gray-600 ml-1">
                        ({val.starsCount})
                      </span>
                    </div>
                    <div className="details flex items-center justify-center">
                      <div className="box mr-2">
                        <div className="dimg">
                          <img
                            src={logo}
                            alt="AppTechTells"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div className="para text-sm">
                          <h4>by AppTechTells</h4>
                        </div>
                      </div>
                      <span className="text-sm">{val.hours}</span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-5 mt-3">
                    <div className="outline-btn">
                      <a
                        id="linkid"
                        href={val.link1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 flex  justify-center hover:text-blue-600"
                      >
                        Hand Written
                      </a>
                    </div>{" "}
                    <div className="outline-btn">
                      <a
                        id="linkid"
                        href={val.link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 flex  justify-center hover:text-blue-600"
                      >
                        Online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testcard;
