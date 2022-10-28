import { useEffect, useState } from "react";
import { useParams, useNavigate, useRouteLoaderData } from "react-router-dom";

export const Pokemon = () => {
  const pokemon = useRouteLoaderData("pokemon");
  const navigate = useNavigate();

  return ( <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 100,
      }}
    >
      <span style={{ fontSize: 50 }}>{pokemon.name}</span>
      <img src={pokemon?.sprites?.other?.["official-artwork"]?.front_default} />
      <button style={{ fontSize: 20 }} onClick={() => navigate(-1)}>
        Regresar
      </button>
    </div>
  );
};
