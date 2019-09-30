import React from "react";
import { Button, Form, Container } from "semantic-ui-react";

export default function Contact() {
  return (
    <Container text>
      <Form action="https://formspree.io/lukesweeting@gmail.com" method="POST">
        <h1>Contact</h1>
        <Form.Input label="Full Name" name="name" placeholder="Mike Nock" />
        <Form.Input label="Email" name="email" type="email" placeholder="pocket_science@gmail.com" />
        <Form.TextArea name="message" label="Message" placeholder="It Was the Best of Times; It Was the Worst of Times..." />
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
}
