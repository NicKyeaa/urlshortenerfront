import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  longURL: string;
  shortURL: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Original URL',
    dataIndex: 'originalURL',
    key: 'originalURL',
  },
  {
    title: 'Short URL',
    key: 'shortURL',
    render: (shortURL) => <a>{shortURL}</a>,
  },
];

const URLList: React.FC = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:3000');
      result.data.forEach((el) => {
        el.key = el._id;
      });
      console.log(result.data);

      //   setData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Table columns={columns} dataSource={data} />;
};

export default URLList;
