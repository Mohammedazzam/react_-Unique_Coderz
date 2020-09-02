import React, { Component } from 'react';

import Child from './Child';


// class App extends Component {

//     handelClick(){
//         console.log("Clicke")
//     }

//     handelMouse(){
//         console.log("Mouse Move")
//     }

//     render() {
//         return ( 
//             <div className = "App" > 
//                 <Child />
//                 <button onClick={this.handelClick}>Click</button>
//                 {/* <button onDoubleClick={this.handelClick}>Click</button> */}
//                 <button onMouseMove={this.handelMouse}>Mouse Move</button>
//             </div>
//         );
//     }
// }


// bind عمل ال 

// class App extends Component {

//     state ={
//         name:"Mohammed"
//     }

//     handelClick(){
//         console.log(this.state.name)
//     }

//     handelMouse(){
//         console.log("Mouse Move")
//     }

//     render() {
//         return ( 
//             <div className = "App" > 
//                 <Child />
//                 <button onClick={this.handelClick.bind(this)}>Click</button>
//                 {/* <button onDoubleClick={this.handelClick}>Click</button> */}
//                 <button onMouseMove={this.handelMouse}>Mouse Move</button>
//             </div>
//         );
//     }
// }



// Arrow Function حل آخر باستخدام ال 
class App extends Component {

    state ={
        name:"Mohammed"
    }

    handelClick = () => {
        console.log(this.state.name)
    }

    handelMouse(){
        console.log("Mouse Move")
    }

    render() {
        return ( 
            <div className = "App" > 
                <Child />
                <button onClick={this.handelClick}>Click</button>
                {/* <button onDoubleClick={this.handelClick}>Click</button> */}
                <button onMouseMove={this.handelMouse}>Mouse Move</button>
            </div>
        );
    }
}



export default App;