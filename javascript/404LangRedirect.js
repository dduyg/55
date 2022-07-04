var lang = navigator.language || navigator.browserLanguage; //for IE

if (lang.includes("pt")) {
    window.location.replace("/pt/404");
} else {
    window.location.replace("/en/404");
}