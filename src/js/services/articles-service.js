export default class ArticleService {

    _apiBase = 'https://5f5bcf95044570001674d370.mockapi.io/';

    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    };
  
    getArticles = async () => {
      const res = await this.getResource(`/medium-clone`);
      return res;
    };
  
    getUsers = async () => {
      const user = await this.getResource(`/user`);
      return user;
    };

}