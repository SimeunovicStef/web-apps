class User {
    constructor(userData) {

        this.name = userData.name.first
        this.age = userData.dob.age;
        this.email = userData.email
        this.picture = userData.picture.medium;

    }



    getId() {
        return this.id.name + this.id.value;
    }
    hideEmail() {
        const emailArr = this.email.split('@');
        const firstThreeLetters = emailArr[0].slice(0, 3);
        const lastThreeLetters = emailArr[0].slice(-3);
        return `${firstThreeLetters}...${lastThreeLetters}@${emailArr[1]}`;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }


}
export default User
