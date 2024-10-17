// 실습
// name 과 message를 넣어서 랜더링 하기
// name : 이름, message : 환영합니다.
// 5분
import React from 'react';

const Jsx03 = ()=>{
    const name = "이재용";
    const message = "환영합니다";
    return(
        <>
             제 이름은 {name} 입니다.<br/>
            <p style={{color :"red"}}> {message}.</p>
        </>
    );
}

export default Jsx03; 