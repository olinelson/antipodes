import React from "react";
import "./App.css";

// semantic components
import { Container } from "semantic-ui-react";

// page components
import NavBar from "./NavBar";
import Banner from "./Banner";
import NewsContainer from "./NewsContainer";
import Events from "./Events";
import Video from "./Video";
import Bio from "./Bio"

function App() {
  return (
    <Container fluid>
      <NavBar />
      <Banner />
      <NewsContainer />
      <Events />
      <Video />
      <Bio />
    </Container>
  );
}

export default App;
