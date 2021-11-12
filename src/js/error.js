const errorElement = document.querySelector('#error');

export const hideError = () => {
    errorElement.style.display = 'none';
};

export const showError = () => {
    errorElement.innerHTML = 'Произошла ошибка, попробуйте ещё раз.';
    errorElement.style.display = 'block';
};