import classes from './SearchBoxWrapper.module.scss'

const SearchBoxWrapper = ({ searchBoxWrapper }) => (
    
    <fieldset className={`${classes.fieldset} ${searchBoxWrapper.className}`}>
        {searchBoxWrapper.children}
    </fieldset>
)


export default SearchBoxWrapper