export const renderEditArticle = (id) => {
    const article = JSON.parse(localStorage.getItem('article'));
    document.querySelector('.h2-title').value = 'Змінити статтю'
    document.getElementById('psevdo').value = article[0].author;
    document.getElementById('cat').value = article[0].category;
    document.getElementById('title').value = article[0].title;
    document.getElementById('text').value = article[0].text;
    let markup = '';
};