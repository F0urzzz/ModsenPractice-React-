import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";
import '..//../styles/SearchItem.css'
import { categList } from "../../constants/config";
import { sortList } from "../../constants/config";

const SearchItem = ({searchFunction, getCategory, getSort}) =>{

    return(
        <div className="con">
            <div className="backimg"/>
            <h1 className="searchItemTitle">Search for books</h1>
            <div className='MainContent'>
                <div className="inputStyle"><MyInput searchFunction={searchFunction}/></div>
                <div className="selects">
                    <div className="select">
                        <p className="pSearch">Categories</p>
                        <MySelect list={categList} getItem={getCategory}/>
                    </div>
                    <div className="select">
                        <p className="pSearch">Sorting by</p>
                        <MySelect list={sortList} getItem={getSort}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchItem;