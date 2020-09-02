import React , {comments, Component} from 'react';

// class Items extends Component{
//     render(){

//         return(
//             <div>
//                 <p>{this.props.id}</p>
//                 <p>{this.props.name}</p>
//                 <p>{this.props.age}</p>
//             </div>
//         )
//     }
// }


// class Items extends Component{
//     render(){
//         const id = this.props.id;
//         const name = this.props.name;
//         const age = this.props.age;
//         return(
//             <div>
//                 <p>{id}</p>
//                 <p>{name}</p>
//                 <p>{age}</p>
//             </div>
//         )
//     }
// }




class Items extends Component{
    render(){

        const {items} = this.props;
        // const theItems =items.map( (item) =>{
            const theItems =items.map( item =>{
                return(
                <div>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                </div>
            )
        })
        return(
            <div>
                {theItems}
            </div>
        )

    }
}
export default Items;