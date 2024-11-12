import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header>카테고리, 서치</header>
            <main><Outlet/></main>
            <footer>회사 소개</footer>
        </div>
    );
};

export default Layout;