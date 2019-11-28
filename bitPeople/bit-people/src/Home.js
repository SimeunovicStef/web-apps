// import React, { Component, Fragment } from 'react'
// import Header from './utilities/Header'
// import getUsers from './services/userService'
// import Footer from './utilities/Footer'
// import UserList, { userList } from './usersFolder/UserList'
// import Loading from './utilities/Loading'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gridLayout: getViewMode(),
            users: [],
            loading: true
        }
    }

    loadUsers = () => {

        getUsers()
            .then(Users => {
                console.log(Users);
                this.setState({ users, loading: false })
                saveUsers(users);
            })
    }

    onRefreshUsersHandler = () => {
        this.setState({ loading: true }, () => {
            this.loadUsers();
            setLastUpdate();
        })
    }
    componentDidMount = () => {
        const users = getUsersFromStorage();
        if (users) {
            this.setState({ users, loading: false })

        }
        else {
            this.loadUsers();
        }
    }

    onLayoutChange = () => {
        const newGridLayoutState = !this.state.gridLayout;
        this.setState({ gridLayout: newGridLayoutState }, () => {
            setViewMode(newGridLayoutState);
        })
    };

    render() {
        const { loading, gridLayout, users } = this.state;

        return (
            <Fragment>

                <Header
                    changeLayout={this.onLayoutChange}
                    gridLayout={gridLayout}
                    refreshUsers={this.onRefreshUsersHandler}
                    displayButtons={true} />

                <Footer />
            </Fragment>
        )
    }



}



// export default Home;