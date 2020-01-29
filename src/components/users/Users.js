import React, { Component } from 'react'

class Users extends Component {

    state = {
        users: [
        {
                id:'1',
                login: 'mojombo1',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
        },
        {
            id:'2',
            login: 'mojombo2',
            avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/mojombo'
        },
        {
            id:'3',
            login: 'mojombo3',
            avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/mojombo'
        }   
        ]
    }

    render() {
        return (
        <div className='container'>
            <div style ={userStyle}>
            {this.state.users.map(user => (
                <div key={user.id} className='card text-center bg-light'>
                <img
                    src={user.avatar_url} 
                    alt="github user image" 
                    className="round-img m2"
                    style={{width:'60px' }}
                    /><h1>{' '}</h1>
                    <h4>user: {' '}
                    <b> {user.login}</b></h4> 
                    <a href={user.html_url} className='btn btn-success my-1'>VIEW PROFILE</a>
                </div>
            ))}
            </div>
        </div>
        )
    }
}
const userStyle ={
    display:'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '10px'
}

export default Users
