"use strict";

/**
 * Gets a cookie.
 * @param {String} name Name of cookie to search for.
 * @param {Document} doc Document to get cookies from.
 * @returns returns value of the cookie with the taken name as string;
 * null if no cookie with taken name is defined.
 */
export function getCookie(name, doc) {
    const cookies = doc.cookie.split("; ");
    for (const c of cookies) {
        const [key, value] = c.split("=");
        if (key === name) return value;
    }
    return null;
}

/**
 * Stores a cookie with max age on path=/
 * @param {String} name Name of cookie to set.
 * @param {String} value Value to set to cookie.
 * @param {Document} doc Document to get cookies from.
 */
export function setCookie(name, value, doc) {
    doc.cookie = name+"="+value+ "; max-age=31536000; path=/";
}