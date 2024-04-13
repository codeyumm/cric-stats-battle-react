import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import NavBar from '../components/nav/navBar'
import SearchBar from '../components/searchBar/searchBar'

function App() {
  

  return (
    <>
      <NavBar/>

      <main className='home-container'>

          <h2>Find player to add in your team</h2>
          <SearchBar/>

      </main>
      
    </>
  )
}

export default App
