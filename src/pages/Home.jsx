import { useState, useMemo } from 'react'
import { getAllPlants } from '../data/usePlants'
import PlantCard from '../components/PlantCard'

// Filter logic: OR — a plant is shown if it matches ANY of the active use filters
function Home() {
  const plants = getAllPlants()
  const [search, setSearch] = useState('')
  const [activeFilters, setActiveFilters] = useState([])

  // Derive unique use categories from all plant entries
  const allUses = useMemo(() => {
    const uses = new Set()
    plants.forEach((plant) => plant.uses.forEach((use) => uses.add(use)))
    return Array.from(uses).sort()
  }, [plants])

  const filteredPlants = useMemo(() => {
    const term = search.toLowerCase()
    return plants.filter((plant) => {
      const matchesSearch =
        term === '' ||
        plant.commonName.toLowerCase().includes(term) ||
        plant.latinName.toLowerCase().includes(term)

      // OR logic: show plant if it has at least one of the active filter uses
      const matchesFilters =
        activeFilters.length === 0 ||
        activeFilters.some((filter) => plant.uses.includes(filter))

      return matchesSearch && matchesFilters
    })
  }, [plants, search, activeFilters])

  function toggleFilter(use) {
    setActiveFilters((prev) =>
      prev.includes(use) ? prev.filter((f) => f !== use) : [...prev, use]
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-700 mb-2">Browse Plants</h1>
      <p className="text-gray-500 mb-6">
        Discover {plants.length} plants — search by name or filter by use
      </p>

      <label htmlFor="plant-search" className="sr-only">Search plants</label>
      <input
        id="plant-search"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by common or latin name..."
        aria-label="Search plants"
        className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <div
        className="flex flex-wrap gap-2 mb-6"
        role="group"
        aria-label="Filter by use category"
      >
        {allUses.map((use) => (
          <button
            key={use}
            onClick={() => toggleFilter(use)}
            aria-pressed={activeFilters.includes(use)}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 ${
              activeFilters.includes(use)
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-gray-600 border-gray-300 hover:border-green-500'
            }`}
          >
            {use}
          </button>
        ))}
      </div>

      {filteredPlants.length === 0 ? (
        <p className="text-gray-500 text-center py-12" role="status">No results found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
