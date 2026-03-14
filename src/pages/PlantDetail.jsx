import { useParams } from 'react-router-dom'

function PlantDetail() {
  const { id } = useParams()
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700">Plant Detail</h1>
      <p className="mt-2 text-gray-600">Showing details for plant ID: {id}</p>
    </div>
  )
}

export default PlantDetail
