import React, { useState } from 'react';

const Count = () => {

    const[number, setNumber]=useState(10);

    const decrease = ()=>{
        console.log(number)
        setNumber(number - 1)
    }
    const increase = ()=>{
        console.log(number)
        setNumber(number + 1)
    }

    return (
        <div>
            <button onClick={decrease}>-1 감소</button>
            {number}
            <button onClick={increase}>+1 증가</button>
        </div>
    );
};

export default Count;