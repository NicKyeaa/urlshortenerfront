import React from "react";
import { Input, Form, Space, Button } from "antd";

const onFinish = (values: unknown) => {
  console.log("Success", values);
};

function UrlShortenerForm() {
  return (
    <>
      <Form name='SubmitUrl' onFinish={onFinish}>
        <Space.Compact style={{ width: "100%" }}>
          <Form.Item
            name='URL'
            rules={[
              {
                required: true,
                message: "Please input your URL",
              },
              {
                type: "url",
                message: "Please enter a valid URL",
              },
            ]}
          >
            <Input placeholder='Please input your URL' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Space.Compact>
      </Form>
    </>
  );
}

export default UrlShortenerForm;
