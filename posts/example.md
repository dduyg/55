---
layout: essay
type: essay
published: true
title: "Example Post"
permalink: posts/wmhere
# All dates must be YYYY-MM-DD format!
date: 2021-09-08
labels:
  - HTML
  - JavaScript
  - R
# mediumurl: -
# githuburl: -
projectcheck: true
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

## The foolproof way to get ignored.

A simple “yes” would have answered the question, but we know that’s not the sort of answer he or she is looking for. Fortunately, someone kindly responded with a link to Facebook’s developer website. The asker should have done more research on his or her potential project. Then further 
