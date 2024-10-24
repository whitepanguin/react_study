import React, { useRef, useState } from 'react';


// expert 실습
// 한국음식, 영어음식 이름을 추가하고 해당 음식을 선택해서 삭제하는 로직 만들기
const FoodContainer = () => {
    const [foods,setfoods] = useState([]);
    const inputRef = useRef([]);

    const foodList = foods.map(({kor, eng})=>{
        return(
            <li><input type="checkbox"/> {`${kor}(${eng})`}</li>
        );
    })

    const onClickToAdd=()=>{
            setfoods(
                foods.concat({
                 kor : inputRef.current[0].value,
                 eng : inputRef.current[1].value,

                }))
    }


    const onClickToDel=()=>{
        console.log("버튼 클릭!")

    }

    // const onClickToCheck=(e)=>{
    //     console.log("로직 실행!")
    //     let value = e.target.value;
    //     if(e.target.checked){
    //         setfoods(foods.concat(value))
    //     }else{
    //         setfoods(foods.filter((food) => food !== value))
    //     }
    // }

   
   
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