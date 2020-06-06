import { Component, OnInit, AfterViewInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Fill, Icon, Stroke, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';
import {fromLonLat} from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';

import earth from '../data/ne_110m_earth.json'
import { MapService } from '../service/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  public map;
  public markers;
  public view;
  public markerText;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.mapService.panTo_.subscribe(coord => {
      this.panTo(coord)
    });
    this.mapService.addMarker_.subscribe(marker => {
      this.addMarker(marker.coord, marker.text)
    })
  }

  ngAfterViewInit(): void {
    
    var tiles = new OSM({
      url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    });
    tiles.on('tileloaderror', () => {
      this.map.getLayers().extend([
        new VectorLayer({
          source: new VectorSource({
            features: new GeoJSON().readFeatures(earth, {featureProjection: 'EPSG:3857'})
          })
        })
      ]);
    });
    var tileLayer = new TileLayer({
      source: tiles
    })

    this.markers = new VectorSource({
      features: []
    });
    var markerLayer = new VectorLayer({
      source: this.markers,
      style: new Style({
        image: new Icon({
          src: '/assets/marker.svg'
        })
      })
    });
    
    this.view = new View({
      center: fromLonLat(this.mapService.centre),
      zoom: 4.5
    });

    this.map = new Map({
      layers: [tileLayer, markerLayer],
      target: 'map',
      view: this.view
    });

    this.map.on('pointermove', e => {
      var marker = document.getElementById("marker");
      if (e.dragging) {
        marker.style.display = "none";
        return;
      }
      var f = this.map.forEachFeatureAtPixel(e.pixel, f => {
        if(f.values_.text) {
          document.getElementById("markerText").innerHTML = f.values_.text
          marker.style.left = (e.pixel[0]+10) + 'px';
          marker.style.top = (e.pixel[1]-10) + 'px';
        }
        return f; 
      });
      marker.style.display = f ? 'block' : 'none'
      document.body.style.cursor = f ? 'pointer' : 'default'
    });

    this.map.on("click", e => {
      this.map.forEachFeatureAtPixel(e.pixel, f => {
          if(f.values_.coord) {
            this.panTo(f.values_.coord);
          }
      })
    });

    Object.keys(this.mapService.markers).forEach(m => {
      console.log([this.mapService.markers[m].coord, m])
      this.addMarker(this.mapService.markers[m].coord, m)
    })

    if(this.mapService.panRequest) {
      this.panTo(this.mapService.panRequest)
    }
    this.mapService.panRequest = null
  }

  panTo(coord) {
    var duration = 2000;
    var currentZoom = this.view.getZoom();
    var zoomOut = Math.min(currentZoom, 6.5);
    var zoomIn = Math.max(currentZoom, 8.5);
    var m = (zoomIn - 6.5)/0.5
    var t = Math.max(0, Math.min(m*currentZoom-m*6.5, 0.5));
    console.log([m, m*currentZoom-m*6.5])
    this.view.animate({
      zoom: zoomOut,
      duration: duration * t
    }, {
      zoom: zoomIn,
      duration: duration * (1 - t)
    });
    this.view.animate({
      center: fromLonLat(coord),
      duration: duration
    });
    this.mapService.centre = coord;
  }

  addMarker(coord, text) {
    this.markers.addFeature(new Feature({
      geometry: new Point(fromLonLat(coord)),
      text: text,
      coord: coord
    }));
  }

}
