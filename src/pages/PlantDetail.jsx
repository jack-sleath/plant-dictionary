import { useParams, Link } from 'react-router-dom'
import { getPlantById } from '../data/usePlants'
import { useFavourites } from '../context/FavouritesContext'

function PlantDetail() {
  const { id } = useParams()
  const plant = getPlantById(id)
  const { isFavourite, toggleFavourite } = useFavourites()

  if (!plant) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Plant not found</h1>
          <p className="text-gray-500 mb-6">No plant with the ID "{id}" exists in our dictionary.</p>
          <Link to="/" className="text-green-700 font-semibold hover:underline">
            &larr; Back to all plants
          </Link>
        </div>
      </div>
    )
  }

  const favourited = isFavourite(plant.id)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link to="/" className="text-green-700 font-semibold hover:underline mb-6 inline-block">
          &larr; Back to all plants
        </Link>
        <img
          src={plant.imageUrl}
          alt={plant.commonName}
          width="400"
          height="300"
          loading="lazy"
          className="w-full h-72 object-cover rounded-xl mb-6"
        />
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-1">{plant.commonName}</h1>
            <p className="text-lg text-gray-500 italic">{plant.latinName}</p>
          </div>
          <button
            onClick={() => toggleFavourite(plant.id)}
            aria-label={favourited ? `Remove ${plant.commonName} from favourites` : `Add ${plant.commonName} to favourites`}
            aria-pressed={favourited}
            className="flex-shrink-0 text-3xl leading-none mt-1"
          >
            {favourited ? '★' : '☆'}
          </button>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">{plant.description}</p>
        {plant.uses && plant.uses.length > 0 ? (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Uses</h2>
            <ul className="flex flex-wrap gap-2">
              {plant.uses.map((use) => (
                <li
                  key={use}
                  className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {use}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-400 italic">No uses listed</p>
        )}
      </div>
    </div>
  )
}

export default PlantDetail
