import React, { useState } from 'react';

const Checkbox = () => {

    const [message,setMessage] = useState([]);

    const onClickToCheck=(e)=>{
        console.log("로직 실행!")
        let value = e.target.value;
        if(e.target.checked){
            // setMessage(message.concat(value))
            setMessage([...message,value])
        }else{
            setMessage(message.filter((m) => m !== value))
        }
        
        
    }

    return (
        <div>
            <div>
                <span>front-end</span>
                <input type="checkbox" value="front-end" onClick={onClickToCheck}/>
            </div>
            <div>
                <span>back-end</span>
                <input type="checkbox" value="back-end" onClick={onClickToCheck}/>
            </div>
            <div>
                <span>AI</span>
                <input type="checkbox" value="AI" onClick={onClickToCheck}/>
            </div>
            <div>
                <h1>{message.map((m,i) => <p key={{i}}>{m}</p>)}</h1>
            </div>
        </div>
    );
};

export default Checkbox;