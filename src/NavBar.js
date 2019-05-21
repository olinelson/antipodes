import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed="top"   secondary >
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
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
    );
  }
}
