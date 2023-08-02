---
layout: essay
type: essay
published: true
title: "Summer Nights Bytes"
permalink: posts/analyzing-summer-photos
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
