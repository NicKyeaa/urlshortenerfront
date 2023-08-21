import React from "react";
import { Input, Form, Space, Button } from "antd";

function UrlShortenerForm() {
  return (
    <>
      <Space.Compact style={{ width: "100%" }}>
        <Input defaultValue='Submit your URL' />
        <Button type='primary'>Submit</Button>
      </Space.Compact>
    </>
  );
}

export default UrlShortenerForm;
