// ==UserScript==
// @name         Buy 1000 Stocks
// @version      1.0.0
// @description  Set stock shares amount to 1000 when buying
// @author       AJPWthrowaway
// @match        *://*.neopets.com/stockmarket.phtml?type=buy*
// ==/UserScript==

$("[name='amount_shares']").val(1000); // buy 1000 shares
