import React from 'react';

// age 상수로 나이를 설정한다(임의)
// 19세 이하
// 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 태그로 출력

// const Jsx05 = () => {
//     const age = 25;
//     const ad = 19;

//     return (
//         <div>
//             {age>=ad ? (
//                 <>입장 가능<br/></>
//             ):(
//                 <>입장 불가<br/></>
//             )}
//             {age%2==0 ?(
//                 <>당첨</>
//             ):(
//                 <>꽝</>
//             )}
//         </div>
//     );
// };

// const Jsx05 = () => {
//     const age = 25;
//     const agep = age >= 19;
//     const aget = age %2== 0;

//     return (
//         <div>
//             {agep ? (
//                 <>입장 가능<br/></>
//             ):(
//                 <>입장 불가<br/></>
//             )}
//             {aget ?(
//                 <>당첨</>
//             ):(
//                 <>꽝</>
//             )}
//         </div>
//     );
// };

const Jsx05 = () => {
    const age = 10;
    const [pass, notPass, lucky, unlucky] =["입장 가능","입장 불가","당첨","꽝"];
    const isAdult = age >= 19;
    const isEven = age %2 ==0;

    const passComponet = <div>{pass}</div>
    const notpassComponet = <div>{notPass}</div>
    const luckyComponet = <div>{lucky}</div>
    const unluckyComponet = <div>{unlucky}</div>
    // 변수들을 컴포넌트로 변경하기

    const enter = isAdult ? passComponet: notpassComponet;
    const win = isEven ? luckyComponet : unluckyComponet ;

    return (
        <div>
            {enter}
            {win}
        </div>
    );
};

export default Jsx05;