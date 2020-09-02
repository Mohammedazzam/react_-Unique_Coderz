import React, { Component } from 'react';

import Child from './Child';
import Items from './components/Items';


class App extends Component {

    state ={
        items:[
            {id:1 , name:'Ahmed', age:22, count:2},
            {id:2 , name:'Tarek', age:22, count:1},
            {id:3 , name:'Mohammed', age:22, count:3},
            {id:4 , name:'Ramy', age:22, count:4},
        ]
    }


    render() {
        return ( 
            <div className = "App" > 
                Dealing With CSS
                <Items items={this.state.items }/>
            </div>
        );
    }
}


export default App;