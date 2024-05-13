
import PropTypes from "react";
Sidebar.prototype = {
  changeOption: PropTypes.isRequired,
};

function Sidebar({ changeOption }) {
  return (
    <>
      <div className="flex  items-center justify-start sidebar h-full w-1/5 bg-white shadow-lg   flexDirection:'row', 
  alignItems: 'center' "

style={{
  padding: '7px 20px',
  borderRadius: '12px',
  border: 'none',
  fontWeight: 'bold',
  letterSpacing: '2px'
}}
>
     
      
        <button
className="text-2xl w-full font-semibold justify-start cursor-pointer btn"
style={{
  padding: '10px 35px', 
  color: '#fff',
  fontWeight: 700,
  width: 'fit-content', 
  border: 'none',
  borderRadius: '8px', 
  fontSize: '24px', 
  marginBottom: '30px', 
  background: 'linear-gradient(140deg, #9083d5, #271776ca)' 
}}

  onClick={() => {
    changeOption("messages");
  }}
>
  Messages
</button>
<button
 className="text-2xl w-full font-semibold justify-start cursor-pointer btn"
 style={{
   padding: '10px 35px', 
   color: '#fff',
   fontWeight: 700,
   width: 'fit-content', 
   border: 'none',
   borderRadius: '8px', 
   fontSize: '24px', 
   marginBottom: '30px', 
   background: 'linear-gradient(140deg, #9083d5, #271776ca)' 
 }}
  onClick={() => {
    changeOption("User");
  }}
>
  All Users
</button>

        <button
         className="text-2xl w-full font-semibold justify-start cursor-pointer btn"
         style={{
           padding: '10px 35px', 
           color: '#fff',
           fontWeight: 700,
           width: 'fit-content', 
           border: 'none',
           borderRadius: '8px', 
           fontSize: '24px', 
           marginBottom: '30px', 
           background: 'linear-gradient(140deg, #9083d5, #271776ca)' 
         }}
          onClick={() => {
            changeOption("doctors");
          }}
        >
          Doctor
        </button>
  

      </div>
    </>
  );
}
export default Sidebar;
