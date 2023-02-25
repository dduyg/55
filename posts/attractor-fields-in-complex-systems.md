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

I’ve recently stumbled upon a concept called *attractor fields*. It is a mathematical construct used in the field of <a href="https://en.m.wikipedia.org/wiki/Dynamical_systems_theory" target="_blank">dynamical systems</a> to describe the behavior of certain systems *over time*. If you think about it, the world around us is made up of countless complex systems, each one interacting and influencing the others in ways that we may not always fully understand. From natural systems, such as cells and ecological patterns, to the social systems of our societies, these systems are constantly in motion and constantly changing. Understanding attractor fields can help us gain insights into the behavior of these systems.

## What are attractor fields? 

> An attractor is a force or point of attraction that can pull objects towards it, while an attractor field is a more general concept that refers to a collection of attractors and their associated features in a dynamical system's state space.

Attractor fields are areas in a system that exert an influence on the behavior or movement of objects within the system. They are defined as regions in the state space of a system that the system tends to move towards, or "attract" over time.

To put it simply, they are a way to explain certain patterns, movements, and describe how objects move and interact in a given environment.

This concept is often used in modelling of complex systems, like physics simulations such as the motion of particles in a fluid and computer graphics, to create realistic movement and behavior of particles or objects. They can also be used to model more abstract systems, such as the dynamics of economic or social systems. For example, the behavior of populations in a city or the spread of information through a network.

These systems are dynamical systems that change over time. An attractor has a set of states or values to which a dynamic system tends to evolve over time, regardless of the starting state. They can be simple, like the motion of a pendulum, or complex, like the weather.

## Visualizing Attractor Fields

Fascinated by this concept, I started experimenting with visualizing attractor fields using a <a href="https://object-e.net/tools/attractorfields-tools-gh" target="_blank">tool</a> I found. Those acting as the ‘attractors’ in the field can be represented as points or lines, with each point or line exerting a force of attraction on nearby objects or particles. The strength of the attraction is usually determined by the distance between the object and the attractor point or line, with closer objects experiencing a stronger pull. Objects move and interact in response to the collective influence of all the attractors in the system, creating patterns and movements that can be analyzed and understood.

To create the visualizations, I used a grid of points, and for each point in the grid, a value is generated based on the distance of each point to the closest attractor (either point or line). Each point is affected only by one attractor (the closest), but the definition can be easily adapted to use influence from several attractors at once quite easily. The output of the definition is one value for each point of the grid that can then be used to control any property. In my outputs it controls the radii of circles positioned on the points.

<div style="color: #454545; font-family: 'Source Code Pro', monospace;" class="no-bottom"> Different output visuals </div>

<div class="ui small rounded images">
  <img class="ui image" src="/images/attractorfields1.png">
  <img class="ui image" src="/images/attractorfields2.png">
  <img class="ui image" src="/images/attractorfields4.jpg">
  <img class="ui image" src="/images/attractorfields3.png">
</div>

## Using Attractor Fields in Data Science

Complex systems are constructed of many interacting parts that exhibit non-linear behaviors. Visualizing attractor fields can be a powerful tool for analyzing and understanding complex datasets. Many real-world systems have a high number of variables, making it challenging to understand the underlying patterns and relationships in the data. By inspecting the attractor field of a system, a data scientist may be able to reduce the number of variables that need to be considered in order to understand the system. It can help in identifying patterns and structures in the data, and can be used to predict future states of the system. 
