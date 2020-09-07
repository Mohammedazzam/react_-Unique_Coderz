import React , {comments, Component} from 'react';
import "./items.css"

class Items extends Component{
    render(){

        const {items} = this.props;
        const theItems =items.map( item =>{
                return item.count > 0 ? (
                        <div className="item" key={item.id}>
                            <p>{item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.age}</p>
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