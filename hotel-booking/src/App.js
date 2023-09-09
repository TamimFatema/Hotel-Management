import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from './components/Login/loginsignup';

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Auth></Auth>
    </div>
  );
}

export default App;