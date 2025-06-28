import { Link } from "react-router";


function Card({index, character}) {
  return (
    <>
    <Link to={"/detail/" + character.name}>
    <li className="character-card" key={index}>
        <img src={character.image === "" ? 'https://placehold.co/200x250?text=HarryPotter' : character.image} alt={"foto de " + character.title} />
        <h2>{character.name}</h2>
        <p className="character-species">{character.species}</p>  
              
    </li>
    </Link>
    </>
  )
}

export default Card