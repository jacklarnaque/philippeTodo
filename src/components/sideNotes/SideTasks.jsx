import React from 'react'
import { Card, Space } from 'antd';

export default function SideTasks(props) {
  console.log (props.allData[0])
  return (
    <div className='sideTasks'>
     
    <Space direction="vertical" size={16}>
<Card className='card' size="small" title="Notesx"style={{ maxWidth: "max-content", minWidth: "min-content" }}>
<div className='tasks'>
  {props.allData.map((datas) => {
    console.log(datas[0])
    return (
      <p>{datas}</p>
      
      )
    }) }

</div>
</Card>
</Space>

    </div>
  )
}
//TO DO : I have a problem; , what I want is to be able to use a object instead of an array
//to be able to display each notes when the use click on create.
//I can't sty-lised  and 0organised my notes with an array , i want to use an object instead.
//I tried to put an object instead of an array in0to the "createTasks" function but it doesnt 
// work , react refuse object  as a child rendered into a state.