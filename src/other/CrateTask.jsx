import React, { useContext, useState } from 'react'
import NewTask from '../components/TaskList/NewTask'
import { AuthContext } from '../context/AuthProvider'

const CrateTask = () => {

const [userData, setUserData] = useContext(AuthContext)


const [taskTitle, setTaskTitle] = useState('')
const [taskDescription, setTaskDescription] = useState('')
const [taskDate, setTaskDate] = useState('')
const [assignTo, setAssignTo] = useState('')
const [category, setCategory] = useState('')


const [newTask, setNewTask] = useState({})

  const submitHandler = (e)=>{
  e.preventDefault()



 setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:false, completed:false })

  const data = userData;



  data.forEach((ele)=>{
    if(assignTo == ele.firstName){
      ele.tasks.push(newTask);
      ele.taskNumbers.newTask = ele.taskNumbers.newTask + 1; 
    
    }
  })

  
setUserData(data);

  

 setAssignTo('')
 setCategory('')
 setTaskDate('')
 setTaskTitle('')
 setTaskDescription('')


  }
  

  
  return (
    <div className="bg-[#1c1c1c] mt-8  rounded">
        <form  onSubmit={(e)=>{
          submitHandler(e)
        }} 
        className="flex items-start justify-between flex-wrap w-full px-8 pt-4 pb-8"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task title</h3>
              <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="Make UI design"
               />

            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5 mt-3">Date</h3>
              <input 
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "  type="date" placeholder="dd/mm/yyyy" 
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5 mt-3">Assign to</h3>
              <input 
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"  type="text" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5 mt-3">Catagory</h3>
              <input
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"  type="text" placeholder="Design, development etc..." />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5"> Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e)=>{
              setTaskDescription(e.target.value)
              }}

            className=" w-full h-44 py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              cols={45}
              rows={12}
              placeholder="Detailed description of task(Make 500 word) "
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-3 w-full">Create Task</button>
          </div>

          
       
        </form>
      </div>
  )
}

export default CrateTask