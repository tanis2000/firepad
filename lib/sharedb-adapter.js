var firepad = firepad || { };

firepad.ShareDBAdapter = (function (global) {
  console.log(typeof sharedb);
  console.log(typeof require);
  console.log(typeof ShareDB);
  if (typeof sharedb === "undefined" && typeof require === 'function' && typeof ShareDB !== 'function') {
    sharedb = require('sharedb');
  }

  var TextOperation = firepad.TextOperation;
  var utils = firepad.utils;

  // Save a checkpoint every 100 edits.
  var CHECKPOINT_FREQUENCY = 100;

  function ShareDBAdapter (ref, userId, userColor) {
    // Open WebSocket connection to ShareDB server
    var socket = new WebSocket('ws://localhost:5000');
    var connection = new sharedb.Connection(socket);
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