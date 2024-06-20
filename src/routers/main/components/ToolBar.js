import React,{useState,useEffect} from 'react';
const Toolbar = (props) => {
const [open,setOpen]=useState(false)
useEffect(() => {
  if(props.navbar){
    setOpen(false);
  }
 }, [props.navbar]);
const handlePress = () => {

  props.setNabar(false)
  setOpen(!open);
   // Reset after 500ms (adjust as needed)
};
  return (
    <div>
    <div className="relative -left-20 -top-32 text-black shadow-lg rounded-lg max-lg:hidden" style={{ height: 'auto', width: '250px' }}>
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
 <button className={`fixed left-0 size-8  overflow-hidden flex justify-center px-4 bg-gray-900 z-10 text-white rounded-md shadow-md opacity-40 hover:opacity-80
  ${open ? 'left-1 translate-x-60' : 'py-0 translate-x-0'}
  transition-all duration-300
`} onClick={handlePress}>  
  <span className="relative z-10 text-lg text-white font-bold">{open  ? '<' : '>'}</span>
</button>

  <div className={`fixed top-28 z-10 ${open ? 'left-1 translate-x-[-12px]' : 'translate-x-[-300px]'} transition-all duration-300`}> 
  <div className=" text-black shadow-lg rounded-lg transition-all duration-300 lg:hidden" style={{ height: 'auto', width: '250px' }}>
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
  </div></div>


 
  </div>
  

  );
};

export default Toolbar;
