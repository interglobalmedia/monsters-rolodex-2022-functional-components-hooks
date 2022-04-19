import SearchBoxWrapper from '../SearchBoxWrapper/SearchBoxWrapper'
import classes from './SearchBox.module.scss'

const SearchBox = ({className, placeholder, onChange, autofocus}) => (

    <SearchBoxWrapper className="monsters-fieldset">
        <h2>Search The Monsters!</h2>
        <input className={`${classes["search-box"]} ${className}`} type="search" placeholder={placeholder} onChange={onChange} autoFocus={autofocus}/>
    </SearchBoxWrapper>
)


export default SearchBox