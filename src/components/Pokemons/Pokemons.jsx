import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

export const Pokemons = () => {
  const pokemons = useRouteLoaderData("pokemons");
  const navigate = useNavigate();
  if(!pokemons) return null;
  return (
    <div className="modal__content">
      {pokemons.results.map((pokemon, i) => (
        <div key={i} onClick={() => navigate(`/pokemon/${pokemon.name}`)}>
          <div>{pokemon.name}</div>
        </div>
      ))}
    </div>
  );
};

{/* <Outlet> */}