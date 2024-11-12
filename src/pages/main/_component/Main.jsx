import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <div>
                여기는 메인 페이지 👻
            </div>
            <Link to={"/intro"}>소개페이지 이동(이것이 React이다)(link)</Link><br/>
            <a href="/intro">소개페이지 이동(a)</a>
        </>
    );
};

export default Main;