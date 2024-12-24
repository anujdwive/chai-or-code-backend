import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [jokes, setJoskes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        setJoskes(response.data);
      })
  }
  )

  return (
    <>
      <h1>This is a joke website</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((item) => {
          return (
          <div key={item.id}>
            <h3>{item.joke}</h3>
          </div>
          )

        })
      }
    </>
  )
}

export default App
