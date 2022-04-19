import Card from '../Card/Card'
import classes from './CardList.module.scss'

const CardList = ({ filteredMonsters }) => (
  
    <ul className={`${classes["card-list"]} ${filteredMonsters.className}`}>
      {filteredMonsters.map(monster => (<Card className="monsters-card-container" key={monster.id} monster={monster} />))}
    </ul>
)


export default CardList