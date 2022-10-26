import { useState } from "react"
import { useEffect } from "react"

export const RickMorty = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => setCharacters(data.results))
    }, [])

    return <div className="modal__content">
        {
        characters.map(({id, name, status, species}) => (
            <div key={id} >
                <div>{name}</div>
                <div>{status}</div>
                <div>{species}</div>
            </div>
        )

    )
    
    }
    </div>
}