export default class ArticleService {

    getResource = async () => {
      const res = await fetch(`https://5f5bcf95044570001674d370.mockapi.io/medium-clone`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ` +
          `, received ${res.status}`)
      }
      return await res.json();
    };

}