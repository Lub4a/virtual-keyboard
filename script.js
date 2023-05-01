//build HTML structure

let textarea = document.createElement('textarea');
textarea.classList.add('input-field');
document.body.appendChild(textarea);


 let conteiner = document.createElement("div");
 conteiner.classList.add("keybord-conteiner");
 
 let keybordEnglish = [ 
    "~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/",
    "caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
    "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "shift",
    "crt", "fn", "win", "alt", "space", "alt",  "crt", "←", "↑", "↓", "→"
];

for (let key of keybordEnglish) {

  let buttons = document.createElement("button");
  buttons.classList.add("button-key");
  buttons.innerText = key;
  document.body.appendChild(buttons);

 conteiner.append(buttons);

} 

document.body.appendChild(conteiner);



let text = document.createElement('p');
text.classList.add('text');
text.innerText = "Windows OS keyboard";


let switchLang = document.createElement("p");
switchLang.classList.add("text");
switchLang.innerText = "Switch language keyboard shortcut Shift+Alt";

document.body.append(text, switchLang);




const keybordUkraine = [
    "~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї", "/",
    "caps lock", "ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є", "enter",
    "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "shift",
    "crt", "fn", "win", "alt", "space", "alt",  "crt", "←", "↑", "↓", "→"
];







    