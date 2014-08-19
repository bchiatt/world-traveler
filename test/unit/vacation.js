/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect,
    Mongo     = require('mongodb'),
    Vacation  = require('../../app/models/vacation'),
    dbConnect = require('../../app/lib/mongodb'),
    cp        = require('child_process'),
    db        = 'vacations-test';

describe('Vacation', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new Vacation object', function(){
      var o = {name:'there', lat:'40.6', lng:'176.2043', start:'12/13/13', end:'12/18/13'},
          v = new Vacation(o);
      expect(v).to.be.instanceof(Vacation);
      expect(v.name).to.equal('there');
      expect(v.lat).to.equal(40.6);
      expect(v.lng).to.equal(176.2043);
      expect(v.start).to.be.instanceof(Date);
      expect(v.end).to.be.instanceof(Date);
    });
  });

  describe('.all', function(){
    it('should get all vacations', function(done){
      Vacation.all(function(err, vacations){
        expect(vacations).to.have.length(3);
        done();
      });
    });
  });

  describe('.create', function(){
    it('should create and save a new vacation', function(done){
      var o = {name:'there', lat:'40.6', lng:'176.2043', start:'12/13/13', end:'12/18/13'};
      Vacation.create(o, function(err, vacation){
        expect(vacation._id).to.be.instanceof(Mongo.ObjectID);
        done();
      });
    });
  });

  describe('.findById', function(){
    it('should get one vacation by id', function(done){
      Vacation.findById('000000000000000000000001', function(err, vacation){
        expect(vacation.name).to.equal('Paris, France');
        done();
      });
    });
  });
});
