import React from 'react';
import Food from './Food';
import Food from './Foods';

const FoodContainer = () => {
    const foods = [
        {id: 1, name : "라면"},
        {id: 2, name : "피자"},
        {id: 3, name : "쌀국수"},
        {id: 4, name : "치킨"},
        {id: 5, name : "떡볶이"},
        {id: 6, name : "김밥"},
        {id: 7, name : "튀김"},
    ]
    const style={
        listStyle:"none",
    }
    return (
        // <ul>
        //     {/* {foods.map(({name}, i)=> <Food key={i} name={name}/>)} */}
        // </ul>
        <Food foods={foods} style={style}/>
    );
};

export default FoodContainer;