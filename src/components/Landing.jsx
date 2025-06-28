import Form from './Form.jsx';
import CardsList from './CardsList.jsx';

function Landing({filteredList, searchName, setSearchName, houses, filterHouse, setFilterHouse}) {
  return (
    <>
    <Form searchName={searchName} setSearchName={setSearchName} houses={houses} filterHouse={filterHouse} setFilterHouse={setFilterHouse}/>
    <CardsList filteredList={filteredList}/>
    </>
  )
}

export default Landing