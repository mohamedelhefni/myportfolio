---
title: 'Kindle Books'
description: 'A Website that has about 8000 e-book with various types: mobi, epub, azw3, pdf, kfx
'
categories: [NodeJs,tailwindcss,vue,MongoDB]
image: https://mohamedelhefni.000webhostapp.com/wp-content/uploads/2021/06/Screenshot-from-2021-05-18-13-29-21.png
date: 2021-06-05

---
![](https://mohamedelhefni.000webhostapp.com/wp-content/uploads/2021/06/Screenshot-from-2021-05-18-11-55-41-1024x504.png)

I wrote a python script that uses a telegram session to get telegram channel files , it download each file and upload it to google drive
after connectig with drive using Drive api ,  I ran the script on google cloud console
the  script produces a csv file that contains
the name of the book, telegramId, DriveId, Views


I made a website that allows you to search on about 8000 e-book
there are various types like: mobi, epub, azw3, kfx , pdf
you can save the book on your favorites and download it later
I used Tailwindcss of ui and vue.js on front-end deployed on netlify
for the back-end I used Node.js (express) and MongoDB
I stored the books on drive using drive api
to deploy the app I used mongo atlas to handle the database and heroku for node

### performance
the application can handle 100k requests easily , the old version of that website I used
python (flask) and MySQL and it fails after 500 requests, really it fails because of the limitation of free plan on heroku.

![](/images/kindle-benchmark.png)

**DEMO:**
<http://kindlebooks.netlify.app/>

**Github:**
<https://github.com/mohamedelhefni/kindlebooks/>


