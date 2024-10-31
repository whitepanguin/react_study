import React from 'react';
import S from '../style';

// common.js에 
// width 100px, height 100px, backgroundcolor: orange로 정의된 box 스타일
// 스타일드 컴포넌트에서 사용해서 box(div태그)를 5개 만들기
// 박스 안에는 각각의 번호를 가진 p태그가 있다. p태그는 박스의 중앙 정렬 배치를 한다. 
// ex) <div>
//       <p>1</p>
//     </div>

const Styled04 = () => {
    return (
        <div>
            <S.Box>
                <p>1</p>
            </S.Box>
            <S.Box>
                <p>2</p>
            </S.Box>
            <S.Box>
                <p>3</p>
            </S.Box>
            <S.Box>
                <p>4</p>
            </S.Box>
            <S.Box>
                <p>5</p>
            </S.Box>
        </div>
    );
};

export default Styled04;