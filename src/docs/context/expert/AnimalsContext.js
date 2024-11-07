// 컨텍스트 생성 및 초기화
// Provider 생성
// useContext를 사용하므로 consumer는 필요 없다.
// animals 리스트 초기값 ["누렁이","야옹이","점박이"]
// 버튼을 눌렀을 때 삭제하는 remove라는 메서드 생성
// 화면에서 동물을 입력 받았을 때 추가하는 insert라는 메서드 생성

import React, { useRef, useState } from 'react';

const AnimalContext = React.createContext({
   state: {animalist : ["누렁이","야옹이","점박이"]},
   action : { setAnimalist : ()=> {} }
});

const AnimalProvider = ({children}) => {
    const [animalist,setAnimalist] = useState(["누렁이","야옹이","점박이"]);
    const [checked, setChecked]= useState([]);
    const inputRef = useRef([]);

    const value = {
    state: {animalist,checked,inputRef},
    action :{setAnimalist,setChecked}
    }
    return(
        <AnimalContext.Provider value={value}>
            {children}
        </AnimalContext.Provider>
    )
}


export {AnimalProvider,AnimalContext};