import React from 'react';
import CharContext from './CharContext';

const C = () => {
    return (
        <CharContext.Consumer>
            {(context)=>{
                return <p style={{color:context.color}}>최하위 요소😴</p>
            }}
        </CharContext.Consumer>
    );
};

export default C;