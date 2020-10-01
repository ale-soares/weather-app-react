import React, { useState } from "react";
import "./styles.css";
import Card from "./components/Card";
import Loader from "./components/Loader";

export default function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [icon, setIcon] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ce7201d8348f6361c51c87e0ea6496d4`
      );
      const data = await response.json();
      setTemperature(data.main.temp);
      setIcon(data.weather[0].icon);
      setShowCard(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Weather app</h1>
      <div className="flexContainer">
        <input
          type="text"
          className="input"
          placeholder="City name here"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="button" className="btn" onClick={getWeather}>
          Submit
        </button>
      </div>
      {loading && <Loader />}
      {showCard && <Card icon={icon} temperature={temperature} />}
    </div>
  );
}
