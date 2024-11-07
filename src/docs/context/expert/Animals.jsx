import React, { useContext } from 'react';
import { AnimalContext } from './AnimalsContext';
import Animal from './Animal';

//context에 저장된 동물 세마리를 버튼으로 출력
// input에 동물 입력 후 엔터 : 동물버튼 추가(context에 메서드 사용)
// 동물 버튼을 클릭하면 해당 버튼을 삭제(context메서드를 remove 사용)

const Animals = () => {


const {state,action}=useContext(AnimalContext);
const AnimalAdd = ()=>{
    action.setAnimalist(
        state.animalist.concat({animal: state.inputRef.current.value})
    )
    action.setChecked(state.checked.concat(false));
}


    return (
        <div>
            <input ref={(el)=>state.inputRef.current=el } type='text'></input><br/>
            <button type='button' onClick={AnimalAdd}>추가{console.log("add")}</button><br/>
            <Animal/>
        </div>
    );
};

export default Animals;