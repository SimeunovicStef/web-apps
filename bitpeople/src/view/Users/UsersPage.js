import React from 'react'
import UserList from './UsersList'
import UserService from '../../service/User-service'
import GridList from '../Users/UserGridList'
import ActionButton from './ActionButton';
import Loading from '../components/Loading/Loading'
import NotFound from '../components/Not Found/NotFound'
import TimeAgo from 'react-timeago'



export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGrid: false,
            users: [],
            query: '',
            loading: true,
            hits: []
        };
    }

    componentDidMount() {
        this.loadUsers()
    }

    loadUsers = () => {
        this.setState({ loading: true })

        UserService.fetchAll()
            .then((users) => this.setState({ users: users, loading: false }))
    }

    onReload = () => {
        UserService.invalidateCache();
        this.loadUsers();
    }

    changeLayout = () => {
        this.setState(prevState => {
            return { isGrid: !prevState.isGrid }

        });
    };

    inputSearch = (val) => {
        this.setState({ query: val })
    };

    // onRefreshUsersHandler = () => {
    //     this.setState({ loading: true }, () => {
    //         this.loadUsers();
    //         setLastUpdate();
    //     })

    // }


    render() {

        if (this.state.loading === true) {
            return <Loading />
        }
        const filteredUsers = this.state.users.filter(element =>
            element.getSearchName().includes(this.state.query))

        const component = filteredUsers.length === 0 ? <NotFound /> :
            (this.state.isGrid ? (
                <GridList users={filteredUsers} />)
                : (<UserList users={filteredUsers} />
                ));

        let male = filteredUsers.filter(element => element.gender === "male").length;
        let female = filteredUsers.filter(element => element.gender === "female").length;


        return (
            <div>
                <h1>Users</h1>
                <ActionButton changeLayout={this.changeLayout} loadUsers={this.onReload} onSearch={this.inputSearch} isGrid={this.state.isGrid} />
                <p className="paragraph">{`Male: ${male} Female: ${female}`}</p>
                {
                    component
                }
                <p className='middle'>List Uploaded: <span>{<TimeAgo date={new Date(JSON.parse(localStorage.getItem('time')))} />}</span></p>
            </div >
        )
    }
}
