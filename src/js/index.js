// Global app controller
import Articles from './models/Articles.js'
import {renderArticles} from './views/articlesView.js'

const service = new Articles();

const init = async () =>{
    if (localStorage.getItem('articles') === null){
  await service.getAllArticles();
}
    if (document.location.pathname=== '/articles.html') {
      renderArticles();
    }
}

init();

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

const ADMIN = new User('admin', 'admin');

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

document.querySelector('#main-button').addEventListener('click',(event)=>{
const author = document.getElementById('psevdo').value;
const category = document.getElementById('cat').value;
const title = document.getElementById('title').value;
const text = document.getElementById('text').value;
const img = 'http://lorempixel.com/640/480/business';
console.log(author,category,title,text,img);
service.addArticles(author,category,title,text,img);
})



