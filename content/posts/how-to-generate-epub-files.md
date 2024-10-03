---
title: "How to Generate Epub Files 📖 "
description: "Introduction : what is epub ? how to use it ? and why you should use it ! and we are going to create our first epub book"
tags: [python, ebook]
date: 2021-12-06
---

## What is Epub ?
epub is a free and open standard for for eBooks (electronic books) maintained by the International Digital Publishing Forum (IDPF). The ePub file format was designed to be open (anyone can use it or create it) and re-flowable (the text can be re-sized and re-arranged to suite whatever display it's being read on). Ideally, it will catch on as the standard for ebooks.  
for more about epub see [Wikipedia's epub page](https://en.wikipedia.org/wiki/EPUB)  
An epub books is just zip file that contains HTML and XML.


## The process of making an epub Book

* prepare the content
* prepare the XML file
* put it in the container.

---

## Epub File Strucuture

* Download the [sample file](https://web.archive.org/web/20111002205346/http://www.jedisaber.com/eBooks/books/sample.epub) to your device
* rename the .epub extension to .zip
* open the zip file 

![Epub File Structure](/images/epub.png)

A .epub file contains at a bare minimum, the following:
* **mimetype** : tells a reader/operating system what's in here
* **META-INF directory**  : contains the **container.xml** file which tells the reader software where in the zip file to find the book
* **OEBPS directory** :  Recommended location for the books content. it cotains: 
  * **images directory** : images go here 
  * **content.opf**: xml file that lists what's in the zip file
  * **toc.ncx** the table of content
  * **xhtml files** the book's contents are in there 

lets look a teach of these in more detail  
feel free to use these files as a template

*note: before we get started the filenames are case sensitive*
 
### mimetype
this file is just a plain ASCII text file that contains the line:  
"**application/epub+zip**"  
this file must be the first file in the zip file, and must not be compressed

### META-INF directory
This contains the container.xml file, which points to the location of the Content.opf file.
This directory is the same for every e-book, so you should be able to recycle the whole folder from the sample file without making changes.

### OEBPS directory
Notes on the OEBPS directory:
This is the directory where the book content is stored. According to the IDPF spec, you don't have to put your book content in here, but it is recommended. I've come across at least two readers that won't read the book properly if the content isn't in this folder. (If you do put your book content somewhere else, make sure that you update container.xml to point to the correct location of the content.opf file.)

### images directory
If you have any images for your eBook, they go in here.

Note: most reading systems support a variety of images, but according to the OPF spec, only PNG must be supported by reading system

### Content.opf
This file gives a list of all files in the .epub container, defines the order of files, and stores meta data (author, genre, publisher, etc.) information.
Note that this file can be named anything you want to call it, as long as the container.xml file mentioned above points to the correct filename. 

```xml
<?xml version='1.0' encoding='utf-8'?>
    <package xmlns="http://www.idpf.org/2007/opf" unique-identifier="uuid_id" version="2.0">
     <metadata xmlns:dc="http://purl.org/dc/elements/1.1/"
       xmlns:opf="http://www.idpf.org/2007/opf">
       
        <dc:identifier id="uuid_id" opf:scheme="uuid">f89b0bc6-dfb0-4739-8558-eda55fc5a7a4</dc:identifier>
        <dc:identifier opf:scheme="calibre">f89b0bc6-dfb0-4739-8558-eda55fc5a7a4</dc:identifier>
        <dc:language>ar</dc:language>
        <dc:title>The Book Title</dc:title>
        <dc:creator opf:file-as="Mohamed Elhefni" opf:role="aut">Mohamed Elhefni</dc:creator>
        <meta name="calibre:title_sort" content="The Book Title"/>
        <dc:date>2021-12-06T15:13:32.548253</dc:date>
        
     </metadata>
     <manifest>
      <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml" />
      <item id="style" href="stylesheet.css" media-type="text/css" />
      <item id="chapter1" href="chap1.xhtml" media-type="application/xhtml+xml" />
      <item id="chapter2" href="chap2.xhtml" media-type="application/xhtml+xml" />
      <item id="chapter3" href="chap3.xhtml" media-type="application/xhtml+xml" />
      <item id="chapter4" href="chap4.xhtml" media-type="application/xhtml+xml" />

     </manifest>
     <spine toc="ncx">
      <itemref idref="chapter1" /> 
      <itemref idref="chapter2" /> 
      <itemref idref="chapter3" /> 
      <itemref idref="chapter4" /> 
     </spine>
    </package>

```


## **toc.ncx**

 This is the table of contents. This file controls what shows up in the left Table of Contents pane in Digital Editions

```xml
<?xml version="1.0" encoding="UTF-8"?>
        <ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
          <head>
            <meta name="dtb:uid" content="d37649f0-e2ea-42c1-850d-7a37a0fcb347"/>
            <meta name="dtb:depth" content="1"/>
            <meta name="dtb:totalPageCount" content="0"/>
            <meta name="dtb:maxPageNumber" content="0"/>
          </head>
          <docTitle>
            <text>Book Document Title</text>
          </docTitle>
          <navMap>
          
            <navPoint id="chapter1" playOrder="0">
              <navLabel>
                <text>3 وسائل ممتازة لزيادة ثروتك اللغوية</text>
              </navLabel>
              <content src="chap1.xhtml"/>
            </navPoint>
        
            <navPoint id="chapter2" playOrder="1">
              <navLabel>
                <text>إعمال العقل في لُزوم ما يَلزَم</text>
              </navLabel>
              <content src="chap2.xhtml"/>
            </navPoint>
        
            <navPoint id="chapter3" playOrder="2">
              <navLabel>
                <text>اجتناب كثير من الظن وقاية من بعض الإثم</text>
              </navLabel>
              <content src="chap3.xhtml"/>
            </navPoint>
        
            <navPoint id="chapter4" playOrder="3">
              <navLabel>
                <text>اسلم تسلم</text>
              </navLabel>
              <content src="chap4.xhtml"/>
            </navPoint>
        
         </navMap>
        </ncx>
```

## The navPoint tag
Each nav point is a chapter listing, the text is the chapter name, and the src is the file it links to.
If you copy a navpoint tag set to add chapters, make sure to update the id and playorder values.  
According to the spec, the id can be anything you want, but it's easier to keep track of things if you use the same id you used for that file in the **.OPF** file. Also, some readers won't properly display the Table of Contents if the ID doesn't match.  
*You can't format the contents of the toc.ncx. This file is used by the reading software to display the table of contents. Each program will display the contents of toc.ncx differently. If you want to present a formatted table of contents to the reader, you need to make a XHTML file with the contents formatted however you want. (In fact, this is a good idea as there are still some ePub reading programs that don't use toc.ncx.)*

## Content .xhtml files
Content files should be XML 1.1 documents
If you're not familiar with XML, it's basically HTML with closing tags for every element, and several style tags are not supported.
As far as how to put the content, you can have it all in one document with bookmarks at each chapter, or each chapter in a separate .xhtml file. The latter looks nicer in most readers, as well as decreases the time it takes for the book to load when you first open 

## Python Script that generate books from markdown
I made a python script that takes a directory of markdown files and generate an epub book from it  
the table of content will be the names of files you can look at it from here : 

[https://github.com/mohamedelhefni/EbookGenerator](https://github.com/mohamedelhefni/EbookGenerator)

