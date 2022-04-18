import SearchBoxWrapper from '../SearchBoxWrapper/SearchBoxWrapper'
import classes from './SearchBox.module.scss'

const SearchBox = (props) => {
    return (
        <SearchBoxWrapper className="monsters-fieldset">
            <h2>Search The Monsters!</h2>
            <input className={`${classes["search-box"]} ${props.className}`} type="search" placeholder={props.placeholder} onChange={props.onChange} autoFocus={props.autofocus}/>
        </SearchBoxWrapper>
    )
}

export default SearchBox