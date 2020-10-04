//Users.js
import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';//shortcut impt


const Users =({users,loading}) =>{
    if(loading)
    {
        return <Spinner />
    }else{
        return (
            <div style={userStyle}>
                {users.map(user => (
                    //<div key={user.id}>{user.login}</div>
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
        
}

Users.protoTypes={
    users: PropTypes.array.isRequired,
    users: PropTypes.bool.isRequired
}
const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}
export default Users
