const pageHeader = document.querySelector('header');
const cards = document.querySelectorAll('.cards__item');
const contentTitle = document.querySelector('.content__title');
const continueBtn = document.querySelector('.cards__button');
const urlLanguage = location.search.substring(6);
const currentLanguage = urlLanguage || navigator.language || 'en';
const elementsContent = document.querySelectorAll('[data-content]');

const changeLink = () => {
    cards.forEach((item) => {
        if (!item.classList.contains('cards__item-hide')) {
            item.dataset.link === 'apple'
                ? continueBtn.setAttribute('href', 'https://www.apple.com')
                : continueBtn.setAttribute('href', 'https://google.com');
        }
    });
};

cards.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('cards__item-hide')) {
            cards.forEach((card, idx) => {
                card.classList.add('cards__item-hide');
                card.style.background = `url(./img/shape-${idx}-hide.svg) no-repeat`;
            });
            cards[index].classList.remove('cards__item-hide');
            cards[
                index
            ].style.background = `url(./img/shape-${index}.svg) no-repeat`;
        }
    });
});

const getLanguages = async (language) => {
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

const translatePage = async () => {
    const lang = await getLanguages(currentLanguage);

    for (let el of elementsContent) {
        const elText = el.dataset.content;
        el.innerHTML = lang[elText];

        if (el.dataset.cost) {
            if (el.innerHTML.includes('{{price}}/')) {
                el.innerHTML = el.innerHTML.replace(
                    '{{price}}/',
                    `${el.dataset.cost} `
                );
            } else if (el.innerHTML.includes('{{price}}')) {
                el.innerHTML = el.innerHTML.replace(
                    '{{price}}',
                    `${el.dataset.cost} `
                );
            }
        }
    }
};

continueBtn.addEventListener('click', changeLink);
translatePage();
