import React, { useState, useEffect } from "react";
import axios from "axios";
import Back from "../common/back/Back";

const Notification = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/notification"
        );
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  const toggleContentVisibility = (index) => {
    const updatedProductData = [...productData];
    updatedProductData[index].showContent =
      !updatedProductData[index].showContent;
    setProductData(updatedProductData);
  };

  return (
    <div className=" min-h-auto py-8 px-4">
      <Back title="Notifications" />
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 mt-2">
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
        <div className="notification-container">
          {productData.map((item, index) => (
            <div
              key={index}
              className=" flex border p-2 border-solid rounded-2xl my-2  border-[green] justify-between flex-col items-center   py-4"
            >
              <div className=" flex flex-row justify-center items-center space-x-3">
                <div className="notification-icon bg-green-100 p-3 rounded-full">
                  <i className="fas fa-bell text-green-500"></i>
                </div>
                <span className="notification-text text-gray-800">
                  {item.title}
                </span>
                <span className="notification-time text-gray-500">
                  {item.date}
                </span>
              </div>

              <div>
                <span
                  className="notification-time text-gray-500 cursor-pointer"
                  onClick={() => toggleContentVisibility(index)}
                >
                  {item.showContent
                    ? item.content
                    : item.content.slice(0, 100) + "..."}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
