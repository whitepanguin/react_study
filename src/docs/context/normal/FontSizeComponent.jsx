import React, { useContext } from 'react';
import   { FontSizeConsumer, FontSizeContext }  from './FontContext';

// p태그의 폰트사이즈를 context의 기본 폰트사이즈로 지정하고
// 버튼을 누르면 0.5rem으로 작아지게 만든다.
const FontSizeComponent = () => {
    const {state,action}=useContext(FontSizeContext);
    return (
        // <FontSizeConsumer>
            // {(context)=>(
            <>
                <p style={{fontSize :state.fontSize}}> 최하위 요소입니다😴</p>
                <button onClick={()=>{action.setFontSize("0.5rem")}}>잠들어라</button>
            </>
        // )}  
        // </FontSizeConsumer>
    );
};

export default FontSizeComponent;