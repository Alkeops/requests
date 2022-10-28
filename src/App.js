import { useState } from "react";
import { Modal, Pokemons, Pokemon, ErrorPage } from "components";

import "./App.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  NavLink,
  Outlet,
} from "react-router-dom";

const getPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  return response;
};
const getPokemon = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  return response;
};

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokemons />,
    errorElement: <ErrorPage />,
    loader: getPokemons,
    id: "pokemons",
  },
  {
    path: "/pokemon/:pokemonName",
    element: <Pokemon />,
    loader: ({ params: { pokemonName } }) => getPokemon(pokemonName),
    id: "pokemon",
  },
]); */
//Definir las rutas
//Tener links para esas rutas
//Leer parametros dinamicos
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <div>
          <header style={{ display: "grid", gap: 10 }}>
            <NavLink to="/" style={({isActive}) => ({ background: isActive ? "blue": "black" })} end>
              Home
            </NavLink>
            <NavLink to="pokemon" style={({isActive}) => ({ background: isActive ?"red" : "black" })}>
              Pokemons
            </NavLink>
          </header>
          <Outlet />
        </div>
      }
    >
      <Route
        path="/pokemon"
        element={<Pokemons />}
        errorElement={<ErrorPage />}
        loader={getPokemons}
        id="pokemons"
      />
      <Route
        path="/pokemon/:pokemonName"
        element={<Pokemon />}
        loader={({ params: { pokemonName } }) => getPokemon(pokemonName)}
        id="pokemon"
      />
    </Route>
  )
);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
