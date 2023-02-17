import { useState } from 'react';
import { CardList } from './CardList';

import './App.css';


function App() {

  const [cards, setCards] = useState([])
  return (
    <div className="App">
      <CardList cards={cards}/>
    </div>
  );
}

export default App;
