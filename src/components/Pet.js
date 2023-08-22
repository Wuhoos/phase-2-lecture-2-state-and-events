import { useState } from "react";


function Pet({pet}){

    const [favorite, setFavorite] = useState(false)
    // const [counter, setCounter] = useState(0)

    // function handleNumber(){
    //     setCounter(counter+ 1)
    // }

    function handleFavorite() {
        setFavorite(!favorite)
    }


    const buttonClass = favorite ? "favorite-button active" : "favorite-button"
    const star = favorite ? '★' : '☆'

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            <button className={buttonClass} onClick={(handleFavorite)}>{star}</button>
            <h4>{pet.name}</h4>
            {/* <h1 onClick={handleNumber}>{counter}</h1> */}
        </li>
    )
}

export default Pet;