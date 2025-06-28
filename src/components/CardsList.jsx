import Card from './Card.jsx'
function CardsList({filteredList}) {
  return (
    <main className="main">
      <ul className="cards-list">
        {filteredList.map((character, index) =>        
        <Card key={index} character={character}/>
      )}
      </ul>
    </main>
  )
}

export default CardsList