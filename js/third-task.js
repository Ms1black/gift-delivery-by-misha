document.addEventListener('DOMContentLoaded', function() {
    const gifContainer = document.getElementById('gif-container');
    const saveButton = document.getElementById('saveSelection');
    const buttonTexts = saveButton.querySelectorAll('.receiving__link--inner');
    buttonTexts[0].classList.remove('hidden');
    buttonTexts[1].classList.add('hidden');

    saveButton.addEventListener('click', function() {
        if (saveButton.classList.contains('gray')) {
            gifContainer.style.display = 'block';
        } else {
            gifContainer.style.display = 'none';
        }

        let selectedGif = document.querySelector('input[name="gif"]:checked');
        if (selectedGif) {
            saveButton.classList.remove('gray');
            saveButton.classList.add('blue');
            gifContainer.style.display = 'none';
            buttonTexts[0].classList.add('hidden');
            buttonTexts[1].classList.remove('hidden');
            alert('Новое достижение: ' + selectedGif.value);
        }
    });
});