import React, { Component } from "react";
import Slider from "react-slick";

import pic1 from "./resources/pic1.jpg";
import pic2 from "./resources/pic2.jpg";
import pic3 from "./resources/pic3.jpg";

import { Embed, Container, Icon } from "semantic-ui-react";

// this sample arrow next stuff is to overide the built in styling of the next buttons.
// there are overides for the backgorund color in app.css

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >

    </div>
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <Container>
        <Slider {...settings}>
          <Embed id="NnFzxJgZjiI" placeholder={pic1} source="youtube" />
          <Embed id="4BPnDuYu8Ts" placeholder={pic2} source="youtube" />
          <Embed id="uaN1BwKqg1Q" placeholder={pic3} source="youtube" />
        </Slider>
      </Container>
    );
  }
}
