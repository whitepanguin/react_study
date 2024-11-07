import React, { useContext, useState } from 'react';
import { AnimalContext } from './AnimalContext';
import Animal from './Animal';

const Animals = () => {

    const {state, action} = useContext(AnimalContext)
    const [inputValue, setInputValue] = useState("");
    const onChangeInputValue = (e) => {
      setInputValue(e.target.value);
    }
  
    const onKeyDownAddAnimal = (e) => {
      if(e.key === 'Enter'){
        action.insert(inputValue)
      }
    }
  
    const animalList = state.animals.map((animal, i) => (
      <li key={i}><button onClick={() => { action.remove(i) }}>{animal}</button></li>
    ))


    return (
      <ul>
        <input type="text" onChange={onChangeInputValue} onKeyDown={onKeyDownAddAnimal}/>
        {animalList}
        <Animal state={state} action={action}/>
      </ul>
    );
  };
  
  export default Animals;