import React, { useState } from "react";

const PlantCard = ({ plant, onStockUpdate, onDeletePlant, onPriceChange }) => {
  const { id, name, image, price, inStock } = plant;

  const [prices, setPrices] = useState(price || 0);

  const checkIfInStock = () => {
    onStockUpdate(id);
  };

  const handleChangePrice = () => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ price: prices }),
    };

    fetch(`http://localhost:6001/plants/${id}`, configObj)
      .then((resp) => resp.json())
      .then(() => {
        setPrices(prices);
      });
  };

  const handleInputValue = (e) => {
    setPrices(e.target.value);
  };

  console.log(prices);

  const handleDeleteClick = () => {
    const config = {
      method: "DELETE",
    };

    fetch(`http://localhost:6001/plants/${id}`, config)
      .then((resp) => resp.json())
      .then(() => {
        onDeletePlant(plant);
      });
  };

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <form onSubmit={handleChangePrice}>
        <input type="text" name="price" onChange={handleInputValue}></input>
        <input type="submit" value="Change price"></input>
      </form>
      {!inStock ? (
        <button className="primary" onClick={checkIfInStock}>
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>DELETE</button>
    </li>
  );
};

export default PlantCard;
