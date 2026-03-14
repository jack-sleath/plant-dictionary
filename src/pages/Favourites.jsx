import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import { getAllPlants } from '../data/usePlants'
import PlantCard from '../components/PlantCard'

function Favourites() {
  const { favourites } = useFavourites()
  const allPlants = getAllPlants()
  const favouritedPlants = allPlants.filter((plant) => favourites.includes(plant.id))

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-700 mb-2">Favourites</h1>
        <p className="text-gray-500 mb-8">Your bookmarked plants</p>
        {favouritedPlants.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">No favourites yet — start browsing!</p>
            <Link to="/" className="text-green-700 font-semibold hover:underline">
              Browse plants
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favouritedPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Favourites
