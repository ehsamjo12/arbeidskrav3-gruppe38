import { Component, useState } from 'react'
import Home from './components/Home'
import "./style/style.css";
import { Route, Router, Routes } from 'react-router-dom';
import MemberPage from "./components/MemberPage";



function App() {
  return(
    <>
     <Routes>
      <Route path="/"element={<Home />} />
      <Route path="medlem/:id" element={<MemberPage />} />
     </Routes>
   </>
  )
}

export default App
