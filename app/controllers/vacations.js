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
  //var vac = new Vacation(req.body);
  //vac.save()
  console.log(req.body);
  res.redirect('/vacations');
};

