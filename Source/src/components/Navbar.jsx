import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/products",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
       //map through the link ad display it in header
       <div style={{background:"lightgrey",padding:"20px"}}>
         {links.map(({title,link},index) => {
           return <NavLink key={index} to= {link}
           style={({isActive}) => ({
             color:isActive ? 'black':'grey',padding:10
           })}>  {title}
           </NavLink>
         })}
        
       </div>
  );
};
