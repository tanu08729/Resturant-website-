import React from 'react'


const Navbar = ({filterItem , menuList}) => {
  return (
    <>
      <nav className="navbar">
      <div className="btn-group">
        {
          menuList.map((curElem)=>{
            return(
              <button className = "btn-group__item" 
         /*try to call with fate arrow function */
               onClick={()=>filterItem(curElem)}> 
               {curElem}
               </button>
            );
          })}
      </div>
      </nav>  
      </>
  )
}

export default Navbar