import { useState, useCallback } from 'react'

const STORAGE_KEY = 'plant-favourites'

function loadFavourites() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function saveFavourites(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
}

function useFavourites() {
  const [favourites, setFavourites] = useState(loadFavourites)

  const isFavourite = useCallback((id) => favourites.includes(id), [favourites])

  const toggleFavourite = useCallback((id) => {
    setFavourites((prev) => {
      const next = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
      saveFavourites(next)
      return next
    })
  }, [])

  return { favourites, isFavourite, toggleFavourite }
}

export default useFavourites
