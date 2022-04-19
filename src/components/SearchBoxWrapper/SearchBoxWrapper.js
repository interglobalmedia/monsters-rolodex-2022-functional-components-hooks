import classes from './SearchBoxWrapper.module.scss'

const SearchBoxWrapper = ({ className, children }) => (
    
    <fieldset className={`${classes.fieldset} ${className}`}>
        {children}
    </fieldset>
)



export default SearchBoxWrapper