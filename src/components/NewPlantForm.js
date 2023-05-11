import React, {useState} from "react";


function NewPlantForm({addPlant}) {

  const formOutline = {
    name: '',
    image: '',
    price: 0
  }

const [newPlant, SetNewPlant] = useState(formOutline)

const handleChange = (e) => {
  console.log(e.target.name, e.target.value)
  SetNewPlant({...newPlant, [e.target.name]: e.target.value
  })
}

const handlePost = (e) => {
  e.preventDefault()
  fetch('http://localhost:6001/plants', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({...formOutline})
  })
  .then((r) => r.json())
  .then((data) => {
    SetNewPlant(formOutline)
    addPlant(data)
  })
}

return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handlePost}>
        <input value={newPlant.name} onChange={(e) => handleChange(e)} type="text" name="name" placeholder="Plant name" />
        <input value={newPlant.image} onChange={(e) => handleChange(e)} type="text" name="image" placeholder="Image URL" />
        <input value={newPlant.price} onChange={(e) => handleChange(e)} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
