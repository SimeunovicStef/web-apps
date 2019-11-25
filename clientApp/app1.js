export default function init() {
    fetch('http://127.0.0.1:3000')
        .then(response => response.json())
        .then(data => displayPosts(data))
};

function displayPosts(data) {

    data.forEach(post => {
        let item = document.createElement('li')
        let par1 = document.createElement('h2')
        let titlePar = document.createElement('p')
        let bodyPar = document.createElement('p')

        par1.textContent = post.userId;
        titlePar.textContent = post.title;
        bodyPar.textContent = post.body;

        item.append(par1)
        item.append(titlePar)
        item.append(bodyPar)
        document.querySelector('ul').append(item)
    });
}