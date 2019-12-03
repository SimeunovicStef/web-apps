import React from 'react'

const UserListItem = (props) => {
    if (props.user.gender === "female") {
        return (
            <li className="collection-item avatar female" >
                <img src={props.user.picture} alt="" className="circle responsive-img" />
                <span className="title"> <i className="tiny material-icons">person</i>  {props.user.getFullName()}</span>
                <p> <i className="tiny material-icons">cake</i>  {props.user.getBirthday()}</p>
                <p> <i className="tiny material-icons">mail</i>  {props.user.getEmail()}</p>
            </li>
        )
    }

    return (
        <li className="collection-item avatar">
            <img src={props.user.picture} alt="" className="circle responsive-img" />
            <span className="title"> <i className="tiny material-icons">person</i>  {props.user.getFullName()}</span>
            <p> <i className="tiny material-icons">cake</i>  {props.user.getBirthday()}</p>
            <p> <i className="tiny material-icons">mail</i>  {props.user.getEmail()}</p>
        </li>
    )

}
export default UserListItem
