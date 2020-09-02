import React, { Component } from 'react';

import Child from './Child';
import Items from './components/Items';


class App extends Component {


    // render() {
    //     return ( 
    //         <div className = "App" > 
    //         List Item
    //         <Items id="1" name="Mohammed" age="22"/>
    //         <Items id="2" name="Tark" age="25"/>
    //         </div>
    //     );
    // }


    state={
        items:[
            {id:1, name:'Mohammed', age:22},
            {id:2, name:'Tark', age:25},
            {id:3, name:'Ahmed', age:60}
        ]
    }

    render() {
        return ( 
            <div className = "App" > 
            List Item
            <Items  items={this.state.items}/>
            </div>
        );
    }
}



export default App;