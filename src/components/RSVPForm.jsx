import React from 'react';
import { Button, Card, Form, Input, Radio } from 'antd';
import '../styles/rsvpform.css';

const RSVPForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="rsvp-container">
      <Card className="rsvp-card">
        <div className="rsvp-title">
          <h1>RSVP</h1>
        </div>

        <Form
          form={form}
          name="rsvp"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            label="Name (First and Last)"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Will you be attending?"
            name="attending"
            rules={[{ required: true, message: 'Please select an option' }]}
          >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default RSVPForm;
