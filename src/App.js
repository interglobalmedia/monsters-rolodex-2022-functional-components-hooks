import './App.scss';
import { Component } from 'react'
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchInputField: ''
    }
  }

  async componentDidMount() {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      let users = await response.json();
      this.setState(() => {
        return {
          monsters: users
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  searchInputChangeHandler = (event) => {
    event.preventDefault()
    const searchInputField = event.target.value.toLowerCase()
    const input = document.querySelector('input')
    if (searchInputField) {
      input.style.backgroundColor = `#7a7ad8`
      input.style.color = `#e4ddd3`
      input.style.border = `1px solid #828282`
    } else {
      input.style.backgroundColor = ``
      input.style.color = ``
      input.style.border = ``
    }
    this.setState(() => {
      return {
        searchInputField
      }
    })
  }
 
  render() {
    const { monsters, searchInputField } = this.state
    const { searchInputChangeHandler } = this
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchInputField)
    })
    return (
      <div className="App">
        <main>
          <SearchBox className="monsters-search-box" placeholder="search monsters" onChange={searchInputChangeHandler} autofocus="autofocus" />
          <CardList className="monsters-card-list" filteredMonsters={filteredMonsters} />
        </main>
        <footer>
          <p>@ 2022 Maria D. Campbell</p>
        </footer>
      </div>
    );
  }
}
export default App;
