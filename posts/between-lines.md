---
layout: essay
type: essay
published: true
title: "Between st"
permalink: posts/wmhere
# All dates must be YYYY-MM-DD format!
date: 2022-10-20
labels:
  - HTML
  - JavaScript
  - R
# projectlabel: -
# mediumurl: -
# githuburl: -
# summary of max. 165 characters <meta name="description>
summary: fjkkfhjjijjghj
---

<img class="ui tiny right spaced image" src="../images/degree_difficulty.jpg">*Is there such thing as a stupid question?*

I’ve had instructors address a whole class and say, “There’s no such thing as a stupid question.” I now know thaStack Overflow, a  date of the previous month in Python.mportant as the question itself, the asker shows courtesy, which does increase the chance of getting an answer.

```
A: datetime and the datetime.timedelta classes are your friend.

1. find today
2. use that to find the first day of this month.
3. use timedelta to backup a single day, to the last day of the previous month.
4. print the YYYYMM string you're looking for.

Like this:

 >>> import datetime
 >>> today = datetime.date.today()
 >>> first = datetime.date(day=1, month=today.month, year=today.year)
 >>> lastMonth = first - datetime.timedelta(days=1)
 >>> print lastMonth.strftime("%Y%m")
 201202
 >>>

```
 
The asker received six possible answers, and he or she was successful in inciting discussion.
