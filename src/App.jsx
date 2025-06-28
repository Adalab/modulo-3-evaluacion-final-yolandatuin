
import './styles/App.css';
import Header from './components/Header.jsx';
import DetailCard from './components/DetailCard.jsx';
import { useEffect, useState } from 'react';
import  { Routes, Route } from 'react-router';
import Landing from './components/Landing.jsx'



function App() {

const [charactersList, setCharactersList] = useState([]);
const [searchName, setSearchName] = useState("");
const [filterHouse, setFilterHouse] = useState("");


  useEffect(() => { //para que no entre en un bucle
    fetch("https://hp-api.onrender.com/api/characters")
      .then(response => response.json())
      .then(data => {
        setCharactersList(data);
      })
  }, [])

const houses = [...new Set(charactersList.map(character => character.house))];
//Set: Solo se queda con los valores únicos

const filteredList = charactersList
  .filter(character => character.name.toLowerCase().includes(searchName.toLowerCase()))
  .filter(character => character.house === filterHouse || filterHouse === "")

  return (
    <>
    <Header/>
    <div className="page">
      
      
      <Routes>
        <Route index element={<Landing searchName={searchName} setSearchName={setSearchName} houses={houses} filterHouse={filterHouse} setFilterHouse={setFilterHouse}  filteredList={filteredList}/>}></Route>
        <Route path="/detail/:name" element={<DetailCard/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
