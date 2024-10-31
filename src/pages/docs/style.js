import styled from "styled-components";
import { boxCommon, flexCenter, flexCenterColumn } from "../../global/common";
import { fadeIn } from "../../styles/keyframes";
const S ={};

S.StyledDiv = styled.div`
    width: 100px;
    height: 100px;
    border: solid 1px #333;
`;
S.StyledButton = styled.button`
background-color: ${(props)=> props.backgroundColor};
border:none;
`;

S.Input = styled.input`
    width: 200px;
    height: 50px;
    border: solid 1px lightgreen;
    color : ${(props)=>props.color};
`;
S.Strong = styled.strong`
    font-size: ${(fontSize)=>fontSize};
`;
S.P = styled.p`
    font-weight: ${(props)=>props?.fontWeight};
    color : ${(props)=>props && props.color};
`;
S.Wrap = styled.div`
    ${flexCenterColumn}

    & span {
        color: green;
        text-align: left;
    }

    & button {
        width:100%;
        color: red;
    }
`;  //& = 자기 자신 선택

S.Box = styled.div`
    ${boxCommon}
    ${flexCenter}
    & p {
        /* 테마가 정의한 폰트로 폰트 크기를 정의*/
        font-size: ${({theme})=>theme.FONT_SIZE["h1"]};
        /* font-size:25px; */
        font-weight:900;
        animation: ${fadeIn} 1s forwards ease-in;
    }
`;

export default S;