import { useState, useEffect, useCallback } from 'react'
import './App.scss';
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox'

const App = () => {
  const [searchInputField, setSearchInputField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchInputChangeHandler = (event) => {
    event.preventDefault()
    const searchInputFieldString = event.target.value.toLowerCase()
    setSearchInputField(searchInputFieldString)
    const input = document.querySelector('input')
    if (searchInputFieldString) {
      input.style.backgroundColor = `#7a7ad8`
      input.style.color = `#e4ddd3`
      input.style.border = `1px solid #828282`
    } else {
      input.style.backgroundColor = ``
      input.style.color = ``
      input.style.border = ``
    }
  }

  const fetchMonstersHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      let data = await response.json();
      const loadedMonsters = []

      for (const key in data) {
        loadedMonsters.push({
          id: key,
          name: data[key].name,
          email: data[key].email,
        })
      }

      console.log(loadedMonsters)

      if (!response.ok) {
        throw new Error(`Something went wrong!`)
      }
      
      setMonsters(loadedMonsters)
    } catch (error) {
      setError(error.message)
    }
     setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchMonstersHandler()
  }, [fetchMonstersHandler])

  const filteredMonsters = monsters.filter(monster => {
    return monster.name.toLowerCase().includes(searchInputField)
  })

  let content = <h2>No monsters here right now. Wanna wait for some?</h2>
  
  if (monsters.length > 0) {
    content = <CardList className="monsters-card-list" filteredMonsters={filteredMonsters} />
  }

  if (error) {
    content = <h2>{error}</h2>
  }

  if (isLoading) {
    content = <h2>Loading...</h2>
  }

  return (
    <div className="App">
      <main>
        <SearchBox className="monsters-search-box" placeholder="search monsters" onChange={searchInputChangeHandler} autofocus="autofocus" />
        {content}
      </main>
      <footer>
        <p>@ 2022 Maria D. Campbell</p>
      </footer>
    </div>
  );
}
export default App;
