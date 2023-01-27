---
layout: essay
type: essay
published: true
title: "Using attractor fields to understand complex systems"
permalink: en/posts/attractor-fields
# All dates must be YYYY-MM-DD format!
date: 2023-01-20
language: en
labels:
  - Complex Systems
  - Time Series
  - Data Visualization
---

<base target="_blank">

I’ve recently stumbled upon a concept called *attractor fields*. It is a mathematical construct used in the field of [dynamical systems](https://en.m.wikipedia.org/wiki/Dynamical_systems_theory) to describe the behavior of certain systems over time. If you think about it, the world around us is made up of countless complex systems, each one interacting and influencing the others in ways that we may not always fully understand. From natural systems, such as cells and ecological patterns, to the social systems of our societies, these systems are constantly in motion and constantly changing.

## What is an attractor field? 

> An attractor field is a force or point of attraction that can pull objects towards it.

Attractor fields are areas in a system that exert a influence on the behavior or movement of objects within the system. They are defined as regions in the state space of a system that the system tends to move towards, or "attract" over time. To put it simply, it's a way to explain certain patterns, movements and describe how objects move and interact in a given environment. 

This concept is often used in modelling of complex systems, like physics simulations such as the motion of particles in a fluid and computer graphics, to create realistic movement and behavior of particles or objects. But they can also be used to model more abstract systems, such as the dynamics of economic or social systems. For example the behavior of populations in a city or the spread of information through a network. 

## Vizualizing a grid of points attractors

Fascinated by this concept, I started experimenting with visualising distance based attractor fields, with the help of [this](https://object-e.net/tools/attractorfields-tools-gh) tool I found.

With *distance based* attractor fields, the strength of the attraction is determined by the distance between the object and the attractor point. Objects are attracted to certain points or regions within the environment. The closer the object is to the attractor, the stronger the pull towards it. 

<span style="color: #01868B; font-family: 'Source Code Pro', monospace;" class"no-bottom"> Different output visuals </span>

<div class="ui small rounded images">
  <img class="ui image" src="/images/attractorfields1.png">
  <img class="ui image" src="/images/attractorfields2.png">
  <img class="ui image" src="/images/attractorfields3.png">
  <img class="ui image" src="/images/attractorfields4.png">
</div>

For each point in the grid a value is generated, based on the distance of each point to the closest attractor (either point or line). Each point is affected only by one attractor (the closest). The output value for each point of the grid then controls the radii of circles positioned on the points.
