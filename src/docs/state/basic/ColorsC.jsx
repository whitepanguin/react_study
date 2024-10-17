import React, { useState } from 'react';

const ColorsC = () => {
    const [result, setResult] = useState("");
    const [color, setColor] = useState("");

    const onClickToColorRed= ()=>{setColor("red")}
    const onClickToColorBlue= ()=>{setColor("blue")}
    const onChangeToInputValue =(e)=>{setResult(e.target.value)
        if(e.target.value==="핑크색"){setColor("")}
        return setResult(e.target.value)
    }
    console.log(color)
    return (
        <div>
            <p style={{color}}>{result}</p>
            <input type="text" onChange={onChangeToInputValue}/>
            <button onClick={onClickToColorRed}>빨간색</button>
            <button onClick={onClickToColorBlue}>파란색</button>
        </div>
    );
};

export default ColorsC;