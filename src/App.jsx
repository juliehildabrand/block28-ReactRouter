import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Blue from './components/Blue'
import Yellow from './components/Yellow'
import Green from './components/Green'

function App() {

  return (
    <>
    <div id="container">
      <h1>Country Flag Components and Their Meanings</h1>
      <div id="brasil">
        <h2>Brasil</h2>
      </div>
      <div id="navbar">
        <Link to="/">Flag</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/yellow">Yellow</Link>
        <Link to="/green">Green</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blue" element={<Blue/>}/>
          <Route path="/yellow" element={<Yellow/>}/>
          <Route path="/green" element={<Green/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
