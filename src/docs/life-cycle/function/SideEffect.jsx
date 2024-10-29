import React, { useEffect, useState } from 'react';

const SideEffect = () => {
    const [number,setNumber]= useState(0);
    const [color,setColor]= useState("");

    const getRandomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16)
      }

    const onClickToChangeColor=()=>{
        setColor(getRandomColor())
    }
    const onClickToIncrease = ()=>{
        setNumber((prev)=>{
            console.log(prev,"이전 값")
            return number +1;
        })
    }
    // useEffect(()=>{
    //     console.log("리랜더링")
    // },[])

    useEffect(()=>{
        console.log("리랜더링")
    },[number])

    console.log(color)

    return (
        <div>
            <h1 color={{color}}>{number}</h1>
            <button onClick={onClickToIncrease}>+1 증가</button>
            <button onClick={onClickToChangeColor}>색상 변경</button>
        </div>
    );
};

export default SideEffect;            