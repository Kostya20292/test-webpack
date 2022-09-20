export default () => {
    const cards = document.querySelectorAll('.cards__item');
    const continueBtn = document.querySelector('.cards__button');

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

    continueBtn.addEventListener('click', changeLink);
};
