import React from "react";
import PlantCard from "./PlantCard";

function PlantList({filteredPlants}) {

const mappedPlants = filteredPlants.map((plant) => {
  return (
  <PlantCard 
    key={plant.id}
    plant={plant}
    />
  )
})   
  return(
    <ul className="cards">
    {mappedPlants}
    </ul>
      )
}

export default PlantList;
