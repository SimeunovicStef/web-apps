import React from 'react'
import UserListItem from './UserListItem'

const UserList = (props) => {
    const { users } = props;

    const userItems = users.map(user => {
        return <UserListItem user={user} />
    })

    return (
        <ul class="collection">
            {userItems}
        </ul>
    )
}

export default UserList