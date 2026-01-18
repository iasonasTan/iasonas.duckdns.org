import {BellManager, BellFactory} from "./bells.js";
import {dateToString} from "./date.js";
import {init, isNightTheme} from "./settings.js";

const fac = new BellFactory();
const man = new BellManager(fac);

window.addEventListener("load", () => {
    const textClock = document.getElementById("time");
    const timeLeftView  = document.getElementById("timeLeftView");
    const textTime  = document.getElementById("currTime");
    const textDate  = document.getElementById("currDate");

    init(document);

    let SATURDAY = 6;
    let SUNDAY   = 0;
    function update() {
        let showSecs = isNightTheme();
        textTime.textContent = dateToString(new Date(), "Current time: ", showSecs);

        const nowDate = new Date();
        let dateString = nowDate.toLocaleDateString(
            "en-GB",
            {day: "2-digit",month: "short"}
        );
        textDate.textContent = "Today: "+dateString;

        let day = nowDate.getDay();
        if(day === SUNDAY) {
            textClock.textContent = "School starts tomorrow!";
        } else if(day === SATURDAY) {
            textClock.textContent = "School starts in two days!";
        } else {
            let bell = man.getNextBell();
            if(bell != null) {
                bell.setSeconds(0);
                bell.nextMinute();
                textClock.textContent = dateToString(bell, "Bell rings at: ", showSecs);
                timeLeftView.textContent  = dateToString(man.getDeltaBell(bell), "Time remaining: ", showSecs);
            } else {
                let nextDay = day+1;
                if(nextDay!=SATURDAY) {
                    textClock.textContent = "School is over, but you have school tomorrow.";
                } else {
                    textClock.textContent = "School is over — enjoy the weekend!";
                }
                timeLeftView.style.visibility = "hidden";
            }
        }
    }
    setInterval(update, 1000); // recommended way
    update();
});