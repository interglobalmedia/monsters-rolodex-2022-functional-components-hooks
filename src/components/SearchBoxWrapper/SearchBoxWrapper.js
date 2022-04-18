import classes from './SearchBoxWrapper.module.scss'

const SearchBoxWrapper = (props) => {
    return (
        <fieldset className={`${classes.fieldset} ${props.className}`}>
            {props.children}
        </fieldset>
    )
}

export default SearchBoxWrapper