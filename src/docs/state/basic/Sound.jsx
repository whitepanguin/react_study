import React, { useState } from 'react';

const Sound = () => {
    // 강아지 버튼과 고양이 버튼을 만들고
    // 버튼을 눌렀을 때 각각 울음 소리가 나오도록 구현하기
    // 강아지는 멍멍, 고양이는 야옹
    const[sound, setSound]=useState("멍🐶야옹😺");
    const dogsound = ()=>{
        setSound("멍멍🐶")
    }
    const catsound = ()=>{
        setSound("야옹😺")
    }

    return (
        <div>
            <p>{sound}</p>
            <button onClick={dogsound}>강아지 버튼</button>
            <button onClick={catsound}>고양이 버튼</button>
            <button onClick={()=>{setSound("이히히")}}>이히히</button>
        </div>
    );
};

export default Sound;