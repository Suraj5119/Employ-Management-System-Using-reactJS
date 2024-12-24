import React from 'react'

const TaskList = ({data}) => {
  return (
    <div className='flex justify-between gap-5 mt-10  screen'>
      <div className=' w-[45%] bg-blue-400 rounded-xl py-7 px-8'>
        <h2 className='text-5xl font-semibold'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className=' w-[45%] bg-red-400 rounded-xl py-7 px-8'>
        <h2 className='text-5xl font-semibold'>{data.taskNumbers.completed}</h2>
        <h3 className='text-2xl font-medium'>Completed Task</h3>
      </div>
      <div className=' w-[45%] bg-yellow-400 rounded-xl py-7 px-8'>
        <h2 className='text-5xl font-semibold'>{data.taskNumbers.active}</h2>
        <h3 className='text-2xl font-medium'>Accepted Task</h3>
      </div>
      <div className=' w-[45%] bg-green-400 rounded-xl py-7 px-8'>
        <h2 className='text-5xl font-semibold'>{data.taskNumbers.failed}</h2>
        <h3 className='text-2xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskList