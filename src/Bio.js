import React from "react";
import { Container, Segment, Icon, Grid, Image } from "semantic-ui-react";

import Quote from "./Quote";

import DividerImage from "./DividerImage";

export default function Bio() {
  return (
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <p>
              <span className="h1 ui header">Antipodes</span> is a collective of New Zealand, Australian
              and European jazz musicians co-led by pianist Luke Sweeting
              (Freedman Jazz Fellowship finalist 2016) and saxophonist Jake
              Baxendale. The group plays original compositions that emphasise
              melody, emotive soundscapes, and an open improvisational
              aesthetic.
            </p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Image
              centered
              size="medium"
              src="https://antipodes-band-bucket.storage.googleapis.com/antipodes1/antipodes1tablet.jpg"
            />
          </Grid.Column>
        </Grid.Row>

        <Quote
          body="A great blowing band with dense heads, occasional free and floating segments, room for solos and some great grooves"
          author="Eric Pozza - Canberra Jazz"
        />

        <Grid.Row>
          <Grid.Column width={8}>
            <Image
              centered
              size="medium"
              src="https://antipodes-band-bucket.storage.googleapis.com/band1/band1tablet.jpg"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <p>
              Described during their recent tour of Australia as “a great
              blowing band with dense heads, occasional free and floating
              segments, room for solos and some great grooves” (Canberra Jazz)
              this is music drawn from diverse influences – modern New York jazz
              meets Swedish indie pop and European free improvised music.
              Audiences are first drawn in by introspective, timbral
              improvisations and then set to foot-tapping with danceable beats,
              songlike melodies and fiery solos.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Quote
          body="Antipodes hits the mark on a number of levels. Firstly the writing is superb. The musicianship is also great but for me it is the communication of a shared vision that lifts them above the ordinary."
          author="John Fenton - Jazz Local 32"
        />
        <p>
          Antipodes was formed after a chance meeting between Jake, Luke and
          drummer Aidan Lowe at a jam session in Berlin in 2013. Their musical
          connection became immediately apparent and they began writing and
          performing original compositions together. With Jake hailing from
          Wellington and Luke and Aidan both being native Canberrans, Antipodes
          seemed like an apt name for the far-flung trio. Joined by guitarist
          Callum Allardice (winner NZ Jazz Composition award 2016-17) in 2014,
          they have toured NZ and Australia every year to rapt audiences. The
          music draws from diverse influences – modern New York jazz meets
          Swedish indie pop and European free improvised music – that reflects
          the vibrant Berlin music scene.
        </p>
      </Grid>
    </Container>
  );
}
