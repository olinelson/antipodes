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
        <Menu fixed="top" secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <Link
              activeClass="active"
              to="test1"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}

            >
              Test 2 (delay)
            </Link>
          </Menu.Item>
          <Menu.Item
            name="news"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="events"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="video"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="bio"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="contact"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
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

        <NewsContainer />

        <Divider hidden />

        <BandsInTown />

        <Divider hidden />
        <Element name="test1" className="element">
          <Video />
        </Element>

        <Divider hidden />

        <Bio />

        <Divider hidden />

        <Contact />

        <Divider hidden />
        <Divider hidden />

        <Footer />
      </Fragment>
    );
  }
}

export default App;
