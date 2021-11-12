const errorElement = document.querySelector('#error');

export const errorDisplayNone = () => {
    console.log("before error");
    errorElement.style.display = 'none';
    console.log("after error");
};

export const errorOccured = () => {
    errorElement.innerHTML = 'Произошла ошибка, попробуйте ещё раз.';
    errorElement.style.display = 'block';
};