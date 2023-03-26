import React from 'react'
import { Card, Space } from 'antd';
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
    }
  )
  const [date, setDate] = useState("")
  const [allData, setAllData] = useState([]);
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  function createTask() {
    setAllData(prevAllData => {
       return [
         ...prevAllData,
         formInput.title,
         formInput.body,
         formInput.urgent? "urgent" : "pas urgent",
         date.toString()
        ]
        
    })
  }
 
  function handleChange (event) {
    const {name, value, type, checked} = event.target
    setFormInput(prevFormInput => {
       return {
         ...prevFormInput,
         [name]: type === "checkbox" ? checked : value,
        }
    })
    setDate(prevDate => {
      return  {
        ...prevDate,
        date
      }
    })
    
  }
console.log(allData)
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
      <Form.Item
      label="Dead line">
        <DatePicker 
        name='date'
        selected={date}
        type='date'
        onChange={(date) => setDate(date)}
        dateForma='dd/MM/yyyy'
        required
        />
        
      </Form.Item>
    <Form.Item className='buttonSubmit'>
        <Button onClick={createTask}>Create Task</Button>
      </Form.Item>
    </Form>
    <Space direction="vertical" size={16}>
    <Card size="small" title="Small size card"style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
    <div>
      {allData.map((datas) => {
        return (
          <ol> 
          <li>{datas}</li>
            </ol>
      )
      }) }
    
    </div>
    </div>
    
  )
}
// to do: we want to put a  condition  on the create task button to display a error message in the case of one of the 
//input is empty.
