import React, {useState, useEffect} from 'react'

function Character({name, planet}) { // ❗ Add the props
  const [selected, setSelected] = useState(false)

  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  function toggleSelected() {
    setSelected(!selected);
  }

  return (
    <div className="character-card" onClick={() => toggleSelected()}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className="character-name">{name}</h3>
      {selected && <p>Planet:  
        <span className="character-planet">{planet}</span>
      </p>}
    </div>
  )
}

export default Character
