var lang = navigator.language || navigator.browserLanguage; //for IE
        
if (lang.includes("pt")) {
    window.location.replace("/pt");
} else {
    window.location.replace("/en");
}