import React from "react";
import { Link } from "react-router-dom";
import '../../../styles/StartPage.css'
import { paths } from "../../../constants/paths";
const StartPage = () =>{

    return(
        <div className="container">
            <div className="mainContent">
                <h1 style={{marginBottom: '30px', width: '100%', textAlign:'center', letterSpacing: '2px'}}>Let's start!</h1>
                <Link to={paths.pathtomain}><button className="BtnStart">Start</button></Link>
            </div>
            <p className="createrName">Created by Denis Tikovenko</p>
        </div>
    )
}
export default StartPage;