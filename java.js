document.getElementById('downloadBtn').addEventListener('click', function() {
    const fileUrl = 'path/to/your/file.zip';
    const fileName = 'MyPackage.zip';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
});
