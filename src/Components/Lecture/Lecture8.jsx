// import React from 'react'
import "./Lecture.css";


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import Iframe from "react-iframe";

const Lecture = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        allowTouchMove={false}
        scrollbar={{ draggable: false }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="l-maindiv">
            <div className="l-notes">
              <div className="l-header">
                <h2>Notes</h2>
              </div>
              <div className="l-content">
                <h1>Introduction</h1>
                <p>
                  Imagine having a tool that can write text, create pictures, or
                  compose music for you. Generative AI is a tool that can do all
                  of those things! In this lesson, we’ll explore the basics of
                  generative AI and how it’s used in the popular tool, ChatGPT.
                </p>
                <p>
                  Generative AI refers to a type of artificial intelligence that
                  is capable of creating new content based on its understanding
                  of patterns and relationships in the data it has been trained
                  on. It can generate content that resembles human-created work,
                  making it a powerful tool for a wide range of applications.
                </p>
                <p>
                  In the case of ChatGPT, generative AI is used to create
                  text-based responses to user input. Generative AI is the core
                  technology behind ChatGPT, enabling it to understand user
                  input and generate human-like text responses to engage users
                  in a reasonable conversation.
                </p>
                <p>
                  In the case of ChatGPT, generative AI is used to create
                  text-based responses to user input. Generative AI is the core
                  technology behind ChatGPT, enabling it to understand user
                  input and generate human-like text responses to engage users
                  in a reasonable conversation.
                </p>
                <p>
                  In the case of ChatGPT, generative AI is used to create
                  text-based responses to user input. Generative AI is the core
                  technology behind ChatGPT, enabling it to understand user
                  input and generate human-like text responses to engage users
                  in a reasonable conversation.
                </p>
              </div>
            </div>

            <div className="l-media">
            <Iframe src="https://www.youtube.com/embed/nn87IyFPEy4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>       </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Lecture;
