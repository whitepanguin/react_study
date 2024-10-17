import React from 'react';

const Component = (props) => {
    console.log(props)
    return (
        <div>
            {name}
           <p>제 이름은 : {props.name}</p>
           <p>제 나이는 : {props.age}</p>
        </div>
    );
};

export default Component;