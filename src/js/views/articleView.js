import {getSmallDescription} from './articlesView.js'

export const addArticleToLS = (id) => {
    const articles = JSON.parse(localStorage.getItem('articles'));
    const res = (articles.filter((item) => item.id == id));
    localStorage.setItem('article', JSON.stringify(res));
};
export const renderArticle = () => {
    const article = JSON.parse(localStorage.getItem('article'));
    let markup = '';
        markup +=`
        <h2>${article[0].title}</h2>
        <div class='article-text'>      
            <p class='article-text-content'>${article[0].text}.   </p>  
        </div>
        <hr>
        <div class="info-panel">
            <span class="date">${article[0].date}</span>
            <span class="author">${article[0].author}</span>
        </div>`;
    document.querySelector('.edit-article').id=`edit-${article[0].id}`;
    document.querySelector('.delete-article').id=`delete-${article[0].id}`;
    document.getElementById('article-img').src=article[0].img;
    document.querySelector('.article-content').insertAdjacentHTML('afterbegin', markup);
};
export const otherArticles = () => {
    const article = JSON.parse(localStorage.getItem('article'));
    const articles = JSON.parse(localStorage.getItem('articles'));
    const excludeID =  article[0].id;
    const otherArticlesIds = [];
    let generatedID = 0;
    for (let i=0;otherArticlesIds.length!=3;i++){
        generatedID = Math.floor(Math.random()*(articles.length-1)+1);
        if ( generatedID  != excludeID && !otherArticlesIds.includes(generatedID) ){
            otherArticlesIds.push(generatedID);
        }
    }
    let markup = '';
    console.log(articles[0]);
    otherArticlesIds.forEach(ind => {
        console.log(ind);
        articles.forEach(item=>{
            if (item.id == ind ){
                console.log(item.id);
        markup +=`
                    <div class="main-content-articles__item">
                        <div class="articles__item-text" >
                            <div class="articles__item-text-header" id=${item.id}>${item.title}</div>
                            <div class="articles__item-text-description">${getSmallDescription(item.id)}...</div>
                            <div class="articles__item-text-author">${item.author}</div>
                            <div class="articles__item-text-panel">
                                <span>${item.date} - </span>
                                <i data-action="like" class="${(item.isLiked)?"fas fa-heart":"far fa-heart"}"></i>
                            </div>
                        </div>
                        <img  class='article-img' src="${item.img}" alt="">
                    </div>
                `;
            }
        });
    });
    document.querySelector('.other-articles').insertAdjacentHTML('afterbegin', markup);

};
