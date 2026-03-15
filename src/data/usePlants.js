import plants from './plants.json'

export function getAllPlants() {
  return plants
}

export function getPlantById(id) {
  return plants.find((plant) => plant.id === id) || null
}
