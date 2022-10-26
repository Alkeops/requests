import { useEffect } from "react";
import "./modal.scss";

import {Products, RickMorty, DragonBall, Pokemons} from "components";

export const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <button className="modal__close" onClick={closeModal}>
        X
      </button>
      <Pokemons />
    </div>
  );
};
