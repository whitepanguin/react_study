import styled from "styled-components";

const S = {};

    S.LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100dvh;
    `
    S.header = styled.header`
        border-bottom: solid 1px #333;
        padding : 10px, 0;
    `
    S.Main = styled.main`
    flex : 1;
    `

    S.Footer = styled.footer`
        border-top: solid 1px #333;
        padding : 10px, 0;
    `

export default S;