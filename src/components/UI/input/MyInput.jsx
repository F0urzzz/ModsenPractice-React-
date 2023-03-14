import React from "react";
import classes from './MyInput.module.css';
const MyInput = ({searchFunction}) =>{

    return(
        <input placeholder="Type to find..." className={classes.MyInput} onChange={(e)=> searchFunction(e.target.value)}/>
    )
}
export default MyInput;