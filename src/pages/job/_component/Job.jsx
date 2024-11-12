import React from 'react';
import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// 직업의 기술을 보여주는 페이지
const Job = () => {
// const [serchParams] = useSearchParams();
// const title = serchParams.get("title");
const {title}=useParams();

// redux에 있는 값을 가져와서 각각에 요청된 페이지에 맞는 기술들을 화면에 출력
const jobs = useSelector((state)=>state.route.jobs);
const {name,skills}=jobs[title];
console.log(skills)
const skillList = skills.map((skill)=>(
    <>
        <li>{skill}</li>
    </>
))
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>기술</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                    </tr>
                </tbody>
            </table>
            <ul>{skillList}</ul>
        </div>
    );
};

export default Job;