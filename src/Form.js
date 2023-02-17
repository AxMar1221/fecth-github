import axios from "axios"
import { useState } from "react"

export const Form = (props) => {

    const [username, setUsername] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    const API_URL = 'https://api.github.com/users/';

    axios.get(`${ API_URL }${username}`).then(resp => {
      props.onSubmit(resp.data)
      console.log(resp.data)
      setUsername('')
    });
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
    </>

  )
}