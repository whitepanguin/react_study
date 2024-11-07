import React from 'react';




const Animal = ({state,action}) => {
    const {animals}= state;
    const {remove,/*insert*/}=action;
    const animalList = animals.map((animal,i)=>(
        <li key={i}>
            <button onClick={()=>{remove(i)}}>{animal}</button>
        </li>
    ))
    return (
        <div>
           {animalList}
        </div>
    );
};

export default Animal;