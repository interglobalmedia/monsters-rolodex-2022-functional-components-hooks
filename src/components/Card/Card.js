import classes from './Card.module.scss'

const Card = ({ monster }) => (
    
    <li className={`${classes["card-container"]} ${monster.className}`}>
        <figure className={`${classes["card-container__image"]} ${monster.className}`}>
            <img src={`https://robohash.org/${monster.id}?set=set3&size=300x300`} alt="monster"/>
            <figcaption className={`${classes["card-container__data"]} ${monster.className}`}>
                <h2>{monster.name}</h2>
                <p>{monster.email}</p>
            </figcaption>
        </figure>
    </li>
)


export default Card