import { useParams, Link } from 'react-router-dom'
import { getPlantById } from '../data/usePlants'

function PlantDetail() {
  const { id } = useParams()
  const plant = getPlantById(id)

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
        <h1 className="text-4xl font-bold text-gray-900 mb-1">{plant.commonName}</h1>
        <p className="text-lg text-gray-500 italic mb-4">{plant.latinName}</p>
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
