import { useState } from 'react';
import { CardList } from './CardList';
import { Form } from './Form';
import './App.css'

const App = () => {
  const [cards, setCards] = useState([])

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  return (
    <div className='App'>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}

export default App;
