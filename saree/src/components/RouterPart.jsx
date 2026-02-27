import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Brand from './Brand'
import Style from './Style'
import Design from './Design'
import Ethinic from './Ethinic'
import Type from './Type'
import Sarees from './Sarees'
import View from './View'
import Update from './Update'
import Input from './Input'
import Contact from './Contact'
import ErrorPage from './ErrorPage'

function RouterPart  ()  {
  return (
    <div>
        
        <Routes>
            <Route  path='/home' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>} ></Route>
            <Route  path="/brand" element={<Brand/>}></Route>
            <Route path='/style' element={<Style/>}></Route>
            <Route path='/design' element={<Design/>}></Route>
            <Route path='/Ethinic' element={<Ethinic/>}></Route>
            <Route path='/method' element={<Signup/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/errorPage" element={<ErrorPage/>}></Route>
            <Route  path='/sarees' element={<Sarees/>}></Route>
            <Route path='/update/:id' element={<Update/>}></Route>
            <Route path='/sucess' element={<Signup/>}></Route>
            <Route path="/type" element={<Type/>}></Route>
            <Route path="/view/:id" element={<View/>}></Route>
            <Route index path="/input" element={<Input/>}></Route>
            <Route path="/about" element={<Signup/>}></Route>
        </Routes>
    </div>
  )
}

export default RouterPart