import React from 'react';
import FontSizeComponent from './FontSizeComponent';
import { FontSizeConsumer }  from './FontContext';


const ChildContainer = () => {
  
    return (
        <div>
        <FontSizeComponent/>
        <FontSizeConsumer >
            {/*밑에 p태그를 context의 기본 크기로 지정하고 버튼을 누르면 5rem으로 크기를 키우게 한다*/}
            {(context)=>{
                return <>
                <p style={{fontSize:context.state.fontSize}}> 중간 ChildContainer입니다🥱</p>
                <button onClick={()=>{context.action.setFontSize("5rem")}}>일어나라</button>
                </>
            }}
        </FontSizeConsumer>
        </div>
    );
};

export default ChildContainer;