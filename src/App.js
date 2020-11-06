import SearchBar from "./components/SearchBar"
import {useState, useEffect} from "react"
import axios from "axios"
import './App.css';
import DisplayCharacters from "./components/DisplayCharacters";

const App = () => {
  const [search, setSearch] = useState("")
  const [characters, setCharacters] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [filteredCharacters, setFilteredCharacters] = useState([])
  
  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://swapi.dev/api/people")
        .then(res => setCharacters(res.data.results),setIsLoaded(true))
        .catch(err => {
          console.log(err)
        })
    }
    getCharacters()
  }, [])

  useEffect(() => {
    setFilteredCharacters(
      characters.filter( character => {
        return character.name.toLowerCase().includes(search.toLowerCase())
      })
    )
  },[search, characters])

  return (
    <>
      { !isLoaded ? "loading..." :
      <div className="App">
        <h1>Hello Shoootin</h1>
        <div style={{marginTop:"2vh", marginBottom:"2vh"}}>
          <SearchBar input={search} searchChange={onSearchChange} />
        </div>
        <div>
          {filteredCharacters.map((character, i) => {
            return  <DisplayCharacters key={i} character={character} />
          })}
        </div>
      </div>
      }
    </>
  );
}

export default App;
