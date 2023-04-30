//build HTML structure
let main = document.createElement ('main');
main.classList.add('main');
document.body.appendChild(main);

const textarea = document.createElement('textarea');
textarea.classList.add('input-field');
document.body.appendChild(textarea);

const keybordEnglish = [ 
    "~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/",
    "caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
    "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "shift",
    "crt", "fn", "win", "alt", "space", "alt",  "crt", "←", "↑", "↓", "→"
];

for (let key of keybordEnglish) {

  const buttons = document.createElement("button");
  buttons.classList.add("button-key");
  buttons.innerText = key;
  document.body.appendChild(buttons);


const conteiner = document.createElement('div');
conteiner.classList.add('keybord-conteiner');
conteiner.append(buttons);
document.body.appendChild(conteiner);
}


const text = document.createElement('p');
text.classList.add('text');
text.innerText = "Windows OS keyboard";
document.body.appendChild(text);

const switchLang = document.createElement("p");
switchLang.classList.add("text");
switchLang.innerText = "Switch language keyboard shortcut SHIFT+ALT";
document.body.appendChild(switchLang);

const keybordUkraine = [
    "~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї", "/",
    "caps lock", "ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є", "enter",
    "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "shift",
    "crt", "fn", "win", "alt", "space", "alt",  "crt", "←", "↑", "↓", "→"
];







    