import React from "react";
import useFoods from "../../hooks/useFoods";
import "./menu.css";

export default function Menu() {
  const { data, error, isLoading } = useFoods("http://localhost:3000/foods");

  return (
    <div className="menu">
      {isLoading && <strong>Loading...</strong>}
      {error && <strong>No food menu have found!</strong>}
      {data &&
        data.map((food, i) => (
          <div className="food" key={i}>
            <img src={food.image} alt="food-image" />
            <h3 className="title">{food.name}</h3>
            <h5 className="price">
              price: <strong>${food.price}</strong>
            </h5>
          </div>
        ))}
    </div>
  );
}
