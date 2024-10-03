---
title: "مزامنة Obisidan مع Syncthing"
description: ""
tags: [obsidian]
date: 2022-10-31
---

من المشاكل الاساسيه في استخدامي ل obsidian كانت ان عمل realtime syncing للتغييرات بتاعتي ويكون فيه backup  
ازاي تعمل مزامنه لكل التغييرات بتاعتك علي obsidian في نفس اللحظه ويكون في backup ليها ؟   
اول وسيله استخدمتها هي كانت onedrive بس مكنتش احسن حاجه لان مع كل تغيير كنت بحتاج اعمل sync عندي علي الجهاز وبعدين اعمل sync علي التليفون   
الحل اللي بستخدمه حاليا هو syncthing  بس مش مجرد استخدامه علي الجهاز والتليفون وخلاص .   
انا عندي لابتوب قديم مشغل عليه ubuntu server وعامله ك dns server باستخدام pihole فليه مخليهوش الوسيط ! ويعمل backup كل يوم الفجر علي  onedrive بحيث ان مفقدش البيانات وتكون موجوده   
اول حاجه عملتها ان خليت syncthing يشتغل ك service علي الجهاز وعلي اللاب وموجود علي التليفون كتطبيق شغال كمان   
وعملت مجلد مشترك بينهم كلك ودا هيكون obsidian vault   
مكانه في server هيكون جوا OneDrive Folder عشان فيه cron job هتشتغل كل يوم الساعه 5 الصبح وتعمل sync للحاجات اللي اتغيرت وترفعها علي onedrive   
ممكن تستغني عن الوسيط ويكون الاتصال بين التليفون والجهاز علي طول   
بس عشان اعمل backup فبخزن الملفات علي اللاب احتياطا وعشان يشغل هو cron job بعيد عن الجهاز عندي   
to run syncthing as service:   
`sudo systemctl enable syncthing@useranme.service  `  
لو انت هتشغل syncthing علي server وبتستخدم ssh فانت محتاج تغير 
local address ل 0.0.0.0 وهتلاقيها موجوده في   
`.config/syncthing/config.xml `  
عشان تقدر تستخدم GUI بتاعsynthing في  network عندك   
وبالنسبه ل onedrive فبستخدم   
https://github.com/abraunegg/onedrive
