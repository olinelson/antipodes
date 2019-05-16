import React, { Component } from "react";
import { Menu } from "semantic-ui-react";


export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed={"top"} secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          style={{ color: "white" }}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
          style={{ color: "white" }}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
          style={{ color: "white" }}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
            style={{ color: "white" }}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
