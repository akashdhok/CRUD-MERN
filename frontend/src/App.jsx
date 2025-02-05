import React from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Update from './pages/Update'
import Search from "./pages/Search"
import Display from "./pages/Display"
import Insert from "./pages/Insert"
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path='home' element = {<Home/>}/>
      <Route path='insert' element = {<Insert/>}/>
      <Route path='search' element = {<Search/>}/>
      <Route path='Update' element = {<Update/>}/>
      <Route path='display' element = {<Display/>}/>


      </Route>
    </Routes>
    </>
  )
}

export default App