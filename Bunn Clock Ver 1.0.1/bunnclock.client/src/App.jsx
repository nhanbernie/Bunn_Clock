import { useState } from 'react'
import './App.css'
import SignIn from './modules/signIn/page/SignIn'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './modules/signUp/page/SignUp';
import ForgotPassword from './modules/forgotPassword/page/ForgotPassword';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
