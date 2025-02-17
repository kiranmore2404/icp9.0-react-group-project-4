import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Footer from "./components/Footer"; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App