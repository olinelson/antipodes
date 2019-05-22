import React, { Fragment, Component } from "react";
import "./App.css";

// semantic components
import { Container, Divider, Menu, Icon } from "semantic-ui-react";

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
        <Menu fixed="top" pointing  secondary  className="menu_bar">
          <Link
            className=" menu item"
            activeClass="active"
            to="news"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >
            News
          </Link>

          <Link
            className=" menu item"
            activeClass="active"
            to="events"
            spy={true}
            smooth={true}
            offset={-35}
            duration={500}
          >
            Events
          </Link>

          <Link
            className=" menu item"
            activeClass="active"
            to="video"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Video
          </Link>

          <Link
            className=" menu item"
            activeClass="active"
            to="bio"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            About
          </Link>

          <Link
            className=" menu item"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>

          <Menu.Menu position="right" />

          <Menu.Item name="facebook">
            <Icon name="facebook" />
          </Menu.Item>
          <Menu.Item name="bandcamp">
            <Icon name="bandcamp" />
          </Menu.Item>
          <Menu.Item name="youtube">
            <Icon name="youtube" />
          </Menu.Item>
        </Menu>
        <Banner />

        <Divider hidden />

        <Element name="news" className="element">
          <NewsContainer />
        </Element>

        <Divider hidden />

        <Element name="events" className="element">
          <BandsInTown />
        </Element>

        <Divider hidden />

        <Element name="video" className="element">
          <Video />
        </Element>

        <Divider hidden />

        <Element name="bio" className="element">
          <Bio />
        </Element>

        <Divider hidden />

        <Element name="contact" className="element">
          <Contact />
        </Element>

        <Divider hidden />
        <Divider hidden />

        <Footer />
      </Fragment>
    );
  }
}

export default App;
