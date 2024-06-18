import React from 'react';

const Toolbar = () => {


  return (
    <div className="fixed left-0 top-14 h-full bg-gray-100 text-black">
      <div className="p-4">
    
        <ul>
          <li className="mb-2">
            <a  className="block p-2 hover:bg-gray-100 rounded">Option 1</a>
          </li>
          <li className="mb-2">
            <a  className="block p-2 hover:bg-gray-100 rounded">Option 2</a>
          </li>
          <li className="mb-2">
            <a  className="block p-2 hover:bg-gray-100 rounded">Option 3</a>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Toolbar;
