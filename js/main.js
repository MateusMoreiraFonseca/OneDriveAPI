function moveButton(button) {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;

    var randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
    var randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
    button.style.position = 'absolute'; // Define a posição como absoluta para permitir o movimento
}

function openFileUploader() {
    // Implementação do fileUploader.js
}

function enviarOneDrive(file) {
    // Implementação do oneDriveUploader.js
}
