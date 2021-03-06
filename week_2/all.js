const url = 'https://vue3-course-api.hexschool.io/v2';
const path = 'vue_learn';

const mailInput = document.querySelector('#username');
const pawInput = document.querySelector('#password');
const logBtn = document.querySelector('#login');

logBtn.addEventListener('click', login);

function login() {
    const username = mailInput.value;
    const password = pawInput.value;
    console.log(username, password);
    const user = {
        username,
        password,
    };

    axios
        .post(`${url}/admin/signin`, user)
        .then((response) => {
            window.location = 'product.html';
        })
        .catch((error) => {
            console.dir(error);
            window.location = 'index.html';
        });
    cleanstring();
}
function cleanstring() {
    mailInput.value = '';
    pawInput.value = '';
}
