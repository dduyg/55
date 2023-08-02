---
layout: essay
type: essay
published: true
title: "Summer Nights Bytes"
permalink: posts/56788
# All dates must be YYYY-MM-DD format!
date: 2023-08-06
labels:
  - Python
  - OpenCV
  - Computer Vision
# mediumurl: -
# githuburl: -
projectcheck: true
# summary of max. 165 characters <meta name="description>
summary: Unveiling patterns from images captured during summer family vacations.
---

<img class="ui tiny left circular floated image" src="../images/degree_difficulty.jpg">

In this project, I want to use data to support my observation during my first six months in the U.S, that the milk tea in New York City is much, much, more expensive than it in Beijing. So, I manually scrape 144 drinks from three milk tea shops I mentioned above in Beijing, and scrape 292 drinks from five milk tea shops that I visited in New York. I extract the base drinks, toppings and fruit types of all 436 drinks, as well as their prices.

<img class="ui tiny left circular floated image" src="../images/degree_difficulty.jpg">

I never used to think that design and technology went hand in hand.  Thus, learning about software engineering and the role of design has been incredibly interesting to me. Design, implementation, and management are just some of the many things I wish to learn more about. Good art, in a way, makes a person question it. They become joined in the idea of visualization – where captivation meets inspiration.

Here is some code that illustrates how we read values from the line sensors:
```python

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
```
