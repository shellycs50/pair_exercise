import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import CharactersPage from './components/CharactersPage/CharactersPage'
import Nav from './components/Nav/Nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Nav />
    <div className='marginthing'></div>
    <Routes>
    {/* route takes URL and components as props */}
      <Route path="/" element={<HomePage />}/>
      <Route path="/characters" element={<CharactersPage />}/>
      <Route path="/planets" element={<PlanetsPage />}/>
      <Route path="/starships" element={<StarshipsPage />}/>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
