import { useState } from 'react';
import axios from 'axios';
import { Input, Form, Space, Button } from 'antd';

function UrlShortenerForm() {
  const [URLs, setURLs] = useState([]);

  const onFinish = async (values: unknown) => {
    // Making a POST request to shorten an URL
    try {
      console.log('Success', values);

      const result = await axios.post('http://localhost:3000/shorten', values);
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form name='SubmitUrl' onFinish={onFinish}>
        <Space.Compact style={{ width: '100%' }}>
          <Form.Item
            name='URL'
            rules={[
              {
                required: true,
                message: 'Please input your URL',
              },
              {
                type: 'url',
                message: 'Please enter a valid URL',
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
