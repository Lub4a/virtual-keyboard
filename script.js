const textarea = document.createElement('textarea');
const buttons = document.createElement('button');
const fragment = document.createDocumentFragment();
const keybordEnglish = [ 
    "~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/",
    "caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
    "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "shift",
    "crt", "fn", "win", "alt", "space", "alt",  "crt", "←", "↑", "↓", "→"
];
const keybordUkraine = [
    "~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї", "/",
    "caps lock", "ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є", "enter",
    "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "shift",
    "crt", "fn", "win", "alt", "space", "alt",  "crt", "←", "↑", "↓", "→"
]