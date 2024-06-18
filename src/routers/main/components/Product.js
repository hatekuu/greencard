import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Toolbar from './ToolBar';
import Contact from './Contact';
const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetchData();
  }, [productId]); // Run fetchData whenever productId changes

  const fetchData = async () => {
    try {
      const response = await axios.post(
        `https://ap-southeast-1.aws.data.mongodb-api.com/app/${process.env.REACT_APP_REALM_ID}/endpoint/detail`,
        { id: productId }, // Send the data in the correct format
        { headers: { 'Content-Type': 'application/json' } } // Ensure the content type is set correctly
      );
      const fetchedData = response.data;
      console.log(fetchedData); // Ensure fetchedData is logged correctly

      setProduct(fetchedData); // Update product state with fetched data
    } catch (error) {
      console.error('Error fetching data: ', error.message);
    }
  };

  return (
    <div>
      {/* <NavBar/>
      <Toolbar/> */}
      <h2>Product Detail</h2>
      <strong>Name:</strong> {product?.name}<br />
      <strong>Category:</strong> {product?.category}<br />
      <strong>Price:</strong> ${product?.price}<br />
      <strong>Description:</strong> {product?.description}<br />
   
    </div>
  );
};

export default ProductDetail;
