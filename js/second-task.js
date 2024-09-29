document.addEventListener('DOMContentLoaded', function() {

    const congratsContainer = document.getElementById('congrats-container');
    const saveCongrats = document.getElementById('saveCongrats');
    const congratsTexts = saveCongrats.querySelectorAll('.receiving__link--inner');
    const customCongratsInput = document.getElementById('customCongratsInput');
    const congrats3 = document.getElementById('congrats3');
    const customCongratsLabel = document.getElementById('customCongratsLabel');

    if (saveCongrats.classList.contains('gray')) {
        congratsContainer.style.display = 'none';
    } else {
        congratsContainer.style.display = 'block';
    }
    congratsTexts[0].classList.remove('hidden4');
    congratsTexts[1].classList.add('hidden4');

    customCongratsInput.classList.add('hidden4');
    customCongratsLabel.classList.remove('hidden4');

    document.querySelectorAll('input[name="congrats"]').forEach((radio) => {
        radio.addEventListener('change', function() {
            if (congrats3.checked) {
                customCongratsInput.classList.remove('hidden4');
                customCongratsLabel.classList.add('hidden4');
            } else {
                customCongratsInput.classList.add('hidden4');
                customCongratsInput.value = '';
                customCongratsLabel.classList.remove('hidden4');
            }
        });
    });

    saveCongrats.addEventListener('click', function() {
        let selectedCongrats = document.querySelector('input[name="congrats"]:checked');
        let congratsMessage = '';

        if (selectedCongrats) {
            if (selectedCongrats.value === 'custom') {
                congratsMessage = customCongratsInput.value.trim();
                if (congratsMessage === '') {
                    alert('Пожалуйста, поздравь хорошего человека.');
                    return;
                }
            } else {
                congratsMessage = selectedCongrats.value;
            }

            saveCongrats.classList.remove('gray');
            saveCongrats.classList.add('blue');
            congratsContainer.style.display = 'none';
            congratsTexts[0].classList.add('hidden4');
            congratsTexts[1].classList.remove('hidden4');
            alert('Поздравление выбрано: ' + congratsMessage);
        } else {
            congratsContainer.style.display = 'block';
        }
    });
});
