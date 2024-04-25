import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="w-full h-30 px-2">
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="Entertainment"
        />
      </div>
    </>
  );
};

// Main Component
const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://raw.githubusercontent.com/vu3tpz/BookMyShow-Clone/master/img/enter/enter1.webp",
    "https://raw.githubusercontent.com/vu3tpz/BookMyShow-Clone/master/img/enter/enter2.webp",
    "https://raw.githubusercontent.com/vu3tpz/BookMyShow-Clone/master/img/enter/enter3.webp",
    "https://raw.githubusercontent.com/vu3tpz/BookMyShow-Clone/master/img/enter/enter4.webp",
    "https://raw.githubusercontent.com/vu3tpz/BookMyShow-Clone/master/img/enter/enter5.webp",
    "https://raw.githubusercontent.com/vu3tpz/BookMyShow-Clone/master/img/enter/enter6.webp",
    "https://raw.githubusercontent.com/vu3tpz/BookMyShow-Clone/master/img/enter/enter7.webp",
    "https://raw.githubusercontent.com/vu3tpz/BookMyShow-Clone/master/img/enter/enter8.webp",
    "https://raw.githubusercontent.com/vu3tpz/BookMyShow-Clone/master/img/enter/enter9.webp",
    "https://raw.githubusercontent.com/vu3tpz/BookMyShow-Clone/master/img/enter/enter10.webp",
    "https://raw.githubusercontent.com/vu3tpz/BookMyShow-Clone/master/img/enter/enter11.webp",
    "https://raw.githubusercontent.com/vu3tpz/BookMyShow-Clone/master/img/enter/enter12.webp",
  ];
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image, index) => (
          <EntertainmentCard src={image} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
