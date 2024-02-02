var jq = jQuery.noConflict();

const assemblyName = 'JbmDev';
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

window.onload = function () {
    darkThemeMq.addEventListener('change', loadTheme);
}

window.loadTheme = function () {
    console.log('getTheme');
    const theme = getTheme() ?? (darkThemeMq.matches ? 'dark' : 'light');
    console.log(theme);
    return theme;
}

window.switchTheme = function () {
    console.log('switchTheme');
    if (getTheme() === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

window.getTheme = function () {
    console.log('getTheme');
    var theme = localStorage.getItem('theme');
    console.log(theme);
    return theme;
}

window.setTheme = function (theme) {
    console.log('setTheme', theme);
    localStorage.setItem('theme', theme);
}