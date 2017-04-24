var firepad = firepad || { };

firepad.ShareDBAdapter = (function (global) {

  if (typeof sharedb === "undefined" && typeof require === 'function' && typeof ShareDB !== 'function') {
    sharedb = require('sharedb');
  }

  var TextOperation = firepad.TextOperation;
  var utils = firepad.utils;

  // Save a checkpoint every 100 edits.
  var CHECKPOINT_FREQUENCY = 100;

  function ShareDBAdapter (ref, userId, userColor) {
  }

  utils.makeEventEmitter(ShareDBAdapter, ['ready', 'cursor', 'operation', 'ack', 'retry']);


  ShareDBAdapter.prototype.registerCallbacks = function(callbacks) {
    // TODO
    for (var eventType in callbacks) {
      //this.on(eventType, callbacks[eventType]);
    }
  };

  return ShareDBAdapter;
}());