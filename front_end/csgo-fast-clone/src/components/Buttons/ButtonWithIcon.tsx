'use client';

import '@fortawesome/fontawesome-free/css/all.css';

const ButtonWithIcon = () => {
      
    return (
        <button onClick={()=>{alert("CLICKED")}} className="bg-gamble hover:bg-gamble-light text-white font-bold py-2 px-4 rounded">
        <i className="fas fa-sign-in-alt mr-2"></i>
        Login
        </button>
    );
  };
  
  export default ButtonWithIcon;