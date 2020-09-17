export default class Menu {

    constructor(elem) {

        this._elem = elem;

        elem.onclick = this.onClick.bind(this);

    }

    like(e) {
        (e.className==="fas fa-heart")? e.className = "far fa-heart" : e.className = "fas fa-heart"
        const articleItemText = e.closest(".articles__item-text");
        const articleID = articleItemText.querySelector(".articles__item-text-header").id
        service.likeArticle(articleID)
    }


    onClick(event) {

        let action = event.target.dataset.action;

        if (action) {

            this[action](event.target);

        }

    };

}