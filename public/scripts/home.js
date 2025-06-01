const fileInput = document.getElementById('file-input');
const uploadBtn = document.getElementById('upload-btn');
const output = document.getElementById('output');

uploadBtn.addEventListener('click', () =>{
    handleFile(fileInput.files[0]);
});


function handleFile(file) {
    if (!file || file.type !== 'application/pdf') {
    output.textContent = 'Please upload a valid PDF file.';
    return;
    }

    const reader = new FileReader();
    reader.onload = async function () {
    const arrayBuffer = reader.result;

    simulatePDFParsing(arrayBuffer);
    };
    reader.readAsArrayBuffer(file);
}

function simulatePDFParsing(buffer) {
    const dummyItems = [
    { item: 'Milk', price: '1.20' },
    { item: 'Bread', price: '0.80' },
    { item: 'Eggs', price: '2.00' }
    ];

    output.innerHTML = dummyItems
    .map(i => `${i.item}, ${i.price}`)
    .join('\n');
}