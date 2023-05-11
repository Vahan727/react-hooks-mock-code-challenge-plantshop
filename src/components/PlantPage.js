import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  const addPlant = (plant) => {
    setPlants([...plants, plant])
  }
  
  useEffect(() => {
   getPlants()
  }, [])  

  function getPlants() {
    fetch('http://localhost:6001/plants')
    .then((resp) => resp.json())
    .then((data) => setPlants(data))
  }

const [search, SetSearch] = useState('')

function handleSearch(e) {
  SetSearch(e.target.value)
}

const filteredPlants = [...plants].filter((el) => {
  return el.name.toLowerCase().includes(search.toLowerCase()
  )})

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} handleSearch={handleSearch}/>
      <PlantList filteredPlants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
