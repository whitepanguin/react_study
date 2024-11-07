import React from 'react';
import Animals from './Animals';
import { AnimalProvider } from './AnimalsContext';

// AnimalsProvider 하위 요소에게 context를 제공한다
const AnimalsContainer = () => {
    return (
        <AnimalProvider>
            <Animals/>
        </AnimalProvider>
    );
};

export default AnimalsContainer;