import React, {useState} from "react";

function PlantCard({plant}) {
  
 let [inStock, setInStock] = useState(true)

  function handleStock(){
    setInStock((prev) => !prev)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock === true ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
