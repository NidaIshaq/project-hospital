import { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../../Dashboard/Sidebar";
import Dashboard from "../../Dashboard/Dashboard";

function DashboardLayout() {
  const [options, setOptions] = useState("messages");
  const changeOption = (newOption) => {
    setOptions(newOption);
  };
  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-gray-300">
        <div className=" bg-gray-300">
          <Navbar />

          <div className="mainclass flex h-screen w-screen bg-gray-300">
            <Sidebar changeOption={changeOption} />
            <Dashboard option={options} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
