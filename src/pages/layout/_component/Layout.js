import React from 'react';
import { Outlet } from 'react-router-dom';
import S from '../style';

const Layout = () => {
    return (
        <S.LayoutWrapper>
            <S.header>헤더)카테고리, 서치</S.header>
            <S.Main ><Outlet/></S.Main>
            <S.Footer>푸터)회사 소개</S.Footer>
        </S.LayoutWrapper>
    );
};

export default Layout;