function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Copied to clipboard!';
        successMessage.style.position = 'fixed';
        successMessage.style.bottom = '20px';
        successMessage.style.right = '20px';
        successMessage.style.backgroundColor = 'green';
        successMessage.style.color = 'white';
        successMessage.style.padding = '10px';
        successMessage.style.borderRadius = '5px';
        document.body.appendChild(successMessage);

        setTimeout(() => {
            document.body.removeChild(successMessage);
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}