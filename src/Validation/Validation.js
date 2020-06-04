import React from 'react';

const validation = (props)=> {
    let msg = null;
    if(props.inputLength < 5){
        msg= 'Text to short!';
    } else  {
        msg= 'Text long enough!';
    }
    return (
        <div>
            <p>{msg}</p>
        </div>
    )

};

export default validation;