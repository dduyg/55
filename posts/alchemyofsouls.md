---
layout: essay
type: essay
published: true
title: "Extracting Valuable Lessons from ‘Alchemy of Souls’"
permalink: posts/alchemy-of-souls-project
# All dates must be YYYY-MM-DD format!
date: 2023-01-08
labels:
  - Data Extraction
  - NLP
  - Web Application
  - Python
  - JavaScript
  - HTML
mediumurl: mybyy.github.io
githuburl: https://github.com/dduyg/alchemy-of-souls
projectcheck: true
# summary of max. 165 characters <meta name="description>
summary: How fictional stories can help you learn new perspectives by turning it into a data-based web application.
---


<img class="ui medium right floated rounded image" src="/images/vacay-home-page.png">

‘<a href="https://www.imdb.com/title/tt20859920/" target="_blank" class="lined">Alchemy of Souls</a>’ was my guilty pleasure this past months. The South Korean TV series is set in a fictional country, where two people's fates become intertwined due to the forbidden "alchemy of souls". This magical process allows souls to switch bodies, while also introducing various political conflicts alongside.

As a data scientist, I have a habit of seeing everything as a potential dataset that can be expressed in numbers and strings.

For this project, I was the lead programmer who was responsible for programming the various capabilities of the mouse.  I started by programming the basics, such as sensor polling and motor actuation using interrupts.  From there, I then programmed the basic PD controls for the motors of the mouse.  The PD control the drive so that the mouse would stay centered while traversing the maze and keep the mouse driving straight.  I also programmed basic algorithms used to solve the maze such as a right wall hugger and a left wall hugger algorithm.  From there I worked on a flood-fill algorithm to help the mouse track where it is in the maze, and to map the route it takes.  We finished with the fastest mouse who finished the maze within our college.

Here is some code that illustrates how we read values from the line sensors:

```python
import random

# define maze size
WIDTH = 21
HEIGHT = 21

# define maze symbols
WALL = "#"
SPACE = " "
START = "S"
END = "E"

# initialize maze grid
maze = [[WALL for x in range(WIDTH)] for y in range(HEIGHT)]

# recursive backtracker algorithm
def create_maze(x, y):
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    random.shuffle(directions)
    for dx, dy in directions:
        nx, ny = x + dx, y + dy
        if 0 <= nx < WIDTH and 0 <= ny < HEIGHT and maze[ny][nx] == WALL:
            maze[y + dy // 2][x + dx // 2] = SPACE
            maze[ny][nx] = SPACE
            create_maze(nx, ny)

# create maze starting from (0, 0)
create_maze(0, 0)

# add start and end points
maze[0][0] = START
maze[HEIGHT - 1][WIDTH - 1] = END

# print maze
for row in maze:
    print("".join(row))
```

You can learn more at the [UH Micromouse Website](http://www-ee.eng.hawaii.edu/~mmouse/about.html).

<a href="https://github.com/theVacay/vacay">
   <button class="ui black button"> <i class="large github icon"></i> Source code </button>
</a>
