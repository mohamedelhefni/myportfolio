---
title: "AR-Trie Package"
date: 2022-01-01
draft: false
description: "مكتبة Go لبنية بيانات Trie تدعم الحروف العربية مع وظائف بحث وتخزين متقدمة"
thumbnail: ""
repoURL: "https://github.com/mohamedelhefni/ar-trie"
demoURL: "https://triesearch.herokuapp.com/"
type: "open-source"
technologies: ["Go", "Data Structures", "Algorithms"]
status: "completed"
featured: false
weight: 40
tags: ["Go", "مكتبات", "خوارزميات"]
---

## نظرة عامة

مكتبة Go لتنفيذ بنية بيانات Trie تدعم نوع rune مما يتيح العمل مع الحروف العربية والإنجليزية.

## الوظائف المتاحة

- **InitTrie** - تهيئة الشجرة
- **Insert** - إدراج مفتاح واحد
- **Find** - التحقق من وجود المفتاح
- **Put** - ربط مفتاح بقيمة
- **Get** - الحصول على قيمة المفتاح
- **Delete** - حذف مفتاح
- **Search** - البحث باستخدام البادئة

## الأداء (Benchmark)

```
BenchmarkInsert-12    	2260291	      523.4 ns/op	      2 B/op	      0 allocs/op
BenchmarkFind-12      	152889574	        7.304 ns/op	      0 B/op	      0 allocs/op
BenchmarkPut-12       	2127642	      561.2 ns/op	     10 B/op	      1 allocs/op
BenchmarkGet-12       	169333138	        7.154 ns/op	      0 B/op	      0 allocs/op
BenchmarkKeys-12      	117835408	        9.887 ns/op	      0 B/op	      0 allocs/op
BenchmarkSearch-12    	28626381	      102.2 ns/op	     16 B/op	      1 allocs/op
```

## أمثلة الاستخدام

```go
tr := InitTrie()

tr.Insert("mohamed")
tr.Insert("محمد")
tr.Insert("محمود")
tr.Keys("مح") // [محمد محمود]

tr.Put("hello", "world")
tr.Search("he") // ["world"]

tr.Find("محمد") // true
tr.Delete("محمد")
tr.Find("محمد") // false
```

## تطبيق عملي

تم استخدام المكتبة في بناء موقع للبحث في قاعدة بيانات تويتر المسربة.
