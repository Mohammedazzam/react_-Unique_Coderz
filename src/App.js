import React, { Component } from 'react';

import Child from './Child';


// class App extends Component {
//     render() {
//         return ( 
//             <div className = "App" > 
//                 <Child />
//             </div>
//         );
//     }
// }


//Arrow Function مفهوم ال 
class App extends Component {
    // Test(){
    //     console.log("Test")
    // }

    Test = () => {
        console.log("Test")
    }

    render(){
        return(
            <div className = "App" > 
                <Child/>
                {this.Test()}
            </div>
        )
    }
}

export default App;