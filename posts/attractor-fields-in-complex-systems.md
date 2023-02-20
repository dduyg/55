---
layout: essay
type: essay
published: true
title: "Using attractor fields to understand complex systems"
permalink: posts/attractor-fields
# All dates must be YYYY-MM-DD format!
date: 2023-01-20
labels:
  - Complex Systems
  - Time Series
  - Data Visualization
mediumurl: https://www.instagram.com/p/ComUzxpAMO_/?igshid=MDJmNzVkMjY=
---

I’ve recently stumbled upon a concept called <span class="marking">attractor fields</span>. It is a mathematical construct used in the field of <a href="https://en.m.wikipedia.org/wiki/Dynamical_systems_theory" target="_blank">dynamical systems</a> to describe the behavior of certain systems <u>over time</u>. If you think about it, the world around us is made up of countless complex systems, each one interacting and influencing the others in ways that we may not always fully understand. From natural systems, such as cells and ecological patterns, to the social systems of our societies, these systems are constantly in motion and constantly changing. Understanding attractor fields can help us gain insights into the behavior of these systems.

## What are attractor fields? 

> An attractor field is a force or point of attraction that can pull objects towards it.

Attractor fields are areas in a system that exert an influence on the behavior or movement of objects within the system. They are defined as regions in the state space of a system that the system tends to move towards, or "<u>attract</u>" over time.

To put it simply, they are a way to explain certain patterns, movements, and describe how objects move and interact in a given environment.

This concept is often used in modelling of complex systems, like physics simulations such as the motion of particles in a fluid and computer graphics, to create realistic movement and behavior of particles or objects. They can also be used to model more abstract systems, such as the dynamics of economic or social systems. For example, the behavior of populations in a city or the spread of information through a network.

These systems are dynamical systems that change over time. They can be simple, like the motion of a pendulum, or complex, like the weather. The behavior of these systems is often difficult to predict, as they can exhibit non-linear behavior. Attractor fields are a tool used by scientists to understand the patterns and relationships in these systems.

## Vizualizing a grid of point attractors

Fascinated by this concept, I started experimenting with visualising distance based attractor fields, with the help of <a href="https://object-e.net/tools/attractorfields-tools-gh" target="_blank">this</a> tool I found.

With *distance based* attractor fields, the strength of the attraction is determined by the distance between the object and the attractor point. Objects are attracted to certain points or regions within the environment, and the closer the object is to the attractor, the stronger the pull towards it.

<div style="color: #454545; font-family: 'Source Code Pro', monospace;" class="no-bottom"> Different output visuals </div>

<div class="ui small rounded images">
  <img class="ui image" src="/images/attractorfields1.png">
  <img class="ui image" src="/images/attractorfields2.png">
  <img class="ui image" src="/images/attractorfields3.png">
  <img class="ui image" src="/images/attractorfields4.jpg">
</div>

For each point in the grid a value is generated, based on the distance of each point to the closest attractor (either point or line). Each point is affected only by one attractor (the closest). The output value for each point of the grid then controls the radii of circles positioned on the points.

## The use of attractor fields

Complex systems are constructed of many interacting parts that exhibit non-linear behaviors. Visualizing attractor fields can be a powerful tool for analyzing and understanding complex datasets. Many real-world systems have a high number of variables, making it challenging to understand the underlying patterns and relationships in the data. By inspecting the attractor field of a system, a data scientist may be able to reduce the number of variables that need to be considered in order to understand the system. It can help in identifying patterns and structures in the data, and can be used to predict future states of the system. 
