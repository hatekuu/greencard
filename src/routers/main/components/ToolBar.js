import React from 'react';

const Toolbar = () => {


  return (
    <div className="relative -left-20 -top-32 text-black shadow-lg rounded-lg" style={{ height: 'auto', width: '250px' }}>
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold mb-6 text-center">Danh mục sản phẩm</h2>
      <ul>
        <li className="mb-4">
          <a className="flex items-center p-3 hover:bg-gray-200 rounded transition duration-300">
            <span className="mr-2 text-2xl">📄</span>
            <span className="text-lg">Giấy</span>
          </a>
        </li>
        <li className="mb-4">
          <a className="flex items-center p-3 hover:bg-gray-200 rounded transition duration-300">
            <span className="mr-2 text-2xl">🖨️</span>
            <span className="text-lg">In 3D</span>
          </a>
        </li>
        <li className="mb-4">
          <a className="flex items-center p-3 hover:bg-gray-200 rounded transition duration-300">
            <span className="mr-2 text-2xl">💳</span>
            <span className="text-lg">In thẻ thường</span>
          </a>
        </li>
        <li className="mb-4">
          <a className="flex items-center p-3 hover:bg-gray-200 rounded transition duration-300">
            <span className="mr-2 text-2xl">🔒</span>
            <span className="text-lg">In thẻ từ</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  
  
  

  );
};

export default Toolbar;
