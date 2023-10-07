import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="texts">
        <h1>
          Welcome to <br /> Mr.CHEF <br /> Restaurant
        </h1>
        <p>Enjoy persian food with highest quality!</p>
        <Link to="/Menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}
