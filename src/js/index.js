// Global app controller
import Articles from './models/Articles.js'
import {renderArticles} from './views/articlesView.js'
нн
const service = new Articles();

const init = async () =>{
  await service.getAllArticles();
    if (document.location.pathname=== '/articles.html') {
      renderArticles();
    }
}

init();

