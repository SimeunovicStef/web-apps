import User from '../entiteti/Users'

class UserService {
    invalidateCache() {
        localStorage.removeItem('apiUsers');
    }

    fetchAll() {
        const cachedApiUsers = JSON.parse(localStorage.getItem('apiUsers'));

        if (Array.isArray(cachedApiUsers) && cachedApiUsers.length) {
            // return new Promise(res => res(cachedApiUsers.map(apiUser => new User(apiUser))));
            return Promise.resolve(cachedApiUsers.map(apiUser => new User(apiUser)));
        }

        return fetch('https://randomuser.me/api/?results=15')
            .then(res => res.json())
            .then(data => {
                const apiUsers = data.results;

                localStorage.setItem('time', JSON.stringify(new Date().getTime()));
                localStorage.setItem('apiUsers', JSON.stringify(apiUsers));

                return apiUsers.map(apiUser => new User(apiUser))
            });
    }
}

export default new UserService()
