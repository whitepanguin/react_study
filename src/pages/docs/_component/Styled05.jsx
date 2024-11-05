import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb, faTree } from '@fortawesome/free-solid-svg-icons'


// 폰트어썸 아이콘 사용
const Styled05 = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faBomb} />
            <FontAwesomeIcon icon={faTree} beat size="2xl" style={{color: "#483974",}} />
        </div>
    );
};

export default Styled05;