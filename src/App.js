import React, { Component, Fragment } from "react";
import "./App.css";

// semantic components
import { Divider, Icon, Image, Container, Menu } from "semantic-ui-react";

// hamburger
import { slide as SlideMenu } from "react-burger-menu";

// lazy load
import LazyLoad from "react-lazyload";

// react-scroll
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
// page components
// import NavBar from "./NavBar";
import Banner from "./Banner";
import NewsContainer from "./NewsContainer";
import BandsInTown from "./BandsInTown";
import Video from "./Video";
import Bio from "./Bio";
import Contact from "./Contact";
import Footer from "./Footer";
import { Z_FIXED } from "zlib";
import DividerImage from "./DividerImage";

class App extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  scrollMore() {
    scroll.scrollMore(100);
  }

  handleSetActive() {
    console.log();
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Fragment>
        <SlideMenu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
          customBurgerIcon={<Icon name="bars" />}
          customCrossIcon={<Icon name="close" />}
          // id="elastic"
        >
          <Link
            activeClass="active"
            to="news"
            spy={true}
            smooth={true}
            duration={500}
          >
            News
          </Link>

          <Link
            activeClass="active"
            to="events"
            spy={true}
            smooth={true}
            duration={500}
          >
            Events
          </Link>

          <Link
            activeClass="active"
            to="video"
            spy={true}
            smooth={true}
            duration={500}
          >
            Video
          </Link>

          <Link
            activeClass="active"
            to="bio"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>

          <a href="https://www.facebook.com/antipodesband/?fb_dtsg_ag=Adw5g7msJNoX3LaLV7T35nWqHQ-FZgul5B7ZDIfJHDTzEw%3AAdw0kEJJHTH0TeT6Wxu-3AdcNCFLkp8vdmt68OE7o03JOA">
            <Icon name="facebook" />
          </a>

          <a href="https://rattle-records.bandcamp.com/album/good-winter">
            <Icon name="bandcamp" />
          </a>

          <a href="https://www.youtube.com/channel/UCprU4MaJyO_JH8Sc6OS5LXA">
            <Icon name="youtube" />
          </a>
        </SlideMenu>
        {/* Banner */}

        <Banner />

        {/* News Section */}

        <Divider hidden />
        <Element name="news" className="element">
          <NewsContainer />
        </Element>
        <Divider hidden />

        {/* Image */}

        <DividerImage filename="antipodes2" />

        {/* Events */}

        <Divider hidden />
        <Element name="events" className="element">
          <BandsInTown />
        </Element>
        <Divider hidden />

        {/* Video */}
        <Element name="video" className="element">
          <Video />
        </Element>
        <Divider hidden />

        {/* Bio */}
        <Element name="bio" className="element">
          <Bio />
        </Element>
        <Divider hidden />
        {/* Image */}
        <DividerImage filename="band1" />
        <Divider hidden />
        {/* Contact */}
        <Element name="contact" className="element">
          <Contact />
        </Element>
        <Divider hidden />

        {/* Image */}
        <DividerImage filename="band2" />

        <Footer />
      </Fragment>
    );
  }
}

export default App;
