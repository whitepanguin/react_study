import React from 'react';

const Form = () => {
    // CheckInput에서 Props로 전달받은 함수와 스타일을 적용하여 화면 값 유효성 검사
    return (
        <form>
            <input type="text" name="email" />
            <input type="password" name="password" />
            <input type="text" name="name" />
            <input type="text" name="age" />
            <button>입력 완료</button>
        </form>
    );
};

export default Form;