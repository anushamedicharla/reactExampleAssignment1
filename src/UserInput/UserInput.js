import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="userInput">
            <input onInput={props.input} className="Input" type="text" value={props.userName}/>
        </div>
    );
};

export default userInput;