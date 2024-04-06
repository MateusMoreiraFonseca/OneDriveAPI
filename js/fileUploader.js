function openFileUploader() {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Aceita apenas imagens
    fileInput.click(); // Simula o clique no botão de seleção de arquivo
    fileInput.addEventListener('change', function (event) {
        var file = event.target.files[0];
        if (file) {
            // Aqui você pode enviar o arquivo para o OneDrive ou fazer o que quiser com ele
            console.log('Arquivo selecionado:', file);
            alert('Te amo! ');

            // Envio para o OneDrive
            enviarOneDrive(file);
        } else {
            console.log('Nenhum arquivo selecionado.');
        }
    });
}
