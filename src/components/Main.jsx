import React from 'react'
import Split from 'react-split';
import SideTasks from './sideNotes/SideTasks';

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
        if(date === Date) {
          return  {
            ...prevDate,
            date
          }
          } else {
            setDate("pas de date definis pour cette tache")
          }
      }) 
  
  }

  return (
    <Split
    sizes={[30, 70]}
    direction="horizontal"
    className="split"
    cursor='col-resize'
    gutterSize={50}
    >
    <SideTasks allData={allData} />
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
    </div>
    </Split>
    
  )
}
// to do: we want to put a  condition  on the create task button to display a error message in the case of one of the 
//input is empty.
