import React, { Component } from 'react';

import Child from './Child';



class App extends Component {

    state = {
        name :'mohammed',
        age :27
    }

    change =() =>{
        // console.log(this.state)
        this.setState({
            name:"Ahmed",
            age :65

        })
    }

    render() {
        return ( 
            <div className = "App" > 
                <button onClick={this.change}>Change State</button>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
            </div>
        );
    }
}



export default App;