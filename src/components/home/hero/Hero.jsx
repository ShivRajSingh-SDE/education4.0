import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../../common/heading/Heading";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = ({ userEmail }) => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle={`WELCOME TO AppTechTell`}
              title="Empowering Future Enabling Dreams"
            />

            <div id="button" className="button">
              <Link id="button" to="/courses">
                <button id="button" className="primary-btn">
                  GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
