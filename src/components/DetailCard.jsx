
import { useParams } from 'react-router';
import hufflepuff from '../images/hufflepuff.png'
import slytherin from '../images/slytherin.png'
import gryffindor from '../images/gryffindor.png'
import ravenclaw from '../images/ravenclaw.png'

import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


import '../styles/detailCard.scss';


function DetailCard({filteredList}) {
  const params = useParams();
  const name = params.name;
  
  const character = filteredList.find(item => item.name === name);
  
  
  
  return (
    <div className="detailCard">
      <img src={character.image} alt="{character.name}" />
      <div className="detailCard_Text">

        
          <img src={character.house === "Hufflepuff" ? hufflepuff : 
          character.house === "Ravenclaw" ? ravenclaw :
          character.house === "Slytherin" ? slytherin :
          character.house === "Gryffindor" ? gryffindor :
          null
        } alt={character.house} />

          <FontAwesomeIcon icon={faArrowLeft} />
        

        <h2>{character.name}</h2>
        <p><strong>Gender: </strong>{character.gender}</p>
        <p><strong>Specie:</strong> {character.species}</p>
        <p><strong>Alive or Dead:</strong> {character.alive === true ? 'Alive' : 'Dead'}</p>
        
        {character.alternate_names.length > 0 && (
        <>
          <p><strong>Also known as: </strong></p>
          
          <ul>
            {character.alternate_names.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
        </>
)}

      </div>
    </div>
  
)}
export default DetailCard