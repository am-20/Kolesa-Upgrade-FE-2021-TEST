import { toggleFavoriteRequest, getItemsRequest } from './requests';

const appElement = document.querySelector('#app');

export const appDisplayBlock = (data) => {
    appElement.innerHTML = data.html;
    appElement.style.display = 'block';
};

export const appElementArray = () => {
    Array.from(appElement.querySelector('button')).forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            e.currentTarget.textContent = 'Загрузка...';

            toggleFavoriteRequest(e.currentTarget.dataset.id)
                .then(({ data: buttonData }) => {
                    if (buttonData.result === 'set') {
                        e.currentTarget.textContent = '🌝';
                    } else {
                        e.currentTarget.textContent = '🌚';
                    }
                });
        });
    });
};