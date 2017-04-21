var firepad = firepad || { };

firepad.ShareDBAdapter = (function (global) {

  if (typeof sharedb === "undefined" && typeof require === 'function' && typeof ShareDB !== 'function') {
    sharedb = require('sharedb');
  }

  function ShareDBAdapter (ref, userId, userColor) {
  }

  return ShareDBAdapter;
}());