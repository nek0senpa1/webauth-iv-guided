import React,  { Component } from 'react';
import axios from 'axios';


import requiresAuth from '../auth/requiresAuth';

class Users extends Component {
    state = {
        users: [],
    }

    componentDidMount() {
        axios.get('/users')
        .then(res => {
            this.setState({
                users: res.data,
            })
        })
    }


    render() {
        return (
            <div>
                <h2>List of Users</h2>
                
                    {this.state.users.map( user => {
                        return <li>{user.username}</li>
                    })}
                
            </div>
        )
    }
}

export default requiresAuth ( Users );