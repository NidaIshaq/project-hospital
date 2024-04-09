import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const updateState = (newState) => {
    setIsLogin(newState);
  }; //this is a function pass by refrence
  return (
    <>
      <div className="h-screen w-screen bg-gray-300">
        {isAuthenticated && <Login setLogin={updateState} />}
        {!setIsAuthenticated && <Register setLogin={updateState} />}
      </div>
    </>
  );
}
export default Index;
