import React, { useEffect, useState } from "react";

import "./App.css";
import Searchweather from "./components/SearchWeather";

function App() {
  let componentMounted = true;
  const [search, setSearch] = useState("sleman");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7b48e1b2966c045e082368489c083e69&units=metric`
      );
      if (componentMounted) {
        setData(await response.json());
      }
      return () => {
        componentMounted = false;
      };
    };
    fetchWeather();
  }, [search]);
  
  return (
    <div>
      <Searchweather
        search={search}
        setSearch={setSearch}
        data={data}
        setData={setData}
        input={input}
        setInput={setInput}
      />
    </div>
  );
}

export default App;
