import React from "react"
import UserList from './UserList'

class UserPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [{}, {}]
        }
    }


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