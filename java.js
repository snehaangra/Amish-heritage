function startDownload(fileUrl, fileName) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById('downloadBtn').addEventListener('click', function() {
    startDownload('4800_001.pdf', 'Student_Copyright_Checklist.pdf');
});

document.getElementById('logBtn').addEventListener('click', function() {
    startDownload('4802_001.pdf', 'TSA_Work_Log.pdf');
});
