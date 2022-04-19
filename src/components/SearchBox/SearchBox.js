import SearchBoxWrapper from '../SearchBoxWrapper/SearchBoxWrapper'
import classes from './SearchBox.module.scss'

const SearchBox = ({searchBox}) => (
    
    <SearchBoxWrapper className="monsters-fieldset">
        <h2>Search The Monsters!</h2>
        <input className={`${classes["search-box"]} ${searchBox.className}`} type="search" placeholder={searchBox.placeholder} onChange={searchBox.onChange} autoFocus={searchBox.autofocus}/>
    </SearchBoxWrapper>
)


export default SearchBox