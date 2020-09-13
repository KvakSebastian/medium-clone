// Global app controller
import ArticleService from './services/articles-service.js'

let service = new ArticleService();
const res = service.getResource()
.then(localStorage.setItem('articles', JSON.stringify(res)));
console.log(res);