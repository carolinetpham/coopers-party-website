import React, { useState } from "react";
import axios from "axios";
import { Button, Card, Form, Input, Radio } from "antd";
import "../styles/rsvpform.css";

const RSVPForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values) => {
    console.log("Form Values:", values); // Debug log

    try {
      const apiURL = process.env.REACT_APP_SHEET_URL;

      const payload = {
        Name: values.name,
        "Attending?": values.attending,
      };

      console.log("Payload Sent to API:", payload); // Debug log

      await axios.post(apiURL, payload);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="rsvp-container">
      <Card className="rsvp-card">
        <div className="rsvp-title">
          <h1>
            RSVP{" "}
            <img src={"images/pineapple.gif"} className="pineapple-gif"></img>
          </h1>
        </div>
        {isSubmitted ? (
          <p>Thanks for responding! I got your answers :)</p>
        ) : (
          <Form
            name="rsvp"
            onFinish={handleSubmit}
            layout="vertical"
            size="large"
          >
            <Form.Item
              label="Name (First and Last)"
              name="name" // Maps to "Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Will you be attending?"
              name="attending" // Maps to "Attending?"
              rules={[{ required: true, message: "Please select an option" }]}
            >
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="submit-button"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default RSVPForm;
