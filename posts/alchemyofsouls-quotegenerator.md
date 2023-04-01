---
layout: essay
type: essay
published: true
title: "Extracting Valuable Lessons from 'Alchemy of Souls' by Creating a Web Application"
permalink: posts/alchemyofsoulsproject
# All dates must be YYYY-MM-DD format!
date: 2023-01-08
labels:
  - Data Cleaning
  - Dataset
  - JavaScript
  - Web Application
mediumurl: mybyy.github.io
projectcheck: true
# summary of max. 165 characters <meta name="description>
summary: A text adventure game I developed for ICS 313.
---


<img class="ui medium right floated rounded image" src="/images/vacay-home-page.png">

I turned raw subtitles data into a collection of favorite quotes. In this project, I want to use data to support my observation during my first six months in the U.S, that the milk tea in New York City is much, much, more expensive than it in Beijing. So, I manually scrape 144 drinks from three milk tea shops I mentioned above in Beijing, and scrape 292 drinks from five milk tea shops that I visited in New York. I extract the base drinks, toppings and fruit types of all 436 drinks, as well as their prices.

Micromouse is an event where small robot “mice” solve a 16 x 16 maze.  Events are held worldwide.  The maze is made up of a 16 by 16 gird of cells, each 180mm square with walls 50 mm high.  The mice are completely autonomous robots that must find their way from a predetermined starting position to the central area of the maze unaided.  The mouse will need to keep track of where it is, discover walls as it explores, map out the maze and detect when it has reached the center.  having reached the center, the mouse will typically perform additional searches of the maze until it has found the most optimal route from the start to the center.  Once the most optimal route has been determined, the mouse will run that route in the shortest possible time.

For this project, I was the lead programmer who was responsible for programming the various capabilities of the mouse.  I started by programming the basics, such as sensor polling and motor actuation using interrupts.  From there, I then programmed the basic PD controls for the motors of the mouse.  The PD control the drive so that the mouse would stay centered while traversing the maze and keep the mouse driving straight.  I also programmed basic algorithms used to solve the maze such as a right wall hugger and a left wall hugger algorithm.  From there I worked on a flood-fill algorithm to help the mouse track where it is in the maze, and to map the route it takes.  We finished with the fastest mouse who finished the maze within our college.

Here is some code that illustrates how we read values from the line sensors:

```js
byte ADCRead(byte ch)
{
    word value;
    ADC1SC1 = ch;
    while (ADC1SC1_COCO != 1)
    {   // wait until ADC conversion is completed   
    }
    return ADC1RL;  // lower 8-bit value out of 10-bit data from the ADC
}
```

You can learn more at the [UH Micromouse Website](http://www-ee.eng.hawaii.edu/~mmouse/about.html).

<a href="https://github.com/theVacay/vacay">
   <button class="ui black button"> <i class="large github icon"></i> Source code </button>
</a>
