import React from 'react';
import './App.css';
import Book from './components/Book';
import BookList from './components/BookList';
 

// State 
function App() {
  return (
    <div className="App">
    <h1>Easy Learning </h1>
   <BookList />
    </div>
  );
}

export default App;
