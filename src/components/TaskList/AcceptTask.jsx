import { Container } from 'postcss'
import React from 'react'

const AcceptTask = ({data}) => {

  // Console.log(data.taskTitle);

  return (
    <div className='flex-shrink-0 h-full w-[310px] bg-red-400 rounded-xl p-5'>
        <div className='flex items-center justify-between text-sm'>
        <h2 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h2>
        <h4 className='text-sm'>{data.taskDate}</h4>

        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='flex  justify-between mt-4'>
          <button className='bg-green-600 py-1  px-2 text-sm '>Mark as Completed</button>
          <button className='bg-red-600  py-1 px-2 text-sm'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask