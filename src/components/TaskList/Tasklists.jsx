import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const Tasklists = ({ data }) => {
  
  return (
    <div
      id="tasklists"
      className="h-[55%] w-full mt-10 py-5 flex items-center justify-start gap-10 flex-nowrap overflow-x-auto">

      {data.tasks.map((ele,idx)=>{
        if(ele.active){
          return <AcceptTask key={idx} data = {ele}/>
        }
        if(ele.newTask){
          return <NewTask key={idx} data = {ele}/>
        }
        if(ele.completed){
          return <CompleteTask key={idx} data = {ele}/>
        }
        if(ele.failed){
          return <FailedTask key={idx} data = {ele}/>
        }
      })}
    </div>
  );
};

export default Tasklists;
