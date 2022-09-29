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
        <div className="div-after">
          <span>Ramadan Offers</span>
          <p>Get 25%</p>
          <button>Grab Offer</button>
        </div>
      </WrapperSlider>
      <WrapperSlider>
        <img src={"/images/bgOffers.png"} alt="" />
        <div className="div-after">
          <span>Ramadan Offers</span>
          <p>Get 25%</p>
          <button>Grab Offer</button>
        </div>
      </WrapperSlider>
      <WrapperSlider>
        <img src={"/images/bgOffers.png"} alt="" />
        <div className="div-after">
          <span>Ramadan Offers</span>
          <p>Get 25%</p>
          <button>Grab Offer</button>
        </div>
      </WrapperSlider>
    </Carousel>
  );
}

const WrapperSlider = styled.div`
  margin-top: 15px;
  position: relative;
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }

  .div-after {
    position: absolute;
    top: 0;
    left: 50%;
    background: var(--background);
    width: 145px;
    height: calc(100% - 6px);
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
`;

export default SlidersOffers;
