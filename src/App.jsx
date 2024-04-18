import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from '../components/nav/navBar'
import SearchBar from '../components/searchBar/searchBar'
import Home from '../components/home/home'
import About from '../components/about/about'
import Stats from "../components/stats/stats"

function App() {
  return (
    // routes for pages
    <BrowserRouter>
      <div>
        <NavBar />
        <main className='home-container'>
          <h2>Find player</h2>
          <SearchBar />
        </main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App
