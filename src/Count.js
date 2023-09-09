import React from "react";
import { Component, PureComponent } from "react";

class RegularComponent extends Component{
    render(){
        console.log('Regular component rendered');
        return<div> Regular Component: {this.props.count}</div>
    }
}

class OptimizesComponent extends PureComponent{
    render(){
        console.log('Pure component rendered');
        return <div> Pure Component: {this.props.count}</div>
    }
}

export default class App extends Component{
    state = {count:0};

    increment =()=>{
        this.setState((prevState) =>({count: prevState.count+1}));
    };

    render(){
        return (
            <div id='container'>
                <button id='newBtn' onClick={this.increment}>Increment</button>
                <RegularComponent id='RegularComp' count={this.state.count%2===0 ?0:1}/>
                <OptimizesComponent id='OptimizesComp' count ={this.state.count%2===0 ?0:1}/>
            </div>
        );
    }
}

