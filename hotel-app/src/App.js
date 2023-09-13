import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from './pages/Error';
import ContactForm from './pages/ContactUs';
import BookNow from './pages/BookNow';
import SingleRooms from './pages/SingleRooms'
import './App.css'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:slug" element={<SingleRooms />} />
          <Route path="error" element={<Error />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="booknow" element={<BookNow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
