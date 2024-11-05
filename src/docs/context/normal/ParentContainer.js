import React from 'react';
import ChildContainer from './ChildContainer';
import { FontSizeProvider } from './FontContext';

// 하위 요소에게 context를 제공
const ParentContainer = () => {
    return (
        <FontSizeProvider>
            <ChildContainer/>
        </FontSizeProvider>
    );
};

export default ParentContainer;