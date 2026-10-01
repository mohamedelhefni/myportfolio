---
title: "GPX Parser"
date: 2022-08-20
draft: false
description: "مكتبة JavaScript لتحليل ملفات GPX واستخراج البيانات"
thumbnail: ""
repoURL: "https://github.com/mohamedelhefni/gpx-parser"
type: "open-source"
technologies: ["JavaScript", "npm", "GeoJSON"]
status: "completed"
featured: false
weight: 55
tags: ["JavaScript", "مكتبات", "خرائط"]
---

## نظرة عامة

مكتبة لتحليل ملفات GPX واستخراج البيانات مع الوظائف التالية:

- استخراج البيانات الوصفية ونقاط الطريق
- استخراج المسارات والطرق مع النقاط والمسافة الإجمالية
- تحويل GPX إلى GeoJSON

## التثبيت

```bash
npm i gpxtojs
```

## الاستخدام

```js
const gpxtojs = require("gpxtojs")
const gpx = new gpxtojs.GPXParser();
gpx.parse(gpxString)
gpx.getMetadata()
gpx.getWaypoints()
gpx.getTracks()
gpx.getRoutes()
```

### التحويل إلى GeoJSON

```js
gpx.toGeoJson()
```
