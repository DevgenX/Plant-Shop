import React from "react";
import PlantCard from "./PlantCard";

const PlantList = ({ plants, onStockUpdate, onDeletePlant, onPriceChange }) => {
  const plantsData = plants.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        plant={plant}
        onStockUpdate={onStockUpdate}
        onDeletePlant={onDeletePlant}
        onPriceChange={onPriceChange}
      />
    );
  });

  return <ul className="cards">{plantsData}</ul>;
};

export default PlantList;
