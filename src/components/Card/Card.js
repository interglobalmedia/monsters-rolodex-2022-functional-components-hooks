import classes from './Card.module.scss'

const Card = ({ monster }) => {
    const { id, name, email } = monster

    return (
        <li className={`${classes["card-container"]} ${monster.className}`}>
            <figure className={`${classes["card-container__image"]} ${monster.className}`}>
                <img src={`https://robohash.org/${id}?set=set3&size=300x300`} alt={`monster ${name}`}/>
                <figcaption className={`${classes["card-container__data"]} ${monster.className}`}>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </figcaption>
            </figure>
        </li>
    )
}

export default Card