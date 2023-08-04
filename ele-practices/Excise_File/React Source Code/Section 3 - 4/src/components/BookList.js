import React, { Component } from 'react'
import Book from './Book'

export class BookList extends Component {

     state = {
          books: [
               { id:1, bookName:"Think and Grow Rich22" , writer:"George" },
               { id:2, bookName:"Rich Dad and Poor Dad" , writer:"Dan Brown"  },
               { id:3, bookName:"The Alchemist" , writer:"Paulo" },
          ],
          showBooks: true
     } 
 

deleteBookState = index => {
     const books = this.state.books;
     books.splice(index,1);
     this.setState({
          books: books
     });
}



changeInput = (event,index) => {
    const book = {
         ...this.state.books[index]
    }
    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book;

    this.setState({books:books}); 
}

toggleBooks = () => {
     this.setState({ showBooks: !this.state.showBooks });
}


     render() {

          const style = {
               border: "1px solid red",
               borderRadius:"5px",
               backgroundColor: "Red",
               color:"white"
          }

          const booksState = this.state.books;
          

     let books = null;
     
     if(this.state.showBooks){

         books = booksState.map((book,index) => {
               return (
                    <Book 
                    bookName={book.bookName}
                    writer={book.writer}  
                    delete = { () => this.deleteBookState(index)}
                    key={book.id}
                    inputName = {(event) => this.changeInput(event,index) }
                    />
               )
          }) 
     } // end if condition 
 

          return (
        <div className="App">
       <h1 style={style} >Book List</h1> 
<button onClick={this.toggleBooks}>Toggle Books</button>
          {books}

    </div>
        )
     }
}

export default BookList
