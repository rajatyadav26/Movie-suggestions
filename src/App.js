import React, { useState } from "react";
import "./styles.css";

const movieData = {
  Sciencefiction: [
    {
      name: "Interstellar",
      rating: "9/10",
      plot:
        "In the future, where Earth is becoming uninhabitable, farmer and ex-NASA pilot Cooper is asked to pilot a spacecraft along with a team of researchers to find a new planet for humans."
    },
    {
      name: "Gravity",
      rating: "7.5/10",
      plot:
        "On an outer space mission, Dr Ryan Stone, an engineer, and Matt Kowalski, an astronaut, are hit by high-speed space debris. As the situation gets dire, Stone, the lone survivor, rises to the occasion"
    },
    {
      name: "Avengers End Game",
      rating: "8.5/10",
      plot:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance"
    },
    {
      name: "The Martian",
      rating: "8.5/10",
      plot:
        "When astronauts blast off from the planet Mars, they leave behind Mark Watney (Matt Damon), presumed dead after a fierce storm. With only a meager amount of supplies, the stranded visitor must utilize his wits and spirit to find a way to survive on the hostile planet."
    }
  ],

  Horror: [
    {
      name: "Autopsy of Jane Doe",
      rating: "7/10",
      plot:
        "When father and son coroners investigate the death of a beautiful `Jane Doe', they find increasingly bizarre clues."
    },
    {
      name: "Annabele",
      rating: "7/10",
      plot:
        "John and Mia Form are attacked by a Satan worshipping couple, who uses their doll as a conduit to make their life miserable. This unleashes a string of paranormal events in the Forms' residence."
    },
    {
      name: "Tumbbad",
      rating: "8/10",
      plot:
        "When a family builds a shrine for Hastar, a monster who is never to be worshipped, and attempts to get their hands on his cursed wealth, they face catastrophic consequences."
    },
    {
      name: "Conjuring",
      rating: "9/10",
      plot:
        "The Perron family moves into a farmhouse where they experience paranormal phenomena. They consult demonologists, Ed and Lorraine Warren, to help them get rid of the evil entity haunting them"
    }
  ],

  Crime: [
    {
      name: "The Irish man",
      rating: "8.5/10",
      plot:
        "In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime."
    },
    {
      name: "The Godfather",
      rating: "9/10",
      plot:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger."
    },
    {
      name: "Article 15",
      rating: "9/10",
      plot:
        "An upright city-bred police officer launches an attack against the caste system after caste-based discrimination and other crimes are dismissed in rural India."
    },
    {
      name: "Talvar",
      rating: "8/10",
      plot:
        "A hardened investigator deals with conflicting perspectives involving a brutal double murder. The case gets complicated when the parents of the murdered girl emerge as the prime suspects"
    }
  ]
};

var moviegenre = Object.keys(movieData);

export default function App() {
  const [movieGenreChoosen, setmovieGenre] = useState("Sciencefiction");

  function genreClickHandler(genre) {
    setmovieGenre(genre);
  }

  return (
    <div className="App">
      <h1 className="header">
        {" "}
        <span id={"emoji"}>📺</span>Movie Recommendation
        <span id={"emoji"}>🎥</span>{" "}
      </h1>
      <p>Here are some my favorite movies. Select a genre to get started </p>

      <div>
        {Object.keys(movieData).map((genre) => (
          <button
            className={"genre-button"}
            key={genre}
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <hr />
      <div className={"movie"} style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieData[movieGenreChoosen].map((movie) => (
            <li className={"movie-list"} key={movie.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
              <div style={{ fontSize: "smaller" }}> {movie.plot} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
