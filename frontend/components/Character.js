import React, {useState} from 'react'

function Character({ id, name, homeworld }) { // ❗ Add the props
  const [render, setRender] = useState(false)
  // console.log(homeworld)
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleClick = () => {
    render
    ? setRender(false) : setRender(true)
  }
  return (
    <div className="character-card" onClick={toggleClick}>
      <h3 className="character-name">{name}</h3>
      { render
        ? <p>Planet: <span className="character-planet">{homeworld.name}</span></p>
        : ''
      }
    </div>
  )
}

export default Character


//components needed from the mock example
//<div></div> class=character-card
  //<h3></h3> class=character-name

  // <p>Planet: <span class= characterPlanet> </span> </p>   <--- this appears after the card is clicked on

