import React, { Component } from 'react'
import Book from './Book'

export class BookList extends Component {

     state = {
          books: [
               { bookName:"Think and Grow Rich" , writer:"George" },
               { bookName:"Rich Dad and Poor Dad" , writer:"Dan Brown"  },
               { bookName:"The Alchemist" , writer:"Paulo" },
          ]
     } 

changeBookState = () => {
this.setState({
     books: [
          { bookName:"Think new book" , writer:"George new" },
          { bookName:"Rich Dad new book" , writer:"Dan Brown new"  },
          { bookName:"The Alchemist new book" , writer:"Paulo new" },
     ]
  }); 
}

changeInput = event => {
     this.setState({
          books: [
               { bookName: event.target.value , writer:"George new" },
               { bookName:"Rich Dad new book" , writer:"Dan Brown new"  },
               { bookName:"The Alchemist new book" , writer:"Paulo new" },
          ]
       });
}


     render() {

          const style = {
               border: "1px solid red",
               borderRadius:"5px",
               backgroundColor: "Red",
               color:"white"
          }



          return (
        <div className="App">
       <h1 style={style} >Book List</h1>
          
     <button onClick={this.changeBookState}> Change State </button>
          
     <input type="text" onChange={this.changeInput} />


   <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} /> 
   <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} /> 
   <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} change={this.changeBookState} />  

    </div>
        )
     }
}

export default BookList
