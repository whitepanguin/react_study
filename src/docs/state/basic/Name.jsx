import React, { useState } from 'react';

const Name = () => {
    //사용자가 입력한 값을 화면에 출력하기
    const [result,setResult] = useState("");
    const onChangeInputValue =(e)=>{
        setResult(e.target.value)
    }
    return (
        <div>
            <p>{result}</p>
            <input type='text' onChange={onChangeInputValue}/>
        </div>
    );
};

export default Name;