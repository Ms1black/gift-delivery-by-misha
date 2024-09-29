document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('tvWjq_MHZU4zG0XCc');

    function sendEmail(toName, fromName, messageContent) {
        emailjs.send('service_ja8e10n', 'template_5onj21a', {
            to_name: toName,
            from_name: fromName,
            message: messageContent
        })
            .then(function(response) {
                console.log('Success:', response.status, response.text);
            }, function(error) {
                console.log('Error:', error);
            });
    }

    document.querySelector('#saveBtn').addEventListener('click', function() {
        let selectedGif = document.querySelector('input[name="gif"]:checked');
        let selectedCongrats = document.querySelector('input[name="congrats"]:checked');
        let congratsMessage = '';

        if (selectedCongrats) {
            if (selectedCongrats.value === 'custom') {
                let customCongratsInput = document.getElementById('customCongratsInput');
                congratsMessage = customCongratsInput.value.trim();
            } else {
                congratsMessage = selectedCongrats.value;
            }
        }

        if (selectedGif) {
            let toName = 'Recipient Name';
            let fromName = 'Sender Name';
            let messageContent = selectedGif.value + '\nПоздравление: ' + congratsMessage; // Добавляем поздравление к сообщению
            sendEmail(toName, fromName, messageContent);
        }
    });
});