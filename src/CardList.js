import { Card } from "./Card"

export const CardList = (props) => {
    const cards = props.cards
  return (
    <div>
        {cards.map( (card) => (
            <Card {...card}/>
        ))}
    </div>
  )
}
