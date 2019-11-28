import React from "react"
import UserList from './UserList'
import getUsers from '../services/userService'
import User from './User'
class UserPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [{}, {}]
        }
    }
    // componentDidMount() {
    //     getUsers()
    //         .then((users) => {
    //             console.log(users)
    //             this.setState({ users: users })
    //         })

    // }


    render() {
        if (this.state.users.length === 0) {

            return <h2>Loading...</h2>
        }
        return (
            <div>
                <h1>Profiles</h1>
                <UserList users={this.state.users} />
            </div>
        )
    }
}


export default UserPage