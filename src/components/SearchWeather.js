import React from "react";

const SearchWeather = ({
  data,
  setData,
  input,
  setInput,
  search,
  setSearch,
}) => {
  let emoji = null;
  if (typeof data.main != "undefined") {
    if (data.weather[0].main ==="Clouds") {
      emoji = "fa-cloud";
    } else if (data.weather[0].main === "Thunderstrom") {
      emoji = "fa-bolt";
    } else if (data.weather[0].main ==="Drivvle") {
      emoji = "fa-cloud-rain";
    } else if (data.weather[0].main ==="Rain") {
      emoji = "fa-could-shower-heavy";
    } else if (data.weather[0].main ==="Snow") {
      emoji = "fa-snow-flake";
    } else {
      emoji = "fa-smoke";
    }
  } else {
    return <div>...Loading</div>;
  }

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.toLocaleString("default", { weekday: "long" });

const handleSubmit=(event)=>{
    event.preventDefault()
    setSearch(input)

}
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div class="card bg-dark text-white text-center border-0">
              <img
                src="https://source.unsplash.com/600x900/?nature,water"
                class="card-img"
                alt="..."
              ></img>
              <div class="card-img-overlay">
                <form onSubmit={handleSubmit}>
                  <div class="input-group mb-4 w-75 mx-auto">
                    <input
                    onChange={(e)=>setInput(e.target.value)}
                    required  
                      type="search"
                      class="form-control"
                      placeholder="Search City"
                      aria-label="Search City"
                      aria-describedby="basic-addon2"
                    ></input>
                    <button
                      type="submit"
                      class="input-group-text"
                      id="basic-addon2"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>
                <div className="bg-dark bg-opacity-50 py-3">
                  <h2 className="card-title">{data.name}</h2>
                  <p className="card-text lead">
                    {day}, {date} {month} , {year}
                    <br />
                    {/* {time} */}
                  </p>
                  <hr />
                  <i className={`fas ${emoji} fa-4x`}></i>
                  <h1 className="fw-bolder mb-5">{data.main.temp}&deg;C</h1>
                  <p className="lead fw-bolder mb-0">{data.weather[0].main}</p>
                  <p className="lead">
                    {data.main.temp_min}&deg;C | {data.main.temp_max}&deg;C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
