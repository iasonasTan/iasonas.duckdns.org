"use strict";

import { switchListener, init } from "./theme.js";

window.addEventListener("load", () => {
    let headerNode = `<div>
        <a href="../index.html" id="back_btn">HOME</a>
        <button id="switch_theme_btn">Switch Theme</button>
    </div>`;
    const bodyContents = document.body.innerHTML;
    document.body.innerHTML = headerNode + bodyContents;
    init(document);
    document.getElementById("switch_theme_btn").addEventListener("click", switchListener);

    let styleNode = `<link rel="stylesheet" href="../javascript/header.css">`;
    const headContents = document.head.innerHTML;
    document.head.innerHTML = headContents + styleNode;
});