import React from 'react'
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const Register = ({setNavigate}) => {
  const schema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: { type: 'string', title: 'Tên đăng nhập' },
      password: { type: 'string', title: 'Mật khẩu', format: 'password' },
      confirm: { type: 'string', title: 'Xác nhận mật khẩu', format: 'password' }
    }
  }
  const uiSchema = {
    "ui:submitButtonOptions": {
      "props": {
        "disabled": false,
       
      },
      "norender": false,
      "submitText": "Đăng ký",
     
    }
  };
  const onSubmit= ({formData})=>{
    console.log(formData)
    setNavigate('login')
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

export default Register