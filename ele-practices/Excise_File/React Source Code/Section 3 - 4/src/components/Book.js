import React from "react";
import '../stylesheets/Book.css'

const Book = props => {
     return (
          <div className="Book">
               <h1 onClick={props.delete} > Book : {props.bookName} </h1>
               <h2>Writer: {props.writer} </h2>
               <input type="text" onChange={props.inputName} value={props.bookName} />
          </div>
     )
}

export default Book;