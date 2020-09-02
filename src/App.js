import React, { Component } from 'react';

import Child from './Child';



class App extends Component {

    state={
        name:"mohammed"
    }

    render() {
        return ( 
            <div className = "App" > 
                Stateful Commponent VS Stateless Component
                <Child test={this.state.name}/>
            </div>
        );
    }
}



export default App;