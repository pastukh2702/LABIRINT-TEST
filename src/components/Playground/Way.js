import React, { Component } from 'react'

export class Way extends Component {

    constructor(props) {
        super(props);
        this.state = {
            class: this.props.clas
        }


      }

    componentDidMount(){
        let that = this

        setTimeout(() => {
            this.setState({
                class: 'done'
            })
        }, 500*that.props.count);

    }

    render() {


        let wayName = ['↓', '↑', '→', '←']
        const { way } = this.props;
        

        return(
            <p className={this.state.class }>{wayName[way]}</p>
        )
        
        
    }
}





export default Way
