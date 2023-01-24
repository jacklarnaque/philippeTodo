import React from 'react'
import {
    Button,
    DatePicker,
    Form,
    Input,
    Switch,
  } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;

export default function Main() {
  const [title, setTitle] = useState('hi')
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    // from elements property
      console.log(event.target.title.value)          // or directly
    }

  return (
    <div className='main-div'>
        <h1>New Task :</h1>
        <Form 
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
      label="Title">
        <Input 
        name='title'
        required
        value={title}
        onChange={(e)=> setTitle(e.target.value) }/>
      </Form.Item>
      <Form.Item label="Color">
        <Input type='color' />
      </Form.Item>
      <Form.Item label="Dead line">
        <DatePicker />
      </Form.Item>
      <Form.Item label="TextArea">
          <TextArea rows={4}
          required/>
        </Form.Item>
      <Form.Item label="Urgent " valuePropName="checked">
        <Switch />
      </Form.Item>
    <Form.Item className='buttonSubmit'>
        <Button onClick={handleSubmit}>Create Task</Button>
      </Form.Item>
    </Form>
    </div>
  )
}
