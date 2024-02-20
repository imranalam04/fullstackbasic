import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [jokes,setJokes] = useState([])

  useEffect(() =>{
    axios.get('/api/jokes') 
    .then((response) => {
      setJokes(response.data) 
    }) 
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <div>
    <h1>Fullstack Basics 🧑‍💻</h1>
    <p>Jokes :{jokes.length}</p>
    {
      jokes.map((joke,index) => {
        return(
          <div key={index}>
          <h4>{joke.content}</h4>
          </div>
        )
       
      })
    }
    </div>
  )
}

export default App