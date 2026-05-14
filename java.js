document.getElementById('downloadBtn').addEventListener('click', function() {
    const fileUrl = '4800_001.pdf'; 
    const fileName = 'Student_Copyright_Checklist.pdf';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
