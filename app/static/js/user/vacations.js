/* global google:true */

(function(){
  'use strict';

  var map;

  $(document).ready(function(){
    initMap(36.1667, -86.7833, 5);
  });

  function initMap(lat, lng, zoom){
    var styles = [{'featureType':'landscape','stylers':[{'hue':'#FFE100'},{'saturation':34.48275862068968},{'lightness':-1.490196078431353},{'gamma':1}]},{'featureType':'road.highway','stylers':[{'hue':'#FF009A'},{'saturation':-2.970297029703005},{'lightness':-17.815686274509815},{'gamma':1}]},{'featureType':'road.arterial','stylers':[{'hue':'#FFE100'},{'saturation':8.600000000000009},{'lightness':-4.400000000000006},{'gamma':1}]},{'featureType':'road.local','stylers':[{'hue':'#00C3FF'},{'saturation':29.31034482758622},{'lightness':-38.980392156862735},{'gamma':1}]},{'featureType':'water','stylers':[{'hue':'#0078FF'},{'saturation':0},{'lightness':0},{'gamma':1}]},{'featureType':'poi','stylers':[{'hue':'#00FF19'},{'saturation':-30.526315789473685},{'lightness':-22.509803921568633},{'gamma':1}]}],
        mapOptions = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP, styles:styles};
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

})();

