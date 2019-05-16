import React from "react";
import {Segment, Icon} from "semantic-ui-react"

export default function Quote(props) {
  return (
    <Segment textAlign="center" raised>
      <Icon name="quote left" />
      {props.body}
      <Icon name="quote right" />
      <p>
        <small>{props.author}</small>
      </p>
    </Segment>
  );
}
