
const articles = JSON.parse(localStorage.getItem('articles'));

export const getSmallDescription = (id) =>{
    const item = articles.filter((item)=>item.id == id);
    let newItem = item[0].text.slice(0,70);

    return newItem;

}

export const renderArticles = (arr) => {
    let markup = '';
    let renderArt;
    if(arr){
        document.querySelector(".main-content-articles").innerHTML = ""
        renderArt = arr
    }else {
        renderArt=articles
    }
    renderArt.forEach(element => {
        markup +=`
                    <div class="main-content-articles__item">
                        <div class="articles__item-text" >
                            <div class="articles__item-text-header" id=${element.id}>${element.title}</div>
                            <div class="articles__item-text-description">${getSmallDescription(element.id)}...</div>
                            <div class="articles__item-text-author">${element.author}</div>
                            <div class="articles__item-text-panel">
                                <span>${element.date} - </span>
                                <i data-action="like" class="${(element.isLiked)?"fas fa-heart":"far fa-heart"}"></i>
                            </div>
                        </div>
                        <img  class='article-img' src="${element.img}" alt="">
                    </div>
                `
        
    });
    document.querySelector('.main-content-articles').insertAdjacentHTML('afterbegin', markup);
};
