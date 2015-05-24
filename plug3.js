// ==UserScript==
// @name        Plug3
// @description Script by ProdRG & ItsFRIX
// @include     http://www.plug.dj/*
// @include     https://www.plug.dj/*
// @include     http://plug.dj/*
// @include     https://plug.dj/*
// @version     2.1
// @grant       none
// ==/UserScript==

function load() {
var jsCode = document.createElement('script');
jsCode.setAttribute('id', 'plug3');
jsCode.setAttribute('src', 'https://d1rfegul30378.cloudfront.net/files/plugCubed.js'); document.body.appendChild(jsCode);
}
setTimeout(load, 10000)
