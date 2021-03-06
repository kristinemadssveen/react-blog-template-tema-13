import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import './App.css'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import Contact from './components/Contact'
import Header from './components/Header'
import Login from './components/Login'
import Edit from './components/Edit'
import firebase from './components/firebase'


const App = () => {

  const [signedIn, setSignedIn] = useState(false)

  useEffect( () => {
    firebase.auth().onAuthStateChanged(
      user => {
        if(user){
          setSignedIn(true)
        }else{
          setSignedIn(false)
        }
      }
    )
  })

  return(
    <div>

      <Header signedIn={signedIn} />

       
      <Router basepath={process.env.PUBLIC_URL}>
        <Projects default signedIn={signedIn} path='/projects' />
        <Contact path='/contact' />
        <ProjectDetails path='/projects/:id' />
        <Login signedIn={signedIn} setSignedIn={setSignedIn} path='/login' />
        <Edit path='/edit/:id' />
      </Router>
        

    </div>
  )
}

export default App
