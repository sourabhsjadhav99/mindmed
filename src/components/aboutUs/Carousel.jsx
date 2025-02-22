import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({data}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className=" text-center mb-6 text-2xl text-white font-semibold">{data.title}</h2>
      <Slider {...settings}>
        {data?.teamMembers?.map((member, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.designation}</p>
              <p className="text-gray-700 text-center mt-2 text-sm">{member.description.slice(0, 150)}...</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};



export default Carousel;
