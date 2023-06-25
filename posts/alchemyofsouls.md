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

‘<a href="https://www.imdb.com/title/tt20859920/" target="_blank" class="lined">Alchemy of Souls</a>’ was my guilty pleasure this past months. The South Korean TV series is set in a fictional country where the fates of two people become intertwined due to the forbidden 'alchemy of souls', which allows souls to switch bodies, while also introducing various political conflicts alongside.

As a data scientist, I have a habit of seeing everything as a potential dataset that can be expressed in numbers and strings.

## Fictional Stories Help You Learn New Perspectives

Korean series are well known for their phenomenal storytelling. They often have complex and well-developed plots with compelling characters, were various themes and issues are explored. Whether it's the charming and charismatic leading man or the strong and independent leading woman, they have an interesting way of incorporating what a character is thinking into the plot. These characters are often written in a way that makes them feel like real people with flaws, hopes, and dreams. I have personally watched many K-dramas with relatable themes, that tackle pretty important issues. By depicting these themes in a way that is both honest and emotional, Korean dramas are able to connect with viewers on a deep level. Also worth mentioning are the visual elements that draw viewers in. Their high production values are no joke. It’s hard to look away from their high-quality cinematography, beautiful locations, and well-choreographed scenes. 

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

If you're curious to see the application, you can find it <a href="https://dduyg.github.io/alchemy-of-souls/" class="home">here <i class="external alternate icon"></i></a>. I hope you enjoy it as much as I enjoyed creating it, and that it inspires you to explore the meaningful messages that can be found in your favorite stories. 

<a href="https://github.com/theVacay/vacay">
   <button class="ui black button"> <i class="large github icon"></i> Source code </button>
</a>
