import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'

function PlantCard({ plant }) {
  const { isFavourite, toggleFavourite } = useFavourites()
  const favourited = isFavourite(plant.id)

  function handleFavouriteClick(e) {
    e.preventDefault()
    toggleFavourite(plant.id)
  }

  return (
    <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white border border-gray-200">
      <Link to={`/plant/${plant.id}`} className="block">
        <img
          src={plant.imageUrl}
          alt={plant.commonName}
          width="400"
          height="300"
          loading="lazy"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900">{plant.commonName}</h2>
          <p className="text-sm text-gray-500 italic">{plant.latinName}</p>
        </div>
      </Link>
      <button
        onClick={handleFavouriteClick}
        aria-label={favourited ? `Remove ${plant.commonName} from favourites` : `Add ${plant.commonName} to favourites`}
        aria-pressed={favourited}
        className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow text-xl leading-none"
      >
        {favourited ? '★' : '☆'}
      </button>
    </div>
  )
}

export default PlantCard
