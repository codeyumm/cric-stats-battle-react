import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from '../components/nav/navBar'
import SearchBar from '../components/searchBar/searchBar'
import Home from '../components/home/home'
import About from '../components/about/about'

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <main className='home-container'>
          <h2>Find player to add in your team</h2>
          <SearchBar />
        </main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
