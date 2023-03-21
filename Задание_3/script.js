const btn = document.querySelector('button');
const statusTextField = document.querySelector('#status');
// Функция, выводящая текст об ошибке
const error = () => {
    statusTextField.textContent = 'Информация о местоположении недоступна';
}
// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
    const {coords} = position;
    statusTextField.innerText = `широта: ${coords.latitude} °, долгота: ${coords.longitude} °`;
}
btn.addEventListener('click', () => {
    document.querySelector('#width').innerText = `Ширина экрана: ${screen.width}`;
    document.querySelector('#height').innerText = `Высота экрана: ${screen.height}`;

    if (!navigator.geolocation) {
        statusTextField.innerText = 'Информация о местоположении недоступна';
    } else {
        statusTextField.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
})