/**
 * If you are here, you're maybe a web developer but you should leave this page because the following code is disgusting...
 * Don't judge, as I previously said, a kid with almost zero experience made this javascript code...
 * Anyway, i can't stop you from reading this code and watch how non-experienced kids write programs... go ahead!
 */

window.addEventListener("load", function () {
    function notes() {
        var time = 0.0;
        var i = 0;

        document.querySelector("#button").addEventListener("click", function () {
            while ((i = 2)) {
                setTimeout(function () {
                    time = time + 1;
                    console.warn(time);
                    document.querySelector("#h5").value = time;
                }, 1000);
            }
        });

        document.querySelector("#stop").addEventListener("click", function () {
            i = 2;
        });
    }
    var _time = 0;
    var _status = false;


    function starttimer(callback) {
        _time = _time + 1;
        setTimeout(function () {
            _time = _time + 1;
            console.log(_time);
            document.getElementById('output').innerText = parseInt(_time);
            callback();

        }, 1000)

    }

    function qwer() {
        if (_status == false) {
            // console.log("test.status.0.012");
            console.info("test.status == false ? ..program == null")

        } else if (_status == true) {
            starttimer(qwer);

        }

    }

    document.getElementById('stst').addEventListener('click', function () {
        if (_status == true) {
            _status = false;

        } else if (_status == false) {
            _status = true;

        } else {
            console.log("fuck my life again");

        }

        if (_status === true) {
            starttimer(qwer);
            // console.log("test.true.0.012");
            console.info("test.program ? ..status == true::");

        }

    })
    document.getElementById('output').innerText = parseInt(_time);

    // reset button code >>>
    document.querySelector('#null').addEventListener('click', function () {
        if (_status === false) {
            _time = 0;
        } else if (_status === true) {
            _status=false;
            _time=0;
        }
        if (document.querySelector('#output').innerText == 0) {
            alert("the timer is already the value of null");
        } else if (document.querySelector('#output').innerText != 0) {
            document.getElementById('output').innerText = 0;
        }
    });
});