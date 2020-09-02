import React, { Component } from 'react';

import Child from './Child';
import Items from './components/Items';


// class App extends Component {

//     handleChange =(e) =>{
//         console.log(e.target.value)
//     }

//     render() {
//         return ( 
//             <div className = "App" > 
//             Forme Part 1
//                 <form>
//                     <input type="text" onChange={this.handleChange}/>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }




// class App extends Component {

//     state ={
//         name:''
//     }

//     handleChange =(e) =>{
//         this.setState({
//             name:e.target.value
//         })
//     }

//     render() {
//         return ( 
//             <div className = "App" > 
//             Forme Part 1
//                 <form>
//                     <input type="text" onChange={this.handleChange}/>
//                     <button>Submit</button>
//                 </form>
//                 {this.state.name}
//             </div>
//         );
//     }
// }



class App extends Component {

    state ={
        name:''
    }

    handleChange =(e) =>{
        this.setState({
            name:e.target.value
        })
    }

    handelSubmit= (e) =>{
        e.preventDefault();
        console.log(this.state.name)
        
    }

    render() {
        return ( 
            <div className = "App" > 
            Forme Part 1
                <form onSubmit={this.handelSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                {this.state.name}
            </div>
        );
    }
}

export default App;