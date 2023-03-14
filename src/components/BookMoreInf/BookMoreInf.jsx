import React from "react";
import '..//../styles/BookMoreInf.css'
const BookMoreInf = ({book, closeBook}) =>{

    const img = book.imageLinks && book.imageLinks.thumbnail
    return(
        <div className="moreInfcontainer">
            <div className="BookImgContainer">
                <div className="BookImg">
                    <img className="imgStyle" src={img} alt="bookImage"/>
                </div>
            </div>
            <div className="descriptionContainer">
                <div className="description">
                    <div style={{height: '80%'}}>
                    <p className="descInf">Title: {book.title}</p>
                    <p className="descInf">Categories: {(book.categories)? book.categories.join(', '): '...'}</p>
                    <p className="descInf">Authors: {(book.authors)? book.authors.join(', '): '...'}</p>
                    <p className="descInf">Published Date: {book.publishedDate}</p>
                    <textarea className="textArea" defaultValue={book.description}></textarea>
                    </div>
                    <div className="bookCloseBtn"><button className="BtnBack" onClick={()=>closeBook()}>BACK</button></div>
                </div>
            </div>
        </div>
    )
}
export default BookMoreInf;