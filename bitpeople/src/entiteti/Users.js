
class User {
    constructor(userData) {
        this.id = userData.login.uuid;
        this.name = userData.name.first;
        this.lastName = userData.name.last;
        this.picture = userData.picture.large;
        this.email = userData.email;
        this.birthday = userData.dob.date;
        this.gender = userData.gender;
    }
    getEmail() {
        const [username, domain] = this.email.split("@");
        let first = username.charAt(0);
        let last = username.charAt(username.length - 1);
        return `${first}...${last}@${domain}`
    }
    getBirthday() {
        let date = new Date(this.birthday).getDate();
        let month = new Date(this.birthday).getMonth();
        let year = new Date(this.birthday).getFullYear();

        return `${date}.${month}.${year} `
    }
    getFullName() {
        return `${this.name} ${this.lastName}`
            ;
    }
    getSearchName() {
        return `${this.name.toLowerCase()} ${this.lastName.toLowerCase()}`;
    }

}
export default User