---
title: "benchmark حقيقي في البيت"
description: "كيف تعمل benchmark حقيقي في البيت باستخدام apache benchmark وسكربت bash."
date: 2022-01-06T12:18:30Z
tags: ["performance", "bash", "devops", "تجربة"]
slug: "2022-01-06-121830"
---

ازاي تعمل ال benchmark الحقيقي في البيت
في الفيديو دا استخدمت اللاب كمضيف للخدمه والجهاز كاداه بتعمل محاكاه للزوار اللي عندي باستخدام apache benchmark 
وعملت اسكربت بسيط ب bash بحيث انه يغير في params اللي بتتبعت كل مره . لا انكر ان الموضوع ممتع وبشده لما ازود عدد requests اكتر لحد ما اللاب يجيب اخره ويهنج 😃
فيه اداوات بتكون اكثر تعقيدا وبتديلك امكانيات اكتر زي Jmeter, k6
الادوات : 
ab: https://httpd.apache.org/docs/2.4/programs/ab.html
pm2: https://httpd.apache.org/docs/2.4/programs/ab.html
jmeter: https://jmeter.apache.org/
k6: https://k6.io/
المقال الاصلي اللي اكتشفت منه الاداه وحاجات تانيه كتير :
https://www.rdegges.com/2018/to-30-billion-and-beyond/?fbclid=IwAR0GUy1PWLg9LGD3eHstSLYgABwZwr72wKA9FOqrgMRNMh5fwGK0a_ZHU9U

<video controls src="/attachments/2022-01-06-121830_0.mp4" style="max-width:100%"></video>
