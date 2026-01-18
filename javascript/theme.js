"use strict";

import {getCookie, setCookie} from "./cookies.js";

const COOKIE_NIGHT_THEME = "org.je.cookies.nightTheme";
const BUTTON_TEXT_DAY_THEME   = "Night Theme";
const BUTTON_TEXT_NIGHT_THEME = "Day Theme";

let switchThemeButton = null;
let document = null;

export function setTheme(isNight) {
    if(document==null) {
        console.error("Not initialized!");
        return;
    }
    const body = document.body;
    if (isNight) {
        body.classList.remove("day");
        body.classList.add("night");
        switchThemeButton.textContent = BUTTON_TEXT_NIGHT_THEME;
        setCookie(COOKIE_NIGHT_THEME, "true", document);
    } else {
        body.classList.remove("night");
        body.classList.add("day");
        switchThemeButton.textContent = BUTTON_TEXT_DAY_THEME;
        setCookie(COOKIE_NIGHT_THEME, "false", document);
    }
}

export function loadThemeFromCookies() {
    if(document==null) {
        console.error("Not initialized!");
        return;
    }
    if(getCookie(COOKIE_NIGHT_THEME, document)=="true") {
        document.body.classList.add("night");
        switchThemeButton.textContent = BUTTON_TEXT_NIGHT_THEME;
    } else {
        document.body.classList.add("day");
        switchThemeButton.textContent = BUTTON_TEXT_DAY_THEME;
    }
}

export function switchListener() {
    if(document==null) {
        console.error("Not initialized!");
        return;
    }
    setTheme(document.body.classList.contains("day"), switchThemeButton, document);
}

export function init(doc) {
    document = doc;
    switchThemeButton = document.getElementById("switch_theme_btn");
    if(switchThemeButton==null) {
        console.error("Invalid document.");
    }
    loadThemeFromCookies(switchThemeButton, document);
}