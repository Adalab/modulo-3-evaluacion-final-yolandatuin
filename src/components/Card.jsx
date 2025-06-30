import { Link } from "react-router";
import placeholder from '../images/placeholder.jpg'


function Card({index, character}) {
  return (
    <>
    <Link to={"/detail/" + character.name}>
    <li className="character-card" key={index}>
        <img src={character.image === "" ? placeholder : character.image} alt={"foto de " + character.title} />
        <h2>{character.name}</h2>
        <p className="character-species">{character.species}</p>  
              
    </li>
    </Link>
    </>
  )
}

export default Card