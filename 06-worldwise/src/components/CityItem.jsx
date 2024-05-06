import React from "react";
import style from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { emoji } = city;

  async function handleDelete(e) {
    e.preventDefault();
    await deleteCity(city.id);
  }
  return (
    <li>
      <Link
        className={`${style.cityItem} ${
          city.id === currentCity.id ? style["cityItem--active"] : ""
        }`}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={style.emoji}>{emoji}</span>
        <h3 className={style.name}>{city.cityName}</h3>
        <time className={style.date}>{formatDate(city.date)}</time>
        <button className={style.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
}
