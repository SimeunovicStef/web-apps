import User from './user.js'

function getSearchText(text, onSuccess) {
    const searchUrl = `https://api.github.com/search/users?q=${text}`;


    $.get(searchUrl, function (data) {
        const usersLIst = data.items
        const myUsers = usersLIst.map(elem => { user = new User(elem.id, elem.login, elem.avatar_url) });
        console.log(myUsers);
        onSuccess(myUsers)

        /*  for (var i = 0; i < usersLIst.length; i++) {
             const userData = usersLIst[i]
 
 
             const user = new User(userData.id, userData.login, userData.avatar_url)
             myUsers.push(user) */

    });
}

export { getSearchText }

