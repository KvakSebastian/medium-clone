const articles = JSON.parse(localStorage.getItem('articles'));

const getSmallDescription = (id) =>{
  const item = articles.filter((item)=>item.id == id);
  let newItem = item[0].text.slice(0,70);
    return newItem;
}

export const renderArticles = () => {
  let markup = '';
  articles.forEach(element => {
    markup +=`
            <div class="main-content-articles__item" id=${element.id}>
               <div class="articles__item-text">
                    <div class="articles__item-text-header"><span>${element.title}</span></div>
                    <div class="articles__item-text-description">${getSmallDescription(element.id)}...</div>
                    <div class="articles__item-text-author">${element.author}</div>
                    <div class="articles__item-text-panel">
                        <span>${element.date} - </span>
                        <i class="far fa-heart"></i>
                    </div>
                </div>
                <img  class='article-img' src="${element.img}" alt="">
            </div>`
  });
  document.querySelector('.main-content-articles').insertAdjacentHTML('afterbegin', markup);
};
