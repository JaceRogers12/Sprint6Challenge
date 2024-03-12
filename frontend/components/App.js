import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [characters, setCharacters] = useState([])
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    axios.get(urlPeople)
      .catch(res => console.log(res.error))
      .then(res => setPeople(res.data));
    axios.get(urlPlanets)
      .catch(res => console.log(res.error))
      .then(res => setPlanets(res.data));
  }, []);
 
  if(people.length && planets.length && !characters.length) {
    let homeworlds = people.map(person => {
      let newHome;
      planets.forEach(planet => {
        if (person.homeworld === planet.id) {
          newHome = planet
        }
      })
      return newHome;
    })
    let newPeople = people.map(person => {
      homeworlds.map(planet => {
        if (person.homeworld === planet.id)
        person.homeworld = planet;
      })
      return person;
    })
    setCharacters(newPeople);
  };

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {characters.map(character => {
        return <Character key={character.id} name={character.name} planet={character.homeworld.name}/>
      })}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
