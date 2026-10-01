---
title: "من الصورة للنص بـ OCR في أمر واحد"
description: "كيف تحول صورة من الذاكرة إلى نص مباشرة بأمر واحد باستخدام tesseract."
date: 2022-06-05T11:09:44Z
tags: ["أتمتة", "لينكس", "ocr", "سكربتات"]
slug: "2022-06-05-110944"
---

How to turn your Image buffer on your memory to actual text on simple alias
When I am viewing the lecture I need some text so I am lazy enough to write it from lecture image or video
so the simple approach is to use OCR engine but you need to save image on disk then use tesseract to extract text to txt file then use it
instead of all of that tesseract support stdin and stdout 
so why not to capture the image on memory using deepin screenshot then use xclip to pipe the buffer from it to tesseract as stdin and output the text from tesseract as stdout 
and BOOM! put it on single alias tscl and congrats for you
you now can get text from image buffer on your memory on one single step

<video controls src="/attachments/2022-06-05-110944_0.mp4" style="max-width:100%"></video>
