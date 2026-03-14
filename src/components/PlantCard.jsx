import { Link } from 'react-router-dom'

function PlantCard({ plant }) {
  return (
    <Link
      to={`/plant/${plant.id}`}
      className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white border border-gray-200"
    >
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
  )
}

export default PlantCard
