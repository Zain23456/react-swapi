import { Routes, Route } from 'react-router-dom'
import './App.css'
import Starships from './pages/Starships/Starships'
import StarshipPage from './pages/StarshipsPage/StarshipPage'

function App() {
  return (
    <>
    <header id='starwars-header'>STAR WARS STARSHIPS</header>
    <Routes>
      <Route path='/' element={<Starships />} />
      <Route path='/starship' element={<StarshipPage />} />
    </Routes>
    </>
  );
}

export default App;
