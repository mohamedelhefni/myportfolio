---
title: "Kindle Books"
date: 2021-06-05
draft: false
description: "موقع يحتوي على أكثر من 8000 كتاب إلكتروني بصيغ متعددة"
thumbnail: "https://mohamedelhefni.000webhostapp.com/wp-content/uploads/2021/06/Screenshot-from-2021-05-18-13-29-21.png"
repoURL: "https://github.com/mohamedelhefni/kindlebooks/"
demoURL: "http://kindlebooks.netlify.app/"
type: "personal"
technologies: ["Vue.js", "Node.js", "MongoDB", "Tailwind CSS", "Google Drive API"]
status: "completed"
featured: false
weight: 40
tags: ["Vue.js", "Node.js", "تطبيقات ويب"]
---

## نظرة عامة

موقع يتيح البحث في مجموعة تضم حوالي 8000 كتاب إلكتروني بصيغ متنوعة: mobi، epub، azw3، kfx، pdf.

![الواجهة](/images/kindlebooks.png)

## آلية العمل

1. أنشأت سكربت Python يستخدم جلسة Telegram لجلب الملفات من قناة
2. يقوم السكربت بتحميل كل ملف ورفعه إلى Google Drive
3. تم تشغيل السكربت على Google Cloud Console
4. ينتج ملف CSV يحتوي على اسم الكتاب ومعرفات Telegram و Drive

## المميزات

- البحث في الكتب
- حفظ الكتب في المفضلة
- تحميل الكتب من Google Drive

## البنية التقنية

- **الواجهة**: Vue.js + Tailwind CSS (Netlify)
- **الخادم**: Node.js + Express (Heroku)
- **قاعدة البيانات**: MongoDB Atlas
- **التخزين**: Google Drive API

## الأداء

التطبيق يتحمل بسهولة 100 ألف طلب، بينما النسخة السابقة بـ Python/Flask/MySQL فشلت بعد 500 طلب فقط.

![اختبار الأداء](/images/kindle-benchmark.png)
