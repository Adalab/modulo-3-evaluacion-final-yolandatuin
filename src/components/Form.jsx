
function Form({searchName, setSearchName, houses, filterHouse, setFilterHouse}) {
  
    const handleName = (event) => {
        event.preventDefault();
        setSearchName(event.target.value);
    } 

    const handleHouse = (event) => {
        event.preventDefault();
        setFilterHouse(event.target.value);
        console.log(filterHouse)
    }
  
  return (
    <form className="form">
      <input 
        className="search-character" 
        autoComplete="off"
        type="search"
        name="search"
        placerholder="Filtrar personajes"
        value={searchName}
        onChange={handleName}
      /> 
      <select 
        name="houses" id="houses"
        value={filterHouse}
        onChange={handleHouse}>
        <option value="">Todas</option>
        {houses.map((house, index)=>
          <option key={index} value={house}>{house}</option>
        )}
      </select>
      <button>Buscar</button>
    </form>
  )
}

export default Form