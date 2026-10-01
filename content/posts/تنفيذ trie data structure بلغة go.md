---
title: "تنفيذ trie data structure بلغة go"
description: "تنفيذ trie بلغة go يدعم runes وتخزين القيم والبحث بالبادئة."
date: 2022-02-06T15:24:34Z
tags: ["go", "هياكل بيانات", "مفتوح المصدر", "برمجة"]
slug: "2022-02-06-152434"
---

Trie datastructure Implementation with go 
في واحد من المشاريع اللي شغال عليها كنت محتاج ان استخدم trie وملقتش باكدج بتقدم الحاجه اللي انا محتاجها زي اني اجيب keys للقيمه بتاعتي او اخزن قيمة للقيمة بتاعتي زي mapوابحث فيها بعدين  وان هي تكون بتدعم runes لان go بتعامل الحروف العربي علي انها runes وكمان تكون سريعه ومتستخدمش مساحة تحزين كبيره . لان فاكر شفت في واحده من implementation اللي كانت موجوده انه عامل لكل نود 512 children فالموضوع مكنش منطقي خالص .

دا مثال كنت عامله مستخدمه فيها : 
https://triesearch.herokuapp.com/

Package: 
https://github.com/mohamedelhefni/ar-trie/


