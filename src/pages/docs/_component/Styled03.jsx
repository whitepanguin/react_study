import React from 'react';
import S from '../style';
import BasicButton from '../../../components/button/BasicButton';

const Styled03 = () => {
    const onClickToEvent= ()=>{console.log("클릭")}

    return (
        <S.Wrap>
            <form action="#">
                <S.Wrap>
                    <span>이메일</span>
                    <input type="text" />
                
                </S.Wrap>
                <S.Wrap>
                    <span>비밀번호</span>
                    <input type="password" />
                
                </S.Wrap>
                <S.Wrap>
                    <span>비밀번호 확인</span>
                    <input type="password" />
                
                </S.Wrap>
                <BasicButton type='button' onClickToEvent={onClickToEvent} variant={"primary"} size={"large"} shape={"small"}>로그인</BasicButton>
                <button type='button'>회원가입</button>
            </form>
        </S.Wrap>
    );
};

export default Styled03;