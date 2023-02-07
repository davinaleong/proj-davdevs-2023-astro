---
title: "Joke Generator"
subtitle: "JavaScript Demo"
date: "2022-11-10"
description: "Show a random original joke or riddle by Davina Leong."
keywords: "davina, davina leong, leong, joke, jokes, joke generator, pun, puns, laugh, laughs, funny, laughter, html, html5, css, css3, js, javascript"
category: "JS"
image: "joke-generator.png"
link: "https://davinas-cms.herokuapp.com/frontend/joke-generator"
featured: true
technologies:
  [
    { "name": "Frontend", "items": ["HTML", "CSS", "JavaScript"] },
    { "name": "Deployment", "items": ["Heroku"] },
    { "name": "Highlights", "items": ["No jQuery"] },
  ]
draft: 0
---

The idea for this project came about when I was figuring out how to showcase all the original jokes and riddles I came up with. Currently, I store them Google Docs. But I wanted to create a generator which shows a random joke. It will also have a button for users to view another joke without refreshing the screen.

There were 2 parts to this project: the jokes API and the interface. The jokes API was built by extending [Davina's CMS](https://www.davina-devs.com/projectItem/?uuid=davinas-cms). It includes a route that pulls a random joke.

Initially, I built the interface as a separate HTML, CSS & JS project, but was unable to resolve the cross-origin errors. So I decided to built it into Davina's CMS. It uses the blade template & CSS to load the interface, and uses JavaScript to load the joke from the random joke API route.
