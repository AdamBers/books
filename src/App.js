import React from 'react'
import Content from './components/content/Content';
import Header from './components/header/Header';

// import axios from 'axios';
// axios.get('https://www.googleapis.com/books/v1/volumes?q=android&maxResults=30&startIndex=0&key=AIzaSyCW9MjIlFfhln6OMvET0lG-48qUHD4uxF0')
//   .then(res => { console.log(res.data) })
//   .catch(err => { console.log(err) })


function App() {
  return (
    <div className="App shadow-lg p-3 mb-5 bg-white rounded">
      <Header />
      <Content />
    </div>
  );
}

export default App;
