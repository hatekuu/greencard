import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ModalImage from 'react-modal-image';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image index
  const { productId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const response = await axios.post(
          `https://ap-southeast-1.aws.data.mongodb-api.com/app/${process.env.REACT_APP_REALM_ID}/endpoint/detail`,
          { id: productId },
          { headers: { 'Content-Type': 'application/json' } }
        );
        const fetchedData = response.data;
       
        setProduct(fetchedData); // Update product state with fetched data
      } catch (error) {
        console.error('Error fetching data: ', error.message);
        // Optionally handle errors, e.g., setProduct(null) or display an error message
      }
    };

    fetchData();
  }, [productId]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.image.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.image.length) % product.image.length);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      {product && (
        <div className='flex'>
           <div className="bg-white p-4 rounded-lg shadow-lg relative overflow-hidden flex  flex-basis-1/4 items-center justify-center" style={{ width: 300, height:400}}>
           <p className='absolute top-4 left-1/2 transform -translate-x-1/2 -mt-4'>{currentImageIndex+1}/{product?.image?.length}</p>
            <ModalImage
            className=' top-0 left-0 object-contain rounded-lg shadow-md cursor-pointer h-96 w-96'
              small={product.image[currentImageIndex]}
              large={product.image[currentImageIndex]}
              alt={product.name}
              hideZoom={true}
              hideDownload={true}
              hideRotate={true}
            />
         
              <button className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-md opacity-40 hover:opacity-80' onClick={handlePrevImage} disabled={currentImageIndex === 0}>
              &lt;
              </button>
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-md  opacity-40 hover:opacity-80" onClick={handleNextImage} disabled={currentImageIndex === product.image.length - 1}>
              &gt;
              </button>
            </div>
            <div className=' p-4 flex-basis-3/4'>
          <div className="mb-4">
            <strong className="font-semibold">Name:</strong> {product.name}
          </div>
          <div className="mb-4">
            <strong className="font-semibold">Category:</strong> {product.category}
          </div>
          <div className="mb-4">
            <strong className="font-semibold">Description:</strong> {product.description}
          </div>
          </div>
          </div>
        
      )}
    </div>
  );
};

export default ProductDetail;
