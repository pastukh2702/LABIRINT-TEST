import React, { Component } from 'react'
import Matrix from './Matrix';
import Ways from './Ways';
import wayRandomizer from '../wayRandomizer';

export class Playground extends Component {

    constructor(props) {
        super(props);
        this.state = {
            matrixSize: 3,
            finish: '',
            win: undefined,
            start: '',
            ways: '',

            waysOld: '',
            startOld: '',
            finishOld:'',
        };

        this.checkCorrect = this.checkCorrect.bind(this)
        this.restart = this.restart.bind(this)
        this.rand = this.rand.bind(this)
    };

    rand(num) {
        return Math.floor(Math.random() * num)
    }

    checkCorrect(e) {
        const { finish } = this.state;

        this.state.startOld = this.state.start;
        this.state.finishOld = this.state.finish;
        this.state.waysOld = this.state.ways;

        if(finish[0] == e.target.dataset.i && finish[1] == e.target.dataset.j){
            this.setState({
                win: true,
            })
        } else {
            this.setState({
                win: false,
            })
        }
    }

    restart(){
        this.setState({
            matrixSize: 3,
            finish: '',
            win: undefined,
            start: ''
        })
    }

    render() {
        this.state.start = [this.rand(this.state.matrixSize), this.rand(this.state.matrixSize)]

        const { matrixSize, start, startOld, finishOld, ways, waysOld } = this.state

        console.log(start)

        let wayData = wayRandomizer(start, matrixSize)

        this.state.ways = wayData[1];
        this.state.finish = wayData[0];

        if(this.state.win){
            return (
                <div className="play">
                   <Matrix matrixSize={matrixSize} start={startOld} finish={finishOld} showFinish={true}></Matrix>
                   <Ways ways={waysOld}></Ways>
                   <h1 className="win">ВЫ ВЫИГРАЛИ! ПОЗДРАВЛЯЮ!</h1>
                   <h2 onClick={this.restart}>НАЧАТЬ ИГРУ ЗАНОВО</h2>
                </div>
            ) 
        } else if (this.state.win == false) {
            return (
                <div className="play">
                   <Matrix matrixSize={matrixSize} start={startOld} finish={finishOld} showFinish={true}></Matrix>
                   <Ways ways={waysOld}></Ways>
                   <h1 className="lose">ВЫ ПРОИГРАЛИ ;( ПОПРОБУЙТЕ СНОВА</h1>
                   <h2 onClick={this.restart}>НАЧАТЬ ИГРУ ЗАНОВО</h2>
                </div>
            ) 
        }else{
            return (
                <div className="play">
                   <Matrix matrixSize={matrixSize} start={start} finish={wayData[0]} showFinish={false}  check={this.checkCorrect}></Matrix>
                   <Ways ways={wayData[1]}></Ways>
                </div>
            )
        }
 
    }
}

export default Playground
