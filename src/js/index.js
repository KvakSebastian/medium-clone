// Global app controller
import Articles from './models/Articles.js'
import {renderArticles} from './views/articlesView.js'
import {addArticleToLS, otherArticles, renderArticle} from './views/articleView.js'
import { renderEditArticle } from './views/editArticleView.js';


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
if (document.location.pathname=== '/') {

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
}

if (document.location.pathname=== '/create-article.html') {
document.querySelector('#main-button').addEventListener('click',(event)=>{
const author = document.getElementById('psevdo').value;
const category = document.getElementById('cat').value;
const title = document.getElementById('title').value;
const text = document.getElementById('text').value;
const img = 'http://lorempixel.com/640/480/business';
console.log(author,category,title,text,img);
service.addArticles(author,category,title,text,img);
});
}
if (document.location.pathname=== '/articles.html') {
    document.querySelector('.main-content-articles').addEventListener('click',(event)=>{
    if (event.target.className === 'articles__item-text-header'){
    console.log(event.target.id);
    addArticleToLS(event.target.id);
    location.href = "/article.html";
}
});
}
if (document.location.pathname === '/article.html') {
    renderArticle();
    otherArticles();
    document.querySelector('.edit-article').addEventListener('click', ()=>{
        location.href = "/edit.html";
    });
    
}
if (document.location.pathname === '/edit.html') {
    renderEditArticle();   
    document.querySelector('#main-button').addEventListener('click',(event)=>{
        event.preventDefault();
        const author = document.getElementById('psevdo').value;
        const category = document.getElementById('cat').value;
        const title = document.getElementById('title').value;
        const text = document.getElementById('text').value;
        const img = 'http://lorempixel.com/640/480/business';
        console.log(author,category,title,text,img);
        const article = JSON.parse(localStorage.getItem('article'));
        service.editArticle(article[0].id,author,category,title,text,img);
        location.href = "/articles.html";
        });
}

