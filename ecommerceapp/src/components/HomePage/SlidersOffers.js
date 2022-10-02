import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function SlidersOffers() {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      centerSlidePercentage={95}
      autoPlay
      interval={3000}
      infiniteLoop
      centerMode
    >
      <WrapperSlider>
        <img src={"/images/bgOffers.png"} alt="" />
        <div className="content-container bgGreen">
          <span>Ramadan Offers</span>
          <p>Get 25%</p>
          <button>Grab Offer</button>
        </div>
      </WrapperSlider>
      <WrapperSlider>
        <img src={"/images/bgOffers.png"} alt="" />
        <div className="content-container bgRed">
          <span>Ramadan Offers</span>
          <p>Get 25%</p>
          <button>Grab Offer</button>
        </div>
      </WrapperSlider>
      <WrapperSlider>
        <img src={"/images/bgOffers.png"} alt="" />
        <div className="content-container bgBlack">
          <span>Ramadan Offers</span>
          <p>Get 25%</p>
          <button>Grab Offer</button>
        </div>
      </WrapperSlider>
    </Carousel>
  );
}

const WrapperSlider = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }

  .content-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 145px;
    height: 100%;
    border-radius: 10% 0% 0% 10% / 50% 0% 0% 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: white;

    span {
      font-size: 12px;
    }

    p {
      font-size: 25px;
    }

    button {
      border-radius: 50px;
      border: none;
      padding: 5px 10px;
      color: #6ba821;
      background: #fff;
    }
  }

  .bgGreen {
    background: var(--background);
  }

  .bgRed {
    background: var(--price);
  }

  .bgBlack {
    background: #000;
  }
`;

export default SlidersOffers;
