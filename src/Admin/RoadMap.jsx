import React, { useState } from "react";
import axios from "axios";
import Back from "../components/common/back/Back";

const RoadMap = () => {
  const [Name, setImageName] = useState("");
  const [imageLink, setImageLink] = useState("");

  const [link1, setLink1] = useState("");

  const handleAddProduct = async () => {
    try {
      const response = await axios.post("http://localhost:8000/add/roadmap", {
        Name,
        imageLink,
        link1,
      });

      if (response.status === 201) {
        alert("Product added successfully");
        window.location.reload();
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="  flex  flex-col justify-center items-center">
      <Back title="Admin RoadMap" />

      <div className="flex justify-center text-black mb-5 items-center ">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold">Add RoadMap</h1>

          <input
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => setImageName(e.target.value)}
            className="w-full px-4 py-2 text-black bg-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="text"
            placeholder="Image Link"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
            className="w-full px-4 py-2 text-black bg-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <input
            type="text"
            placeholder="Doc Link"
            value={link1}
            onChange={(e) => setLink1(e.target.value)}
            className="w-full px-4 py-2 text-black bg-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <button
            onClick={handleAddProduct}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
