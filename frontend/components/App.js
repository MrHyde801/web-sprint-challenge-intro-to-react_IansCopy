import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

  const[data, getData] = useState([]);
  
  useEffect(() => {
    console.log('component mounted')
    async function fetchPeopleAndPlanets() {
      try {
        let peopleRes = await axios.get(urlPeople);
        let peopleData = peopleRes.data

        let planetRes = await axios.get(urlPlanets);
        let planetData = planetRes.data

        console.log('Successful Fetch of Information')

        const combinedData = peopleData.map(people => {
          const matchingPlanet = planetData.find(planet => planet.id == people.homeworld)
          return {
            ...people,
            homeworld: matchingPlanet
          }
        })
        getData(combinedData)


      } catch (error) {
        console.log(error.message)
      }
    }
    fetchPeopleAndPlanets()
  }, []);

  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {
        data.map(pers => <Character key={pers.id} id={pers.id} name={pers.name} homeworld={pers.homeworld}  />)
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App






//components needed from the mock example
//<div></div> class=character-card
  //<h3></h3> class=character-name

  // <p>Planet: <span class= characterPlanet> </span> </p>   <--- this appears after the card is clicked on

