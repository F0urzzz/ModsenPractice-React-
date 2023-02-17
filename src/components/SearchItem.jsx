import React from "react";
import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import '../styles/SearchItem.css'

const SearchItem = ({searchFunction, categList, getCategory, sortList, getSort}) =>{
    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    setInterval(()=>{
        setWindowWidth(window.screen.width)
    }, 10)
    console.log(windowWidth)
    return(
        <div className="con">
            <div className="backimg"/>
            <h1 style={{padding: '10px',color: 'white', marginBottom: '10px', width: '100%', textAlign:'center', letterSpacing: '2px'}}>Search for books</h1>
            <div className='MainContent' style={windowWidth> 800 ?{width: '800px'}:{width: windowWidth}}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '10px'}}><MyInput searchFunction={searchFunction}/></div>
                <div className="selects">
                    <div className="select">
                        <p style={{color: 'white', paddingBottom: '5px'}}>Categories</p>
                        <MySelect list={categList} getItem={getCategory}/>
                    </div>
                    <div className="select">
                        <p style={{color: 'white', paddingBottom: '5px'}}>Sorting by</p>
                        <MySelect list={sortList} getItem={getSort}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchItem;