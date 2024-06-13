import React from 'react'
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const Login = ({setNavigate}) => {
  const schema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: { type: 'string', title: 'Tên đăng nhập' },
      password: { type: 'string', title: 'Mật khẩu', format: 'password' }
    }
  }
  const uiSchema = {
    "ui:submitButtonOptions": {
      "props": {
        "disabled": false,
       
      },
      "norender": false,
      "submitText": "Đăng nhập",
     
    }
  };
  const onSubmit= ({formData})=>{
   
console.log(formData)
      setNavigate('home')
      
  }

  return (
    <div>
      <Form
    schema={schema}
    validator={validator}
    uiSchema={uiSchema}
    onSubmit={onSubmit}
 
  />
    
    </div>
  )
}

export default Login