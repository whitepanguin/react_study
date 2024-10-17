import React from 'react';

const Food = ({food, style}) => {
    //const {name}= props;

    return (
        <li style={style}>
           {food.name}
        </li>
    );
};

export default Food;