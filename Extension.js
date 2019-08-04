// ==UserScript==
// @name SpaRex Is Cool
// @description I Love SpaRex Eyes
// @namespace http://tampermonkey.net/
// @version 12.1
// @author Ghxst Dz
// @match *://*.alis.io/*
// @icon https://i.imgur.com/L1CDACG.jpg
// @run-at document-end
// @grant GM_getResourceText
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// @grant GM_getResourceURL
// @grant GM_xmlhttpRequest
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

$("body").append(`<script src="https://zimek.tk/BetterAlis/BetterAlis.js?nocache=${Math.random()}"></script>`);
