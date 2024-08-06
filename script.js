const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/'
};

document.getElementById('convertButton').addEventListener('click', function() {
    convertToMorse();
});

function convertToMorse() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let outputText = '';

    for (let char of inputText) {
        if (morseCode.hasOwnProperty(char)) {
            outputText += morseCode[char] + ' ';
        }
    }

    const outputElement = document.getElementById('outputText');
    outputElement.innerHTML = ''; // Limpiar contenido anterior
    outputElement.textContent = outputText.trim(); // Añadir el resultado final sin animación

    // Añadir animación de máquina de escribir
    let index = 0;
    const typingSpeed = 50; // Ajustar la velocidad de escritura aquí
    function typeWriter() {
        if (index < outputText.length) {
            outputElement.innerHTML += outputText.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    outputElement.innerHTML = '';
    typeWriter();
}
