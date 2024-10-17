import React, { useState } from 'react';

const Colors = () => {
    // 빨간색 버튼을 누르면 글자색을 빨갛게
    // 파란색 버튼을 누르면 글자색을 파랗게
    // 핑크색을 입력하면 글자 색을 없앤다.
    const [color,setColor] = useState("");
    const [result,setResult] = useState("글자");
    const onChangeInputValue =(e)=>{
        if(e.target.value=="핑크색"){ setColor("");}
        setResult(e.target.value) 
    }
    return (
        <div>
            <p style={{color : color}}>{result}</p>
            <button onClick={()=>{setColor("red")}}>빨간색</button>
            <button onClick={()=>{setColor("blue")}}>파란색</button>
            <input type='text' onChange={onChangeInputValue}/>
        </div>
    );
};

export default Colors;