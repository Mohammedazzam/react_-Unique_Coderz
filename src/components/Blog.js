import React , {component, Component} from 'react';
import axios from 'axios';

class Blog extends Component{

    state={
        users:[

        ]
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
            console.log(res.data)
            this.setState({
                users:res.data
            })
        })
    }

    render(){
        return(
            <div>
                <h2>Blog</h2>
                <p>This Is Blog Section</p>

                <div>
        {this.state.users.map(user => <div>{user.name} and username is{user.username}</div>)}
                </div>

            </div>
        )
    }
}

export default Blog;