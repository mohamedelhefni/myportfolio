---
title: 'Gpx Parser'
description: 'a library for parsing gpx files and extract data that provide functionalities'
categories: [javascript]
date: 2022-8-20

---

a library for parsing gpx files and extract data that provide functionalities  
* extract gpx metadata and waypoints
* extract tracks and routes with points and total distance of the route
* convert the gpx to geojson 

## Install 
```
npm i gpxtojs
```

## Usage
```js
const gpxtojs = require("gpxtojs")
const gpx = new gpxtojs.GPXParser();
gpx.parse(gpxString)
gpx.getMetadata()
gpx.getWaypoints()
gpx.getTracks()
gpx.getRoutes()
```

### Convert to Geojson
```js
gpx.toGeoJson()
```
Github Link : [https://github.com/mohamedelhefni/gpx-parser](https://github.com/mohamedelhefni/gpx-parser)

