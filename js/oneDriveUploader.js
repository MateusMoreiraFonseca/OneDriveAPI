async function uploadImageToOneDrive(accessToken, file, oneDriveFolder) {
    try {
        const url = `https://graph.microsoft.com/v1.0/me/drive/root:${oneDriveFolder}/${file.name}:/content`;

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': file.type,
            },
            body: file,
        });

        if (response.ok) {
            console.log('Imagem enviada com sucesso!');
        } else {
            console.error(`Erro ao enviar imagem: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Erro inesperado:', error.message);
    }
}

export { uploadImageToOneDrive };
