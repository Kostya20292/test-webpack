import getLanguages from './getLanguages';

export default async () => {
    const urlLanguage = location.search.substring(6);
    const currentLanguage = urlLanguage || navigator.language || 'en';
    const elementsContent = document.querySelectorAll('[data-content]');

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
