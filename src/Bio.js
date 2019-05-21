import React from "react";
import { Container, Segment, Icon } from "semantic-ui-react";

import Quote from "./Quote";

export default function Bio() {
  return (
    <Container
      textAlign="justified"
    >
      <h1>Bio</h1>
      <p>
        Antipodes is a collective of New Zealand, Australian and European jazz
        musicians co-led by pianist Luke Sweeting (Freedman Jazz Fellowship
        finalist 2016) and saxophonist Jake Baxendale. The group plays original
        compositions that emphasise melody, emotive soundscapes, and an open
        improvisational aesthetic.
      </p>

      <Quote
        body="A great blowing band with dense heads, occasional free and floating segments, room for solos and some great grooves"
        author="Eric Pozza - Canberra Jazz"
      />

      <p>
        Described during their recent tour of Australia as “a great blowing band
        with dense heads, occasional free and floating segments, room for solos
        and some great grooves” (Canberra Jazz) this is music drawn from diverse
        influences – modern New York jazz meets Swedish indie pop and European
        free improvised music. Audiences are first drawn in by introspective,
        timbral improvisations and then set to foot-tapping with danceable
        beats, songlike melodies and fiery solos.
      </p>

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
        music draws from diverse influences – modern New York jazz meets Swedish
        indie pop and European free improvised music – that reflects the vibrant
        Berlin music scene.
      </p>
    </Container>
  );
}
