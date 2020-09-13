// Global app controller
import ArticleService from './services/articles-service.js'

let service = new ArticleService();
const res = service.getResource()
.then();
console.log(res);