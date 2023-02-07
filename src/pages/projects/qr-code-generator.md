---
title: "QR Code Generator"
subtitle: "JS Web App"
date: "2022-08-19"
description: "A QR Code Generator I made as a side project."
keywords: "davina, davina leong, leong, qr code generator, qr, qr code, generator"
category: "JS"
image: "qr-code-generator.png"
link: "https://davinaleong.github.io/proj-qr-code-generator/"
featured: false
technologies: [
    {
        "name": "Frontend",
        "items": ["HTML", "CSS", "JavaScript", "CSS Grid", "Flexbox", "QRCode.js"]
    },
    {
        "name": "Deployment",
        "items": ["GitHub Pages"]
    },
    {
        "name": "Highlights",
        "items": ["QR Code library", "Form Validation", "Vanilla JavaScript"]
    }
]
draft: 0
---

This [video](https://www.youtube.com/watch?v=qNiUlml9MDk) by Traversy Media on creating a QR Code Generator inspired me to create my own version. *Note:* I did not follow the tutorial.

QR Codes are useful for mobile phone users to access links simply and quickly.

How to use:

1. Fill up the *URL* field with the link to your website.
1. (Optional) Select the *size* of the QR Code you want. Measurement is in pixels.
1. (Optional) Select the *colours* you want for the QR Code. *Foreground Color* is the color of the code and *Background Color* is the color surrounding the QR Code.
1. Click on *submit* and wait for your QR Code to generate.
1. (Laptop/Desktop) *Right click* on the QR code and click on *Save as image...*
1. (Android/iOS) Follow your platform's specific instructions on how to download images from a website.

This project is build in HTML, CSS and plain JavaScript. I used **CSS Grid** to for the body and form layout and **Flexbox** for the header. The [QRCode.js](https://github.com/davidshimjs/qrcodejs) library is used to render the QR Code.