import { useState } from "react";
import { useEffect } from "react";

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    /* fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((data) => {
        let promises = [];
        data.results.forEach((pokemon) => {
          promises.push(fetch(pokemon.url).then((res) => res.json()));
        });
        Promise.all(promises).then((data) => setPokemons(data));
      }); */
      
    const getPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const pokemons = await response.json();

      let resultado = [];

      for (const _pokemon of pokemons.results) {
        const res = await fetch(_pokemon.url);
        const pokemon = await res.json();
        resultado = [...resultado, pokemon];
      }

      setPokemons(resultado);
    };
    getPokemons();
  }, []);

  return (
    <div className="modal__content">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <div>{pokemon.name}</div>
          <div>{pokemon.height}</div>
          <div>{pokemon.base_experience}</div>
        </div>
      ))}
    </div>
  );
};
