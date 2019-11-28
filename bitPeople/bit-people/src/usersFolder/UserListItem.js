import React from 'react'

{/* <UserListItem user={} /> */ }
const UserListItem = (props) => {

    return (
        <li className="collection-item avatar">
            <img src={props.user.picture} alt="" className="circle responsive-img" />



            <span className="title">Name: {props.user.name}</span>
            <p>Age: {props.user.age}<br />
                {props.user.email}</p>

        </li>

    )
}

export default UserListItem