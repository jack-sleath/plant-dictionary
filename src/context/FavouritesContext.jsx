import { createContext, useContext, useState, useCallback } from 'react'

const STORAGE_KEY = 'plant-favourites'

function loadFavourites() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const FavouritesContext = createContext(null)

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(loadFavourites)

  const isFavourite = useCallback((id) => favourites.includes(id), [favourites])

  const toggleFavourite = useCallback((id) => {
    setFavourites((prev) => {
      const next = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  return (
    <FavouritesContext.Provider value={{ favourites, isFavourite, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  return useContext(FavouritesContext)
}
