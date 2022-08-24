import React from "react";
import './Input.css';

const input =(props)=>{
    let inputElement  = null;
    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className="InputElement" {...props}/>
            break;
        case('textarea'):
            inputElement = <textarea className="InputElement" {...props}/>
            break;
        default:
            inputElement = <input className="InputElement" {...props}/>
            break;
    }
    return(
        <>
            <div className="Input">
                <label className="Lable">{props.lable}</label>
                {inputElement}
            </div>
        </>
    );
}

export default input;