export class BellFactory {
    createBell(h, m) {
        let date = new Date();
        date.setHours(h);
        date.setMinutes(m);
        return date;
    }
}

export class BellManager {
    bells = [];
    constructor(fac) {
        this.pushBell(9 , 0 , fac);
        this.pushBell(9 , 50, fac); // 2
        this.pushBell(10, 40, fac);
        this.pushBell(11, 25, fac); // 4
        this.pushBell(12, 10, fac);
        this.pushBell(12, 55, fac); // 6
        this.pushBell(13, 40, fac);
        this.pushBell(14, 30, fac); // 8
        this.pushBell(15, 5 , fac);
    }
    pushBell(h, m, fac) {
        this.bells.push(fac.createBell(h, m));
    }
    getNextBell() {
        const now = new Date();
        for(let bell of this.bells) {
            if(bell>now)
                return bell;
        }
        return null;
    }
    getDeltaBell(nextBell) {
        const now = new Date();
        const diffMs = nextBell - now;
        const totalSec = Math.floor(diffMs / 1000);

        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;

        let out = new Date();
        out.setHours(h);
        out.setMinutes(m);
        out.setSeconds(s);
        return out;
    }
}