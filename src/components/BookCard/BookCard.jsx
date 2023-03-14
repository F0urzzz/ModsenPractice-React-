import React from "react";
import '..//../styles/MyBookCard.css'

const BookCard = ({book, forOpenBook, index}) =>{
    const img = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
    const bookName = book.volumeInfo.title
    const getName = (bookName)=>{
        if(bookName.split('').length > 25){
           let newName = bookName.split('').splice(0,25)
           return  newName.join('') + '...'
        }
        return bookName
    }
    return(
        <div className="sizeBook" onClick={()=> forOpenBook(book)}>
            <p data-title={bookName} className="bookTitle">{getName(bookName)}</p>
            <div className="BookPhoto">
              <img className="imgStyle" src={img} alt="bookImage"/>
            </div>
            <p className="bookDescr">Categories: {(book.volumeInfo.categories)? book.volumeInfo.categories.join(', '): '...'}</p>
            <p className="bookDescr">Authors: {(book.volumeInfo.authors)? book.volumeInfo.authors[0]: '...'}</p>
            <p className="bookindex">{index + 1}</p>
        </div>
    )
}

export default BookCard;