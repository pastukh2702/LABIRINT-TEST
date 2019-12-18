import React, { Component } from 'react'
import Way from './Way';

function Ways (props){
    
    return (
        <div className="ways">
            {
                props.ways.map((way, i) => (
                    <Way way={way} key={i} count={i} clas="waiting" wait={Math.random()*100}></Way>
            ))}
        </div>
    )
}

export default Ways
