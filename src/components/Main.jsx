import React from 'react'

import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
  } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;



export default function Main() {

  const [formInput, setFormInput] = useState
  (
    {
    title: '',
    body: '',
    urgent: true,
    date: null
    }
  )
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  function handleChange (event) {
    const {name, value, type, checked} = event.target
    setFormInput(prevFormInput => {
       return {
         ...prevFormInput,
         [name]: type === "checkbox" ? checked : value
        }
    })
    
  }
console.log(formInput)
  return (
    <div className='main-div'>
        <h2>New Task :</h2>
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
        type='text' 
        value={formInput.title}
        onChange={handleChange}
        required
        />
      </Form.Item>
      
      <Form.Item
      label="Dead line">
        <DatePicker 
        name='date'
        type='date'
        onChange={handleChange}
        dateForma='dd/MM/yyyy'
        value={formInput.date}
       
        />
      </Form.Item>
      <Form.Item
      label="TextArea">
          <TextArea
          type='text'
          name='body'
          rows={4}
          value={formInput.body}
          onChange={handleChange}
          required
          />
        </Form.Item>
      <Form.Item 
      label="Urgent"
      valuePropName="checked">
        <Checkbox
        checked={formInput.urgent}
        onChange={handleChange}
        name='urgent' />
      </Form.Item>
    <Form.Item className='buttonSubmit'>
        <Button>Create Task</Button>
      </Form.Item>
    </Form>
    </div>
  )
}
