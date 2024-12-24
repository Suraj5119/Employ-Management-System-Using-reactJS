import React from 'react'
import Header from '../../other/Header'
import TaskList from '../../other/TaskList'
import Tasklists from '../TaskList/Tasklists'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
     
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskList data={props.data}/>
      <Tasklists data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard