import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import BookItem from './components/BookItem';
import Content from './components/content/Content';
import Header from './components/header/Header';
import InputContext from './context';


function App() {
  const [userInput, setUserInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectValue, setSelectValue] = useState('')
  const [sortingBy, setSortingBy] = useState("relevance")
  return (
    <InputContext.Provider value={{
      userInput, setUserInput, currentPage, setCurrentPage,
      selectValue, setSelectValue, sortingBy, setSortingBy
    }}>

      <div className="App shadow-lg p-3 mb-5 bg-white rounded">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/item' element={<BookItem book={book} />} />
          </Routes>
        </Router>

      </div >

    </InputContext.Provider>
  )
}

export default App;


