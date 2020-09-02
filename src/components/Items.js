import React , {comments, Component} from 'react';


// class Items extends Component{
//     render(){

//         const {items} = this.props;
//         const theItems =items.map( item =>{
//            if(item.count > 1){
//                 return(
//                     <div key={item.id}>
//                         <p>{item.id}</p>
//                         <p>{item.name}</p>
//                         <p>{item.age}</p>
//                         <div>_____</div>
//                     </div>
//                 )
//            }
//         })
//         return(
//             <div>
//                 {theItems}
//             </div>
//         )

//     }
// }



// class Items extends Component{
//     render(){

//         const {items} = this.props;
//         const theItems =items.map( item =>{
//            if(item.count > 0){
//                 return(
//                     <div key={item.id}>
//                         <p>{item.id}</p>
//                         <p>{item.name}</p>
//                         <p>{item.age}</p>
//                         <div>_____</div>
//                     </div>
//                 )
//            }
//         })
//         return(
//             <div>
//                 {theItems}
//             </div>
//         )

//     }
// }



// class Items extends Component{
//     render(){

//         const {items} = this.props;
//         const theItems =items.map( item =>{
//            if(item.count > 4){
//                 return(
//                     <div key={item.id}>
//                         <p>{item.id}</p>
//                         <p>{item.name}</p>
//                         <p>{item.age}</p>
//                         <div>_____</div>
//                     </div>
//                 )
//            }else{
//                return(
//                 <div>No Items Large Than 4</div>
//                 )
//            }
//         })
//         return(
//             <div>
//                 {theItems}
//             </div>
//         )

//     }
// }



//المختصرة لهم  و للسابق if
// class Items extends Component{
//     render(){

//         const {items} = this.props;
//         const theItems =items.map( item =>{
//                 return item.count > 1 ? (
//                         <div key={item.id}>
//                             <p>{item.id}</p>
//                             <p>{item.name}</p>
//                             <p>{item.age}</p>
//                             <div>_____</div>
//                         </div>
//                 ): null
//         })
//         return(
//             <div>
//                 {theItems}
//             </div>
//         )

//     }
// }



class Items extends Component{
    render(){

        const {items} = this.props;
        const theItems =items.map( item =>{
                return item.count > 2 ? (
                        <div key={item.id}>
                            <p>{item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.age}</p>
                            <div>_____</div>
                        </div>
                ): null
        })
        return(
            <div>
                {theItems}
            </div>
        )

    }
}


export default Items;