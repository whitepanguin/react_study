import React, { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/users
const SideEffectMount = () => {
    // 데이터를 가져와서 화면에 user.name을 출력하는 실습

    const [users, setUsers]= useState([]);
    
    useEffect(()=>{
        const getUsers = async () =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const datas = await response.json();
            console.log("re렌더링")
            return datas;
        }
        console.log(users)
        getUsers().then(setUsers)
    },[]);
    

    return (
        <ul>
            {users.map((user,i)=><li key={i}>{user.name}</li>)}
        </ul>
    );
};

export default SideEffectMount;