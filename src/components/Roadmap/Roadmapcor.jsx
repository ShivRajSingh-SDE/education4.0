import React, { useEffect, useState } from "react";
import axios from "axios";

import Heading from "../common/heading/Heading";

const Roadmapcor = () => {
  const [productData, setProductData] = useState([]);
  const navigate = () => {
    window.location.href = "/roadmap";
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/roadmap");
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <>
      <section className="onine">
        <div className="container my-10">
          <Heading subtitle="RoadMap" title="Browse Our Expert Made RoadMap" />
          <div
            onClick={navigate}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {productData.map((val, index) => (
              <div
                key={index}
                className="box transform transition-transform hover:scale-105 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="relative justify-center items-center flex overflow-hidden">
                  <img
                    src={val.imageLink}
                    alt={val.Name}
                    className="object-cover w-32 h-32 rounded-full"
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-xl text-center font-semibold mb-2">
                    {val.Name}
                  </h1>
                  <a
                    href={val.link1}
                    className="block bg-blue-500 text-center text-white py-2 px-4 rounded-md transition-colors hover:bg-blue-600"
                  >
                    View Roadmap
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmapcor;
