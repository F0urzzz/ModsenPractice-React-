import React, { useState, useMemo } from "react";
import BookList from "../../BookList/BookList";
import SearchItem from "../../SearhItem/SearchItem";
import axios from "axios";
import BookMoreInf from "../../BookMoreInf/BookMoreInf";

const MainPage = () =>{
    const [searchQuery, setSearch] = useState('')
    const [openBook, setOpenBook] = useState(false)
    const [books,setBooks] = useState([])
    const [toMoreInf, setToMoreInf] = useState()
    const [chooseCateg, setChooseCateg] = useState('')
    const [chooseSort, setChooseSort] = useState('relevance')
    const paginationStep = 9
    const [paginationRes, setPagination] = useState(9)
    console.log(chooseCateg)
    useMemo(()=>{
        if(searchQuery !== ''){
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+
        searchQuery+
        '+subject:'+
        chooseCateg+
        '+orderBy:'+
        chooseSort+
        '&key=AIzaSyCbchQ4B-QN4WzoKXCZEGCOSNtvN3HDY78&maxResults=40')
        .then(res => setBooks(res.data.items))
        .catch(err => console.log(err))
        }setBooks([])
        setPagination(paginationStep)
      }, [searchQuery, chooseCateg, chooseSort])
    
    const getSearchQuery = (searchValue)=>{
        setSearch(searchValue)
        setOpenBook(false)
    }
    const forOpenBook =(book)=>{
        setOpenBook(prevCount => !prevCount)
        setToMoreInf(book.volumeInfo)
    }
    const closeBook = () =>{
        setOpenBook(false)
    }
    const getCategory = (category)=>{
        if(category === 'all'){
            setChooseCateg('')
        }else setChooseCateg(category)
        setOpenBook(false)
    } 
    const getSort = (sort)=>{
        setChooseSort(sort)
    }
    const getPagination = (paginationStep) =>{
        if(typeof(books) !== 'undefined'){
            if(paginationRes + paginationStep <= books.length){
                setPagination(paginationRes + paginationStep)
            }else setPagination(books.length)
        }
    }
    const pagbooks = ()=>{
        return [...books.splice(0, paginationRes)]
    }

    return(
        <div style={{width:'100%'}}>
            <SearchItem searchFunction = {getSearchQuery} getCategory={getCategory} getSort={getSort}/>
            <p className="resStyles">{books.length}results</p>
            {openBook === false
                ? <>{(searchQuery !== '' && typeof(books) !== 'undefined')?
                    (
                    <BookList 
                    books={pagbooks()} 
                    forOpenBook={forOpenBook}
                    />
                    ):(
                    <h1 className="h1Style">
                        THE BOOK WAS NOT FOUND
                    </h1>)}
                    </>
                : <BookMoreInf book={toMoreInf} closeBook={closeBook}/>
            } 
            {openBook === false && typeof(books) !== 'undefined' 
                ?<>{books.length !== 0 ?(
                    <div className="loadBtn">
                        <button 
                        onClick={()=>getPagination(paginationStep)} 
                        className="loadmoreBtn"
                        >
                            Load More
                        </button>
                    </div>
                    ):(<></>)}</>
                :<></>
            }
        </div>
    )
}
export default MainPage;