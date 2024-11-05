import React, { useState } from 'react';

// FontContext 생성
// 기본 폰트 사이즈 2rem
// 폰트를 변경할 수 있는 setter 메서드
const FontSizeContext = React.createContext({
   state: {fontSize : ""},
   action : { setFontSize : ()=> {} }
});

const FontSizeProvider = ({children}) => {
    const [fontSize,setFontSize] = useState("2rem");
    const value = {
    state: {fontSize},
    action :{setFontSize}
    }
    return(
        <FontSizeContext.Provider value={value}>
            {children}
        </FontSizeContext.Provider>
    )
}

const FontSizeConsumer = FontSizeContext.Consumer;

export {FontSizeProvider,FontSizeConsumer,FontSizeContext};