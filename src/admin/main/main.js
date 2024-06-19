import React from 'react'
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import * as Realm from 'realm-web'
import './main.css'
const app= new Realm.App({id:process.env.REACT_APP_REALM_ID})
const schema = {
  type: 'object',
  required: ['name', 'category', 'image', 'description'],
  properties: {
    name: { type: 'string', title: 'Tên sản phẩm' },
    category: { type: 'string', title: 'Loại' },
    image: {
      type: 'array',
      title: 'Link hình ảnh',
      items: {
        type: 'string',
        format: 'uri',
        title: 'Hình ảnh'
      },
      minItems: 1
    },
    description: { type: 'string', title: 'Mô tả' }
  }
};


const uiSchema = {
  "ui:submitButtonOptions": {
    "norender": false,
    "submitText": "Nhập hàng",
  }
};
const AdminPage = () => {
  const onSubmit=async({formData})=>{
    const funtionName='setProducts'
    try {
      await app.currentUser.callFunction(funtionName,formData)
      console.log('succesfull')
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>  
    {/* <img src='https://i.imgur.com/aX8ayOp.jpeg' alt='dong'/> */}
     <Form
    schema={schema}
    validator={validator}
    uiSchema={uiSchema}
    onSubmit={onSubmit}
  /></div>
  )
}

export default AdminPage