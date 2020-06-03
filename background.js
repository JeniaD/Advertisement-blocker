chrome.webRequest.onBeforeRequest.addListener(
  function(details) { console.log("Site blocked.");return {cancel: true}; },
  { urls: ["*://*.doubleclick.net/*", "*://*.broadstreetads.com/*", "*://*.adbutler.com/*", "*://*.zedo.com/*", "*://*.media.net/*", "*://*.yandex.ru/*", "*://*.rutrk.com/*", "*://.vdo.ai/*", "*://*.traffic-media.co.uk/*","*://*.acdnpro.com/*"/*, "*//*.trafmag.com/*"*/]},
  ["blocking"]
);