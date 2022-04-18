import classes from './Card.module.scss'

const Card = (props) => {
    const { monster } = props
    return (
        <li className={`${classes["card-container"]} ${props.className}}`}>
            <figure className={`${classes["card-container__image"]} ${props.className}`}>
                <img src={`https://robohash.org/${monster.id}?set=set3&size=300x300`} alt="monster"/>
                <figcaption className={`${classes["card-container__data"]} ${props.className}`}>
                    <h2>{monster.name}</h2>
                    <p>{monster.email}</p>
                </figcaption>
            </figure>
        </li>
    )
}

export default Card