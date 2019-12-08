import React, { Component } from "react";

import pic1 from "./resources/pic1.jpg";
import pic2 from "./resources/pic2.jpg";
import pic3 from "./resources/pic3.jpg";

import { Embed, Container } from "semantic-ui-react";

// this sample arrow next stuff is to overide the built in styling of the next buttons.
// there are overides for the backgorund color in app.css

import InfiniteCarousel from "react-leaf-carousel";

export default class Video extends Component {
  render() {
    return (
      <Container>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}
          dots={true}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={1}
          slidesToShow={1}
          scrollOnDevice={true}
          swipe={true}
        >
          <Embed id='NnFzxJgZjiI' placeholder={pic1} source='youtube' />
          <Embed id='4BPnDuYu8Ts' placeholder={pic2} source='youtube' />
          <Embed id='uaN1BwKqg1Q' placeholder={pic3} source='youtube' />
        </InfiniteCarousel>
      </Container>
    );
  }
}
