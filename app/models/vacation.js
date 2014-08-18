'use strict';

function Vacation(o){
  this.name = o.name;
  this.lat = parseFloat(o.lat * 1);
  this.lng = parseFloat(o.lng * 1);
  this.start = new Date(o.start);
  this.end = new Date(o.end);
}

Object.defineProperty(Vacation, 'collection', {
  get: function(){return global.mongodb.collection('vacations');}
});

Vacation.all = function(cb){
  Vacation.collection.find().toArray(cb);
};

Vacation.create = function(o, cb){
  var v = new Vacation(o);
  Vacation.collection.save(v, cb);
};

module.exports = Vacation;
