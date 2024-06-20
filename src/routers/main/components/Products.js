import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const Products = (probs) => {

    const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div className="p-4 max-lg:relative -left-10">
    <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {probs.data.map((product) => (
        <div key={product._id} className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md">
          <div onClick={() => navigate(`/greencard/${product._id}`)}>
            {product?.name}<br />
            <img
              src={product?.image[0]}
              alt={product?.name}
              className="mt-2  rounded-lg shadow-md object-contain w-full h-48" // Đặt kích thước hình ảnh và sử dụng object-contain
            />
          </div>
        </div>
      ))}
    </div>
  </div>
  
  

  
  
  )
}

export default Products