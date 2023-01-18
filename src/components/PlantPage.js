import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const PlantPage = () => {
  const [plants, setPlants] = useState([]);
  const [searchField, setSearchField] = useState("");

  const handleOutOfStock = (id) => {
    const updatedPlants = plants.map((plant) => {
      return plant.id === id ? { ...plant, inStock: true } : plant;
    });

    setPlants(updatedPlants);
  };

  const handleDelete = (id) => {
    const newData = plants.filter((plant) => {
      return plant.id !== id;
    });

    setPlants(newData);
  };

  const handleChangePrice = (id) => {
    const newPrice = plants.map((plant) => {
      return plant.id === id;
    });

    setPlants(newPrice);
  };

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((plants) => setPlants(plants));
  }, []);

  const onAddPlant = (newPlant) => {
    setPlants((plants) => [...plants, newPlant]);
  };

  const searchValue = (e) => {
    setSearchField(e.target.value.toLowerCase());
  };

  const searchResults = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchField);
  });

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearchFilter={searchValue} />
      <PlantList
        plants={searchResults}
        onStockUpdate={handleOutOfStock}
        onDeletePlant={handleDelete}
        onPriceChange={handleChangePrice}
      />
    </main>
  );
};

export default PlantPage;
