import React, { useContext, useRef } from 'react';
import { AnimalContext } from './AnimalsContext';

const Animal = () => {
    const {state,action}=useContext(AnimalContext);


    const AnimalRemove = ()=>{
        action.setAnimalist(state.animalist.filter((animal,i)=>!state.checked[i]))
        action.setChecked(new Array(state.animalist.length).fill(false))
    }

    return (
        <>
            {state.animalist.map((animal, i)=><button type='button' onClick={AnimalRemove} key={i}>{animal} {console.log("remove")}</button>)}
        </>
    );
};

export default Animal;