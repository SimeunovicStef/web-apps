import User from '../usersFolder/User'
import Constants from '../shared/Constants'

const getUsers = () => {
    return fetch(Constants.mainEndPoint)
        .then(res => res.json())
        .then(userData => {
            console.log(userData);
            return userData.results.map(user => {
                return new User(user)

            })
        })
}

export default getUsers