goog.require('ol.Map');
goog.require('ol.RendererHints');
goog.require('ol.View2D');
goog.require('ol.control.ScaleLine');
goog.require('ol.control.defaults');
goog.require('ol.dom.Input');
goog.require('ol.layer.TileLayer');
goog.require('ol.source.OSM');


var control = new ol.control.ScaleLine();

var map = new ol.Map({
  controls: ol.control.defaults({}, [
    control
  ]),
  layers: [
    new ol.layer.TileLayer({
      source: new ol.source.OSM()
    })
  ],
  renderers: ol.RendererHints.createFromQueryData(),
  target: 'map',
  view: new ol.View2D({
    center: [0, 0],
    zoom: 2
  })
});


var units = new ol.dom.Input(document.getElementById('units'));
units.bindTo('value', control, 'units');
