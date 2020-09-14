import ArticleService from '../services/articles-service.js'

export default class Articles {
    
  async getAllArticles(){
    const service = new ArticleService();
    const res = await service.getResource()
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
    
}