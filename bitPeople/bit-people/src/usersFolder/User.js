class User {
    constructor(userData) {
        this.id = userData.id.value
        this.name = userData.name.first
        this.dob = userData.dob.date
        this.email = userData.email
        this.picture = userData.picture.medium
    }
}

export default User