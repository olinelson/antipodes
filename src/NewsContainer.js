import React from "react";

import { Container, Header, Image, Grid, Embed } from "semantic-ui-react";

export default function NewsContainer() {
  return (
    <Container
      style={{
        paddingTop: "2rem"
      }}
    >
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <Header as="h1">New Album Out Now</Header>
          <p>
            'Antipodes' are a group of some extremely fine NZ and AU musicians
            writing original jazz music blurring the lines between art music and
            more traditional forms of jazz as a folk music. The unique
            trans-tasman amalgamation of the group allows for music that, as
            John Fenton of Jazz Local 32 writes is "...the communication of a
            shared vision that lifts them above the ordinary."
          </p>
        </Grid.Column>
        <Grid.Column>
          <iframe
            title="bandcamp-iframe"
            style={{
              border: 0,
              width: "300px",
              height: "300px"
            }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2964140474/size=large/bgcol=ffffff/linkcol=63b2cc/minimal=true/transparent=true/"
            seamless
          >
            <a href="http://rattle-records.bandcamp.com/album/good-winter">
              Good Winter by Antipodes
            </a>
          </iframe>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
