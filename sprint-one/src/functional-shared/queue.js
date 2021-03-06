var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    incrementer: 0,
    decrementer: 0,
    inQueue: 0
  };
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(destination, add) {
  for (var key in add) {
    destination[key] = add[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.incrementer] = value;
    this.incrementer++;
    this.inQueue++;
  },

  dequeue: function() {
    var value;
    if (this.storage[this.decrementer]) {
      value = this.storage[this.decrementer];
      delete this.storage[this.decrementer];
      this.decrementer++;
      this.inQueue--;
    }
    return value;
  },

  size: function() {
    return this.inQueue;
  }
};


