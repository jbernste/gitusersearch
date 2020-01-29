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
            login: 'defunkt',
            avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
            html_url: 'https://github.com/defunkt'
        },
        {
            id:'3',
            login: 'jbernste',
            avatar_url: 'https://avatars0.githubusercontent.com/u/52841665?v=460',
            html_url: 'https://github.com/jbernste'
        },
        {
            id:'4',
            login: 'pjhyett',
            avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
            html_url: 'https://github.com/pjhyett'
        },
        {
            id:'5',
            login: 'wycats',
            avatar_url: 'https://avatars0.githubusercontent.com/u/4?v=4',
            html_url: 'https://github.com/wycats'
        },
        {
            id:'6',
            login: 'ivey',
            avatar_url: 'https://avatars0.githubusercontent.com/u/6?v=4',
            html_url: 'https://github.com/ivey'
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
    gridGap: '1rem'
}

export default Users
