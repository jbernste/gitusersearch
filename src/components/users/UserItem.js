import React, { Component } from 'react';


class UserItem extends Component {
    constructor() {
        super();
        this.state = {
        id:'1',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
    }
}
    render() {
        return (
        <div className='container'>
            <div className='card text-center bg-light'>
               <img
                src={this.state.avatar_url} 
                alt="github user image" 
                className="round-img m2"
                style={{width:'60px' }}
                /><h1>{' '}</h1>
                <h4>user: {' '}
                <b> {this.state.login}</b></h4> 
                <a href={this.state.html_url} className='btn btn-success my-1'>VIEW PROFILE</a>
            </div>
        </div>
        );
    }
}

export default UserItem
