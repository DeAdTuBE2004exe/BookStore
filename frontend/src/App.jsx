import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';         // This imports Home (the component should be named Home)
import CreateBooks from './pages/Create_books.jsx';
import ShowBook from './pages/Show_book.jsx';
import EditBook from './pages/Edit_book.jsx';
import DeleteBook from './pages/Delete_book.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />               {/* Use <Home /> not <home /> */}
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
}

export default App;
