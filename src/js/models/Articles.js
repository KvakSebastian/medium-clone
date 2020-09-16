import ArticleService from '../services/articles-service.js'

export default class Articles {
    
  async getAllArticles(){
    const service = new ArticleService();
    const res = await service.getArticles()
    localStorage.setItem('articles', JSON.stringify(res));
  }
  getArticle(id){
    const articles = JSON.parse(localStorage.getItem('articles'))
    const res = (articles.filter((item) => item.id == id));
    return res[0];   
  }
  editArticle = (id,newAuthor,newCategory,newTitle,newText,newImage) =>{
    const subject = this.getArticle(id);
    console.log(subject);
    subject.author = newAuthor;
    subject.category = newCategory;
    subject.title = newTitle;
    subject.text = newText;
    subject.img = newImage;
    console.log(subject);
    const articles = JSON.parse(localStorage.getItem('articles'))
    const newArticles = articles.map(item =>item.id == id? item=subject:item );
    localStorage.setItem('articles', JSON.stringify(newArticles));
  }
  addArticles = (author,category,title,text,image) =>{
    const articles = JSON.parse(localStorage.getItem('articles'));
    const maxId = articles.reduce((max, item) => item.id > max ? item.id : max, 0);    
    const subject = {};
    subject.id = +maxId+1;
    subject.author = author;
    subject.category = category;
    subject.title = title;
    subject.text = text;
    subject.img = image;
    subject.date = new Date();
    subject.coments = [];
    subject.isLiked = 'false';
    articles.push(subject);
    localStorage.setItem('articles', JSON.stringify(articles));
  }
  deleteArticles = () => {
    const article = JSON.parse(localStorage.getItem('article'));
    let articles = JSON.parse(localStorage.getItem('articles'));
    const newArticles = articles.filter( item => item.id != article[0].id);
    localStorage.setItem('articles', JSON.stringify(newArticles));
  }
    
}