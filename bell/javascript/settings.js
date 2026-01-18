import {getCookie, setCookie} from "../../javascript/cookies.js";

const SHOW_SECONDS_COOKIE = "bell.showSecs";

const showSecsCheckbox  = document.getElementById("showSecs");

export function init(document) {
    showSecsCheckbox.checked = getCookie(SHOW_SECONDS_COOKIE, document) === "true";
    showSecsCheckbox.addEventListener("change", () => {
        setCookie(SHOW_SECONDS_COOKIE, ""+showSecsCheckbox.checked, document);
    });
}

export function isNightTheme() {
    return showSecsCheckbox.checked;
}