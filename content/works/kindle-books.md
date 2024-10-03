---
title: 'Kindle Books'
description: 'A Website that has about 8000 e-book with various types: mobi, epub, azw3, pdf, kfx'
categories: [NodeJs,tailwindcss,vue,MongoDB]
image: https://mohamedelhefni.000webhostapp.com/wp-content/uploads/2021/06/Screenshot-from-2021-05-18-13-29-21.png
date: 2021-06-05

---


![](/images/kindlebooks.png)

I created a Python script that utilizes a Telegram session to retrieve files from a Telegram channel. The script downloads each file and uploads it to Google Drive using the Drive API. I ran the script on the Google Cloud Console and it generated a CSV file containing the name of the book, Telegram ID, Drive ID, and Views.

I also developed a website that allows users to search through a collection of approximately 8000 e-books in various formats such as mobi, epub, azw3, kfx, and pdf. Users can save books to their favorites for later download. The front-end of the website was built using Vue.js and TailwindCSS and was deployed on Netlify. The back-end was developed using Node.js (Express) and MongoDB. The books were stored on Google Drive using the Drive API. I deployed the app using Mongo Atlas for database management and Heroku for Node.js hosting.

In terms of performance, the application can easily handle 100k requests. In contrast, an earlier version of the website that used Python (Flask) and MySQL failed after 500 requests due to limitations of the free plan on Heroku.



![](/images/kindle-benchmark.png)

**DEMO:**
<http://kindlebooks.netlify.app/>

**Github:**
<https://github.com/mohamedelhefni/kindlebooks/>


