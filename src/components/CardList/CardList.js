import Card from '../Card/Card'
import classes from './CardList.module.scss'

const CardList = (props) => {
    const { filteredMonsters } = props
    return (
        <ul className={`${classes["card-list"]} ${props.className}`}>
          {filteredMonsters.map(monster => (<Card className="monsters-card-container" key={monster.id} monster={monster} />))}
        </ul>
    )
}

export default CardList