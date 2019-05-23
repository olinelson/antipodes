import React, { Component, Fragment } from "react";
import "./App.css";

// semantic components
import { Divider, Icon, Image } from "semantic-ui-react";

// hamburger
import { slide as Menu } from "react-burger-menu";

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
        <Menu
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

          <Icon name="facebook" />

          <Icon name="bandcamp" />

          <Icon name="youtube" />
        </Menu>

        <Banner />

        <Divider hidden />

        <Element name="news" className="element">
          <NewsContainer />
        </Element>

        <Divider hidden />

        <Image
          fluid
          src="https://antipodes-band-bucket.storage.googleapis.com/band1.jpg"
        />

        <Divider hidden />

        <Element name="events" className="element">
          <BandsInTown />
        </Element>

        <Divider hidden />

        <Element name="video" className="element">
          <Video />
        </Element>

        <Divider hidden />

        <Image
          fluid
          src="https://antipodes-band-bucket.storage.googleapis.com/antipodes2.jpg"
        />

        <Divider hidden />

        <Element name="bio" className="element">
          <Bio />
        </Element>

        <Divider hidden />

        <Image
          fluid
          src="https://antipodes-band-bucket.storage.googleapis.com/antipodes1.jpg"
        />

        <Divider hidden />

        <Element name="contact" className="element">
          <Contact />
        </Element>
        <Divider hidden />

        <Image
          fluid
          src="https://antipodes-band-bucket.storage.googleapis.com/band2.jpg"
        />

        <Footer />
      </Fragment>
    );
  }
}

export default App;
