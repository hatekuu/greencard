import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '../components/Products';
const Home = (probs) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    probs.setShow(true)
    fetchData();
  }, []); // Chỉ chạy lại khi component mount lần đầu

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://ap-southeast-1.aws.data.mongodb-api.com/app/${process.env.REACT_APP_REALM_ID}/endpoint/getproducts`);
      const fetchedData = response.data;
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div className=' max-lg:mt-20'>
      <Products data={data}/>
    </div>
  );
};

export default Home;
