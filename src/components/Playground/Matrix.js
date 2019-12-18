import React, { Component } from 'react';
import Cell from './Cell'

function Matrix (props) {
    const { matrixSize, start, finish } = props
    let matrix = [];

    for (let i = 0; i < props.matrixSize; i++) {
        matrix[i] = []
        for (let j = 0; j < props.matrixSize; j++) {
            matrix[i][j] = ''
        }
    }
    
    return (
        <div className="matrix">
            {matrix.map((row, i) => (
                <div key={i}>
                    {row.map((col, j) => (
                        <Cell key={j} pos={[i,j]} start={props.start} finish={props.finish} check={props.check} showFinish={props.showFinish}></Cell>
                    ))}
                </div>
            ))}
        </div>
    )
    
}
export default Matrix
