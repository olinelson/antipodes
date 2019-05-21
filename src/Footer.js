import React from "react";

import { Container, Icon, Grid } from "semantic-ui-react";

const generateCurrentYear = () => {
  let fullDate = new Date();
  let year = fullDate.getFullYear();
  return year;
};

export default function Footer() {
  return (
    <Container
      className="footer"
      fluid
      textAlign="center"
      style={{
        display: "grid",
        alignItems: "center",
        borderTop: "1px solid #CACBCD"
      }}
    >
      <Container text>
        <p>
          <Icon name="copyright" />
          Antipodes {generateCurrentYear()}
        </p>
      </Container>
    </Container>
  );
}
