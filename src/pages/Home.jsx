import { getAllPlants } from '../data/usePlants'
import PlantCard from '../components/PlantCard'

function Home() {
  const plants = getAllPlants()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-700 mb-2">Plant Dictionary</h1>
        <p className="text-gray-500 mb-8">Browse our collection of plants</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
