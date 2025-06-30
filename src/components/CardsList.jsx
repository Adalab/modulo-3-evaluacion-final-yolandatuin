import Card from './Card.jsx'
function CardsList({filteredList}) {
  return (
<>

    {filteredList.length > 0 ? (
      <main className="main">
      <ul className="cards-list">
        {filteredList.map((character, index) =>        
        <Card key={index} character={character}/>
      )}
      </ul>
    </main>
    ) : (
      <p className="detail__nobody">Ningún personaje encontrado</p>
    )}
    
  </>)
}

export default CardsList