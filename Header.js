import React from 'react';
export const Header =(props)=>{
    return <div>
        <h1>THIS IS TEMPERATURE {props.txt} - {props.last}</h1>
        <p>{props.children}</p>
    </div>
}