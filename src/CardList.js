import { Card } from "./Card"

export const CardList = (props) => {
  return (
    <div>
        {props.cards.map( card => (
            <Card {...card}/>
        ))}
    </div>
  )
}
