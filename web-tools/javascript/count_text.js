window.addEventListener("load", function () {
    let $in = 0;
    const counterOutput = document.querySelector('.A-FUCKING-OUTPUT');
    const counterInput = document.querySelector('.counter-input---');
    const counterButton = document.querySelector('#counterBButton');

    function mainCountFunction() {
        $in = counterInput.value;
        counterOutput.innerText = $in.length;
    }
    counterButton.addEventListener('click', mainCountFunction);
});