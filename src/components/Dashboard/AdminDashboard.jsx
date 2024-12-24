import React from "react";
import Header from "../../other/Header";
import CrateTask from "../../other/CrateTask";
import AllTask from "../../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10 ">
      <Header changeUser={props.changeUser} />
      <CrateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
