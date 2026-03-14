import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavouritesProvider } from './context/FavouritesContext'
import Home from './pages/Home'
import PlantDetail from './pages/PlantDetail'
import Favourites from './pages/Favourites'

function App() {
  return (
    <FavouritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plant/:id" element={<PlantDetail />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </FavouritesProvider>
  )
}

export default App
