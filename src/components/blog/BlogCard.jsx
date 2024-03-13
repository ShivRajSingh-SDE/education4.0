import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../common/heading/Heading";

const BlogCard = () => {
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(3);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=tesla&language=en&from=2024-02-12&sortBy=publishedAt&apiKey=c21352935c2546c1aa3a972e7bb95699"
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleShowMore = () => {
    setVisibleArticles(visibleArticles + 3);
  };

  return (
    <section className="blog">
      <div className="container">
        <Heading subtitle="OUR NEWS" title="Recent From Tech News" />
        <div className="grid2">
          {articles.slice(0, visibleArticles).map((article, index) => (
            <div key={index} className="items shadow">
              <div className="img">
                <img src={article.urlToImage} alt="" />
              </div>
              <div className="text">
                <div className="admin flexSB">
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{article.source.name}</label>
                  </span>
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{article.publishedAt}</label>
                  </span>
                </div>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleArticles < articles.length && (
          <div className="text-center mt-4">
            <button
              onClick={handleShowMore}
              className="bg-[#2591ac] my-4 text-white px-4 py-2 rounded-lg"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCard;
