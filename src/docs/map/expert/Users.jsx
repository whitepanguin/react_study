import React from 'react';
import User from './User';

const Users = ({userList}) => {
    console.log(userList)
    //UserContainer에서 유저의 정보를 받아서 User 컴포넌트로 반복문을 돌린다.
    return (
        <div>
            {userList.map((user, i)=><User key={i} user={user} />)}
        </div>
    );
};

export default Users;