const captchaContainer = document.querySelector('.captcha-container');
const helpButton = document.getElementById('helpButton');
const captchaInput = document.getElementById('captchaInput');
const captchaSubmit = document.getElementById('captchaSubmit');
const doneButton = document.getElementById('doneButton');
const captchaTitle = document.getElementById('captcha-task__title');
const captchaImg = document.getElementById('id-captcha__img');
helpButton.classList.remove('hidden');
captchaContainer.classList.add('hidden');
doneButton.classList.add('hidden');
captchaTitle.classList.remove('hidden');

helpButton.addEventListener('click', function() {
    captchaContainer.classList.remove('hidden');
    captchaTitle.classList.add('hidden');
    helpButton.classList.add('hidden');
});

captchaSubmit.addEventListener('click', function() {
    const inputText = captchaInput.value.trim().toLowerCase();
    if (inputText === 'кочерыжка') {
        captchaSubmit.classList.add('hidden');
        captchaInput.classList.add('hidden');
        doneButton.classList.remove('hidden');
        captchaTitle.classList.remove('hidden');
        captchaImg.classList.add('hidden')
        alert('Новое достижение: дешифратор');
    } else {
        alert('Херня, давай по новой!');
    }
});
document.querySelector('#getGiftButton').addEventListener('click', function() {
    const saveCongrats = document.getElementById('saveCongrats');
    const saveButton = document.getElementById('saveSelection');
    const doneButton = document.getElementById('doneButton');
    if (saveCongrats.classList.contains('blue') && saveButton.classList.contains('blue') && !saveCongrats.classList.contains('hidden')) {
        window.location.href = 'Инструктаж.html';
    } else {
        alert('Сначала помоги Мишане');
    }
});
