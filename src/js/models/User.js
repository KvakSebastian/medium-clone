import ArticleService from '../services/articles-service.js'

export default class User {
    
  async getUsers(){
    const service = new ArticleService();
    const res = await service.getUsers()
    return res;  
  }
  async checkUsers(log,pass){
    const res = await this.getUsers();
    let isUser = false;
    res.forEach(user => {
    if (user.name === log && user.password === pass){
    localStorage.setItem('user', JSON.stringify(user.name));
    }  
    });
  }
  
}