import React, { useRef, useState } from 'react';


// expert 실습
// 한국음식, 영어음식 이름을 추가하고 해당 음식을 선택해서 삭제하는 로직 만들기
const FoodContainer = () => {
    const [foods,setfoods] = useState([]);
    const inputRef = useRef([]);
    const [checked, setChecked]= useState([]);


    const foodList = foods.map(({kor, eng},i)=>{
        return(
            <li key={i}>
                <input type="checkbox" checked={checked[i]} onChange={()=>onChangeCheckBox(i)} />
                {`${kor}(${eng})`}
            </li>
        );
    })

    const onClickToAdd=()=>{
            setfoods(
                foods.concat({
                 kor : inputRef.current[0].value,
                 eng : inputRef.current[1].value
                })
            )
            setChecked(checked.concat(false));
    }


    const onClickToDel=()=>{
        setfoods(foods.filter((food,i)=>!checked[i]))
        setChecked(new Array(foods.length).fill(false))
    }

    const onChangeCheckBox=(i)=>{
        checked.splice(i,1,!checked[i])
        setChecked(checked.concat());
    }

   
   
    return (
        
        <div>
            <div>
                <input ref={(el)=>inputRef.current[0]=el} type='text' placeholder='한국 음식 이름'/>
                <input ref={(el)=>inputRef.current[1]=el} type='text' placeholder='영어 음식 이름'/>
            </div>
            <div>
                <button type='button' onClick={onClickToAdd}>추가</button>
                <button type='button' onClick={onClickToDel}>삭제</button>
            </div>
            <div>
                {foodList}
            </div>
        </div>
        
    );
};

export default FoodContainer;