import {getCookie} from "../javascript/cookies.js";

window.addEventListener("load", () => {
    const showSecsCheckbox = document.getElementById("showSecs");
    const textClock = document.getElementById("clock");
    
    showSecsCheckbox.checked = getCookie("screensaver.showSecs", document) === "true";
    showSecsCheckbox.addEventListener("change", () => {
        document.cookie = "screensaver.showSecs="+showSecsCheckbox.checked+"; max-age=31536000; path=/";
    });

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        textClock.textContent = `${hours}:${minutes}`;
        if(showSecsCheckbox.checked) {
            const seconds = String(now.getSeconds()).padStart(2, '0');
            textClock.textContent += ":"+seconds;
        }
    }

    setInterval(updateClock, 900);
    updateClock();
});