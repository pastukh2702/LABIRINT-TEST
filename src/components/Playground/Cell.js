import React, { Component } from 'react'

export class Cell extends Component {
    render() {
        const { start, pos, finish, check, showFinish } = this.props;
        console.log(finish[0] === pos[0] && finish[1] === pos[1])
        if(start[0] === pos[0] && start[1] === pos[1] ) {
            if(finish[0] === pos[0] && finish[1] === pos[1] && showFinish){
                return (
                    <div className="cell" data-i={pos[0]} data-j={pos[1]} onClick={check} style={{background:'orange', zIndex:10}}>
                        
                    </div>
                )
            } else {
                return (
                    <div className="cell" data-i={pos[0]} data-j={pos[1]} onClick={check} style={{background:'green',}}>
                        
                    </div>
                )
            }
            
        }
            if(finish[0] === pos[0] && finish[1] === pos[1] && showFinish){
                return (
                    <div className="cell" data-i={pos[0]} data-j={pos[1]} onClick={check} style={{background:'orange', zIndex:10}}>
                        
                    </div>
                )
            }

        else {
            return (
                <div className="cell" data-i={pos[0]} data-j={pos[1]} onClick={check}>
                    
                </div>
            )
        }
        
    }
}

export default Cell
