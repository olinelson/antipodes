import React from "react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";

export default function Contact() {
  return (
    <Container>
      <Form action="https://formspree.io/olivernelson@icloud.com" method="POST">
        <h1>Contact</h1>
        <Form.Field>
          <label>Full Name</label>
          <input name="name" placeholder="Full Name" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input type="email" name="email" placeholder="youremail@gmail.com" />
        </Form.Field>
        <Form.Field />
        <Form.TextArea
          name="message"
          label="Message"
          placeholder="Tell us more about you..."
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
