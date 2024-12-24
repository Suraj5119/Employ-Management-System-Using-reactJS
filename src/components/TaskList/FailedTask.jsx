import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
    <div className='flex items-center justify-between text-sm'>
    <h2 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h2>
    <h4 className='text-sm'>{data.taskDate}</h4>
    
    </div>
    <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-2'>{data.taskDescription}</p>
    <div className='mt-2'>
<button className='w-full bg-red-700 px-2 py-1'>Failed</button>
    </div>
  </div>

  )
}

export default FailedTask