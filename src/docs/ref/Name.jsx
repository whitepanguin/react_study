import React, { useRef, useState } from 'react';

const Name = () => {
    // 사용자가 임력한 이름을 P태그에 실시간으로 작성하고
    // 버튼을 클릭하면 이름 뒤에 "님"이 붙도록 구현
    // 입력 후 엔터를 작성하면 P태그에 반영
    const [result, setResult] = useState("");
    const inputRef=useRef();
    const onChangeToInput = (e)=>{
        setResult(e.target.value)
    }

    const onClickToChange =(e)=>{
        setResult(inputRef.current.value.replaceAll("님","") + "님")
        // console.log(inputRef.current.value)

    }
    return (
        <div>
            <p>{result}</p>
            <input ref={inputRef} value={result} type='text' onChange={onChangeToInput} onKeyDown={(e)=>{console.log(e)}}/>
            <button onClick={onClickToChange}> 모르겠어요 버튼 </button>
 
        </div>
    );
};

export default Name;