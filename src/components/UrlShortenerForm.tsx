import React from "react";
import { Input, Form, Space, Button } from "antd";

const onFinish = (values: any) => {
  console.log("Success", values);
};

function UrlShortenerForm() {
  return (
    <>
      <Form name='SubmitUrl'>
        <Form.Item>
          <Space.Compact style={{ width: "100%" }}>
            <Input />
            <Button type='primary'>Submit</Button>
          </Space.Compact>
        </Form.Item>
      </Form>
    </>
  );
}

export default UrlShortenerForm;
