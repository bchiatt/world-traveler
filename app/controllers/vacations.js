'use strict';

var Vacation = require('../models/vacation'),
    moment   = require('moment');

exports.index = function(req, res){
  Vacation.all(function(err, vacations){
    console.log(vacations);
    res.render('vacations/index', {vacations:vacations, moment:moment});
  });
};

exports.init = function(req, res){
  res.render('vacations/init');
};

exports.create = function(req, res){
  Vacation.create(req.body, function(){
    res.redirect('/vacations');
  });
};

