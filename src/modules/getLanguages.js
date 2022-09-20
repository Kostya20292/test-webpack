export default async (language) => {
    const pageHeader = document.querySelector('header');
    const contentTitle = document.querySelector('.content__title');
    const cards = document.querySelectorAll('.cards__item');

    const languageList = await fetch(`../languages/${language}.json`).then(
        (response) => {
            return response.json();
        }
    );

    if (language === 'es') {
        pageHeader.classList.add('header--es');
    }

    if (language === 'fr') {
        cards.forEach((card) => {
            card.classList.add('card--fr');
        });
        pageHeader.classList.add('header--fr');
    }

    if (language === 'nl') {
        pageHeader.classList.add('header--nl');
    }

    if (language === 'ru') {
        cards.forEach((card) => {
            card.classList.add('card--ru');
        });
        contentTitle.classList.add('content__title--ru');
        pageHeader.classList.add('header--ru');
    }

    return languageList;
};
