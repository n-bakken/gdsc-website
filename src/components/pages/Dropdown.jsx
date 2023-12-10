import React, { useState} from "react";
import { MenuItems } from "./MenuItems"
import "./css/Dropdown.css"

//  logic for when the drop down menu is clicked by the user in the nav bar
function Dropdown() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
    return (
        <>
            <ul onClick={handleClick}
            className={click ? "dropdown-menu clicked" : "dropdown-menu"}> 
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.path} className={item.cName} onClick={() => setClick(false)}> {item.title} </a>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default Dropdown;
