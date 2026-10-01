---
title: "بث lofi radio بالصوت فقط باستخدام ffmpeg"
description: "كيف شغلت بث lofi radio كصوت فقط عبر ffmpeg لتوفير الباقة أثناء المذاكرة."
date: 2021-10-12T13:22:39Z
tags: ["أتمتة", "python", "ffmpeg", "مشاريع جانبية"]
slug: "2021-10-12-132239"
---

السلام عليكم 
وانا بذاكر بحب اسمع lofi music فبفتح فيها بث يوتيوب بس بيكون فيها فيديو ودا بيستهلك من الباقه وانا عايز الصوت بس ففكرت ان اعمل استضافه للمتصفح تشغل الصوت بس lofi radio لقيتها معموله قبل كدا بس مكانتش شغاله 
اول محاوله:
 واني اجيب stream url بتاع youtube live وبعدين اشغل 
ffmpeg as a subprocess on python 
https://www.codepile.net/pile/aQZXoxdv
المشكله بتحصل ان process.stdout encoding is utf-8
والناتج بتاع ffmpeg  is binary فبتحصل مشكله : 
UnicodeDecodeError: 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte
تاني محاوله : 
استخدمت node  وفي كل مره حد يبعت ريكويست كان السيرفر 
بيشغل  ffmpeg as subprocess والناتج كان بيبقي buffer برجعه في response و الدنيا شغاله لحد هنا كويس بس بعد دقيقتين الاتصال بيتقفل من السيرفر حاولت اعدل في server.timeout بس منفعش 
وبعدين اني مع كل ريكويست فيه subprocess بتبدا مش منطقيه ولما العدد يزيد الموضوع مش هيبقي الطف حاجه ولما حاولت اخلي 
ffmpeg process global كان بيقولي ان فيه memory leak 
https://www.codepile.net/pile/pzrpy45q

تالت محاوله : 
اني استخدم socket.io وبالفعل الموضوع اشتغل علي السيرفر كويس بس المشكله اني في المتصفح كنت بستقبل الداتا ك array buffer 
ومش عارف احولها لملف صوت لان decodeAudioData مش بيدعم 
ان ابعت الملف علي اجزاء وانا اساسا بحول من الاستريم بتاع يوتيوب للمتصفح وبحثت كتير ومش لاقي حد شارح الموضوع دا غير ريبو علي جيت هاب ومش فاهم الكود 
https://github.com/AnthumChris/fetch-stream-audio
https://www.codepile.net/pile/lXgwABXK

انا دورت كتير ومش عارف المفروض حاليا اعمل ايه ؟


