import React,{useState} from 'react'
import "./style.css";
import Menu from"./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./navbar";
const uniqueList = [
  ...new Set(Menu.map((curElem)=> {
    return curElem.category;
  })
  ),
  "All",
];
 const Restaurant = () => {
  const [menuData,setMenuData] = useState(Menu);
  // eslint-disable-next-line no-unused-vars
  const [menuList,setMenuList] = useState(uniqueList);
  const filterItem = (category) =>{
     if(category === "All"){
           setMenuData(Menu);
           return;
     }

    const updatedList = Menu.filter((curElem)=> {
      return curElem.category === category;
    })
    setMenuData(updatedList);
  };

  return (
    <> 
  
  <Navbar filterItem = {filterItem} menuList={menuList}/>
    {/* Data pass from one component to another or parent to child or top to bottom */}
    <MenuCard menuData = {menuData}/> 
    </>
  )
};
export default Restaurant;

  

