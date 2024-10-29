import React from 'react';
import S from '../style';

// const StyledDiv = styled.div`
//     width: 100px;
//     height: 100px;
//     border: solid 1px #333;
// `;

const Styled01 = () => {
    
    return (
        <S.StyledDiv>
            스타일 된 컴포넌트
            <TestComponent>일반컴포넌트</TestComponent>
            <S.StyledButton>스타일 된 버튼</S.StyledButton>
        </S.StyledDiv>
    );
};

export default Styled01;