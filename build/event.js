// Generated by CoffeeScript 1.10.0
(function() {
  var deepAssign;

  deepAssign = require('./deepAssign');

  module.exports = function(arg) {
    var aggregateId, event, name, payload, state;
    aggregateId = arg.aggregateId, name = arg.name, payload = arg.payload, state = arg.state;
    event = {
      name: name,
      aggregateId: aggregateId,
      payload: Object.freeze(deepAssign({}, payload)),
      state: Object.freeze(deepAssign({}, state))
    };
    return Object.freeze(event);
  };

}).call(this);