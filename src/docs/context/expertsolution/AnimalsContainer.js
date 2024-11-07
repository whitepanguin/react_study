import React from 'react';
import { AnimalProvider } from './AnimalContext';
import Animals from './Animals';

const AnimalsContainer = () => {
    return (
        <AnimalProvider>
            <Animals/>
        </AnimalProvider>
    );
};

export default AnimalsContainer;