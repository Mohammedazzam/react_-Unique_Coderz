import React , {comments, Component} from 'react';





// class Items extends Component{
//     render(){

//         const {items} = this.props;
//         // const theItems =items.map( (item) =>{
//             const theItems =items.map( item =>{
//                 return(
//                 <div key={item.id}>
//                     <p>{item.id}</p>
//                     <p>{item.name}</p>
//                     <p>{item.age}</p>
//                     <div>_____</div>
//                 </div>
//             )
//         })
//         return(
//             <div>
//                 {theItems}
//             </div>
//         )

//     }
// }


//حل آخر لو مافي id
class Items extends Component{
    render(){

        const {items} = this.props;
        // const theItems =items.map( (item) =>{
            const theItems =items.map( item =>{
                return(
                <div key={Math.random()*10}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                    <div>_____</div>
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