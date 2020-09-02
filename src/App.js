import React, { Component } from 'react';

import Child from './Child';
import Items from './components/Items';






// class App extends Component {

//     state ={
//         name:''
//     }

//     handleChange =(e) =>{
//         this.setState({
//             name:e.target.value
//         })
//     }

//     handelSubmit= (e) =>{
//         e.preventDefault();
//         console.log(this.state.name)
        
//     }

//     render() {
//         return ( 
//             <div className = "App" > 
//             Forme Part 1
//                 <form onSubmit={this.handelSubmit}>
//                     <textarea type="text" onChange={this.handleChange}/>
//                     <input type="submit" value="send"/>
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
                    <select onChange = {this.handleChange}>
                        <option value="value1">Value 1</option>
                        <option value="value2">Value 2</option>
                        <option value="value3">Value 3</option>
                    </select>
                    <input type="submit" value="send"/>
                </form>
                {this.state.name}
            </div>
        );
    }
}


export default App;