import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [query, setQuery] = useState("");

  // Set state to input value when user is typing
  function handleChange() {
    setQuery(document.getElementById("name").value);

  }
  return (
    <div className="text-center container-fluid content bg">
      <h1>Anime finder</h1>
      <span>by mlweb</span>
      <div className="row text-white">
        <form>
          <div className="form__group field mx-auto mb-5">
            <input type="input" className="form__field" placeholder="Name" name="name" id="name" required onChange={handleChange} autoComplete="off" />
            <label htmlFor="name" className="form__label">
              Search
            </label>
          </div>
          <div className="col-12 text-white">
            <Link
              to={{
                pathname: "/AnimeList/" + query
                // state: { data, query },
              }}
            >
              <button className="btn btn-success list-btn">Search Anime</button>
            </Link>
          </div>
        </form>
      </div>
      <div className="row text-white mt-5">
         Suggestion : One Piece , Naruto , Attack On Titan, Bleach, Dragonball ..
      </div>

      {/* <AnimeCard /> */}
    </div>
  );
};

export default Home;
