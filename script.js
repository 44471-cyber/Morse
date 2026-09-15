let input = document.querySelector(".input");
let output = document.querySelector(".output");
let translate = document.getElementById("translate");
let reset = document.getElementById("reset");
let title = document.getElementById("morse-title");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (reset.style.display === "inline-block") {
            resetBtn();
        } else {
            translateBtn();
        }
    }
});

function translateBtn() {
    const morse = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
        'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
        'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
        'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        ' ': ' / ', '/': '-..-.', '=': '-...-', '(': '-.--.', ')': '-.--.-',
        '-': '-....-', '.': '.-.-.-', '&': '.-...', '$': '...-..-', '"': '.-..-.',
        "'": '.----.', '!': '-.-.--', '+': '.-.-.', '@': '.--.-.', '?': '..--..',
        ',': '--..--', ':': '---...', ';': '-.-.-.', 'Ł': '.-..-', 'Ĝ': '--.-.',
        'Æ': '.-.-', 'Ĵ': '.---.', 'Ç': '-.-..', 'Ŭ': '..--', 'Ð': '..--.', 'Ó': '---.',
        'Ø': '---.', 'Š': '----', 'Ż': '--..-', 'Ź': '--..-.', 'Þ': '.--..', 'Å': '.--.-',
        'É': '..-..', 'È': '.-..-', 'À': '.--.-', 'Ŝ': '...-.', 'Ę': '..-..', 'Ñ': '--.--',
        'Ä': '.-.-', 'Ö': '---.', 'Ü': '..--'
    };

    for (let c of input.value) {
        c = c.toUpperCase();
        output.value += (morse[c] !== undefined ? morse[c] : '#') + " ";
    }

    if (input.value.trim() === "") {
        input.setCustomValidity("Please enter a character.");
        input.reportValidity();
        return;
    } else {
        reset.style.display = "inline-block";
        translate.style.display = "none";
    }

    input.setCustomValidity("");
}

function resetBtn() {
    input.value = "";
    output.value = "";
    reset.style.display = "none";
    translate.style.display = "inline-block";
}

function helpBtn() {
    document.querySelector('dialog').showModal();
}

function closeHelpBtn() {
    document.querySelector('dialog').close();
}