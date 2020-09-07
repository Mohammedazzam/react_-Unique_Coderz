import React, { Component } from 'react';

import Child from './Child';
import Items from './components/Items';


class App extends Component {
    constructor(){
        super();
        console.log('constructor')
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate",prevProps,prevState)
    }

    state ={
        items:[
            {id:1 , name:'Ahmed', age:22, count:2},
            {id:2 , name:'Tarek', age:22, count:1},
            {id:3 , name:'Mohammed', age:22, count:3},
        ]
    }

    // handelClick =(e) =>{
    //     let items = this.state.items;
    //     items.push({id:4,name:'mohammed',age:30, count:5});
    //     this.setState({
    //         items:items
    //     })
    // }

    handelClick =(e) =>{
        let rand =Math.random();
        let items = this.state.items;
        items.push({id:rand,name:'mohammed',age:30, count:5});
        this.setState({
            items:items
        })
    }


    handelDelet =(e) =>{
        this.setState({
            items:[
                {id:2 , name:'Tarek', age:22, count:1},
            ]
        })
    }

    render() {
        console.log('render')
        return ( 
            <div className = "App" > 
                lifeCycle Component
                <Items items={this.state.items }/>
                <button onClick={this.handelClick}>Add</button>
                <button onClick={this.handelDelet} >Delete </button>
            </div>
        );
    }
}


export default App;