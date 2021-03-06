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
    subject.author = newAuthor;
    subject.category = newCategory;
    subject.title = newTitle;
    subject.text = newText;
    subject.img = newImage;
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
    subject.isLiked = false;
    articles.push(subject);
    localStorage.setItem('articles', JSON.stringify(articles));
  }
  deleteArticles = () => {
    const article = JSON.parse(localStorage.getItem('article'));
    let articles = JSON.parse(localStorage.getItem('articles'));
    const newArticles = articles.filter( item => item.id != article[0].id);
    localStorage.setItem('articles', JSON.stringify(newArticles));
  }
  likeArticle = (id) =>{
    const subject = this.getArticle(id);
    subject.isLiked = !subject.isLiked;
    const articles = JSON.parse(localStorage.getItem('articles'))
    const newArticles = articles.map(item =>item.id == id? item=subject:item );
    localStorage.setItem('articles', JSON.stringify(newArticles));
  }
  addComment = (com,user) => {
    const articles = JSON.parse(localStorage.getItem('articles'));
    const article = JSON.parse(localStorage.getItem('article'));
    const newArticles = articles.map(item =>{ 
      if(item.id == article[0].id){
        let comments = item.comments;
        let obj = {};
        obj.comment = com;
        obj.author = user ;
        comments.push(obj);
        return {...item,comments}
      }
       else {return item}
      });
    localStorage.setItem('articles', JSON.stringify(newArticles));
  }
  deleteComment = (author,com) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const articles = JSON.parse(localStorage.getItem('articles'));
    const article = JSON.parse(localStorage.getItem('article'));
    if (author === user || user =='admin'){
      const newArticles = articles.map( item => {
        if(item.id == article[0].id){
         let newComments = item.comments.filter(c => c.comment !== com)
          return {...item,comments:newComments}
        }
        else {
          return item
        }
      });
      localStorage.setItem('articles', JSON.stringify(newArticles));
    }
  }
    
}