// Global app controller
import Articles from './models/Articles.js'
import User from './models/User.js';
import {renderArticles} from './views/articlesView.js'
import {addArticleToLS, otherArticles, renderArticle} from './views/articleView.js'
import { renderEditArticle } from './views/editArticleView.js';


const service = new Articles();

export default class Menu {

    constructor(elem) {

        this._elem = elem;

        elem.onclick = this.onClick.bind(this);

    }

    like(e) {
        (e.className==="fas fa-heart")? e.className = "far fa-heart" : e.className = "fas fa-heart"
        const articleItemText = e.closest(".articles__item-text");
        const articleID = articleItemText.querySelector(".articles__item-text-header").id
        service.likeArticle(articleID)
    }


    onClick(event) {

        let action = event.target.dataset.action;

        if (action) {

            this[action](event.target);

        }

    };

}
const init = async () =>{
    if (localStorage.getItem('articles') === null){
  await service.getAllArticles();
}
    if (document.location.pathname=== '/articles.html') {
      renderArticles();
    }
}

init();
if (document.location.pathname !== '/'){
    document.getElementById('username').innerText = `Hello, ${JSON.parse(localStorage.getItem('user'))}`;
}
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
    

    OK.addEventListener('click',  async() => {
        const user = new User;
        const LOGIN_VALUE = EMAIL.value;
        const PASSWORD_VALUE = PASSWORD.value;
        await user.checkUsers(LOGIN_VALUE,PASSWORD_VALUE);
        const loggedUser =  JSON.parse(localStorage.getItem('user'))

        if (loggedUser !== null) {
            MODAL.style.display = "none";
            location.href = "/articles.html";
            return;
        }

        alert('Email or password is wrong')
    });
    
});
}

if (document.location.pathname=== '/create-article.html') {
document.querySelector('#main-button').addEventListener('click',()=>{
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
        console.log(`Hello, ${JSON.parse(localStorage.getItem('user'))}`);
        console.log(document.getElementById('username').innerText)
        if ( JSON.parse(localStorage.getItem('user')) === document.querySelector('.author').innerText ||
        JSON.parse(localStorage.getItem('user')) === 'admin'){
            location.href = "/edit.html";
        }
        else{
            alert('You have no access!');
        }
    });
    document.querySelector('.delete-article').addEventListener('click', ()=>{
        if ( JSON.parse(localStorage.getItem('user')) === document.querySelector('.author').innerText ||
        JSON.parse(localStorage.getItem('user')) === 'admin'){
        service.deleteArticles();
        location.href = "/articles.html";}
        else {
            alert('You have no access!');
        }
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



if(window.location.href.indexOf("articles.html") > -1){
    const articles = document.querySelector(".main-content-articles")
    new Menu(articles);
}else if(window.location.href.indexOf("article.html")> -1){
    const articles = document.querySelector(".other-articles")
    new Menu(articles);
}
