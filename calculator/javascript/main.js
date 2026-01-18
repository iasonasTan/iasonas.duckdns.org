window.addEventListener('load', function() {
    'use strict';
    let method = "";
    let _value = "";
    let $value = "";
    let $in = "";
    const output = document.querySelector('#output');

    function type() {
        $in = $in + this.innerText;
        output.value = $in;
        console.log($in);
    }

    for(let i=0; i<10; i++) {
        document.querySelector('#b'+i).addEventListener('click', type);
    }

    function logMethod(mtd) {
        if (mtd === 0) { console.log("*"); }
        if (mtd === 1) { console.log("/"); }
        if (mtd === 2) { console.log("+"); }
        if (mtd === 3) { console.log("-"); }
        if (mtd === 4) { console.log("^"); }
    }

    document.querySelector('#m0')
        .addEventListener('click', function () {
            method = 0;
            // console.log(method);
            logMethod(method);
            _value = parseFloat(output.value);
            output.value = "";
            $in = "";
        }
        );

    document.querySelector('#m1')
        .addEventListener('click', function () {
            method = 1;
            // console.log(method);
            logMethod(method);
            _value = parseFloat(output.value);
            output.value = "";
            $in = "";
        }
        );

    document.querySelector('#m2')
        .addEventListener('click', function () {
            method = 2;
            // console.log(method);
            logMethod(method);
            _value = parseFloat(output.value);
            output.value = "";
            $in = "";
        }
        );

    document.querySelector('#m3')
        .addEventListener('click', function () {
            method = 3;
            // console.log(method);
            logMethod(method);
            _value = parseFloat(output.value);
            output.value = "";
            $in = "";
        }
        );

    document.querySelector('#m44')
        .addEventListener('click', function () {
            method = 4;
            // console.log(method);
            logMethod(method);
            _value = parseFloat(output.value);
            output.value = "";
            $in = "";
        }
        );

    function equal() {
        $value = parseFloat(output.value);
        output.value = "";
        function Number(a) {
            a = parseFloat(a);
        }

        Number(_value);
        Number($value);

        if (method === 0) {
            output.value = _value * $value;
        } else if (method === 1) {
            output.value = _value / $value;
        } else if (method === 2) {
            output.value = _value + $value;
        } else if (method === 3) {
            output.value = _value - $value;
        } else if (method === 4) {
            output.value = _value ** $value;
        }

        $in = "";
        _value = "";
        $value = "";
        console.log(output.value);
    }

    document.querySelector('#m4').addEventListener('click', equal);

    document.querySelector('#clearButton')
        .addEventListener('click', function () {
            // if(method !== "" ||_value !== "" || $value !== "" || $in !== "")
            // {
            $in = "";
            _value = "";
            $value = "";
            method = "";

            console.log(`
                    method: ${method}; &&
                    _value: ${_value}; &&
                    $value: ${$value}; &&
                    $in: ${$in}; &&
                    --output: ${output.value};
                `);

            document.querySelector('#output')
                .value = "";
            // }
            // else if (method === "" && _value === "" && $value === "" && $in === "")
            // {
            //     console.warn('ti kaneis re malaka');
            // }
        });
});