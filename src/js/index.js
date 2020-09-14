// Global app controller
import ArticleService from './services/articles-service.js'

let service = new ArticleService();
const res = service.getResource()
    .then(localStorage.setItem('articles', JSON.stringify(res)));
console.log(res);
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

const ADMIN = new User('admin@admin.com', 'qwerty');

document.addEventListener('DOMContentLoaded', function() {
    const MODAL = document.getElementById("modalWindow");
    const BTNS = document.querySelectorAll(".getStarted");
    const SPAN = document.getElementsByClassName("closeModalWindow")[0];
    const OK = document.querySelector('#modalWindow form input[type="button"]');
    const EMAIL = document.querySelector('#modalWindow form [name="email"]');
    const PASSWORD = document.querySelector('#modalWindow form [name="password"]');

    BTNS.forEach(BTN => {
        BTN.addEventListener('click', function() {
            MODAL.style.display = "block";
        })
    });

    SPAN.addEventListener('click', function() {
        MODAL.style.display = "none";
    });

    OK.addEventListener('click', function() {
        const EMAIL_VALUE = EMAIL.value;
        const PASSWORD_VALUE = PASSWORD.value;

        if ((EMAIL_VALUE === ADMIN.email) && (PASSWORD_VALUE === ADMIN.password)) {
            MODAL.style.display = "none";
            location.href = "/articles.html";
            return;
        }

        alert('Email or password is wrong')
    });

});