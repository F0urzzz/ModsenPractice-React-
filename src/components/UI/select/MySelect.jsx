import React from "react";
import classes from './MySelect.module.css';
const MySelect = ({list, getItem}) =>{
    return(
        <select className={classes.MySelect} onChange={(e)=> getItem(e.target.value)}>
            {list.map(opt=>
                <option key={opt}>{opt}</option>
            )}
        </select> 
    )
}
export default MySelect;
