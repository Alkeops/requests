import { useState } from "react";
import { useEffect } from "react";

export const DragonBall = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://dragon-ball-super-api.herokuapp.com/api/characters?limit=20")
      .then((res) => res.json())
      .then((data) => setCharacters(data[0]));
  }, []);

  return (
    <div className="modal__content">
      {characters.map((character) => (
        <div key={character.id} style={{ position: "relative" }}>
          <img src={character.imageUrl} />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              background: "black",
              right: 0,
              left: 0,
              padding: "2px 10px"
            }}
          >
            <div>{character.name}</div>
            <div>{character.role}</div>
            <div>{character.universe}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
