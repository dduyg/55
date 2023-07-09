---
layout: essay
type: essay
published: true
title: "Using Attractors to Understand Complex Systems"
permalink: posts/attractor-fields
# All dates must be YYYY-MM-DD format!
date: 2023-07-05
labels:
  - Complex Systems
  - Time Series
  - Data Visualization
mediumurl: mybyy.github.io
githuburl: https://github.com/dduyg/
projectcheck: false
# summary of max. 165 characters <meta name="description>
summary: What attractor fields are, and how they can be visualized and applied in data science to understand complex datasets.
---

I’ve recently stumbled upon a concept called *attractor fields*. It is a mathematical construct used in the field of <a href="https://en.m.wikipedia.org/wiki/Dynamical_systems_theory" target="_blank" class="lined">dynamical systems</a> to describe the behavior of certain systems *over time*. If you think about it, the world around us is made up of countless complex systems, each one interacting and influencing the others in ways that we may not always fully understand. From natural systems, such as cells and ecological patterns, to the social systems of our societies, these systems are constantly in motion and constantly changing. Understanding attractor fields can help us gain insights into the behavior of these systems. In this post, we will explore what attractor fields are, how they are used to model complex systems, and how they can be used in our datasets.

## What are Attractor Fields? 

> An attractor is a force or point of attraction that pulls objects towards it, while an attractor field is a more general concept that refers to a collection of attractors and their associated features in a dynamical system's state space.

Attractor fields are areas in a system that exert an influence on the behavior and movement of objects residing within the system. These fields are defined as regions in the system's state space, which the system naturally gravitates towards or "attracts" over time. The state space of a system is a mathematical idealisation of all the possible states a system can take. To put it simply, attractor fields help explain certain patterns, movements, and describe how objects move and interact in a given environment.

## The Role of Attractors in Dynamical and Complex Systems

Attractor fields provide insights into the behavior of various systems over time, allowing us to gain a deeper understanding of their complexities. The concept of attractors is often used in modelling of complex systems, like physics simulations such as the motion of particles in a fluid and computer graphics, to create realistic movement and behavior of particles or objects. They can also be used to model more abstract systems, such as the dynamics of economic or social systems. For example, the behavior of populations in a city or the spread of information through a network.

These systems are dynamical systems that change over time. An attractor has a set of states or values to which a dynamic system tends to evolve over time, regardless of the starting state. Dynamic systems are constantly evolving, never remaining static. And to make sense of their intricate workings, we can turn to attractor fields. These fields serve as a lens through which we can explore and understand the intricate web of interactions and influences that shape our world. They can be simple, like the motion of a pendulum, or complex, like the weather.

## Visualizing with attractors

Fascinated by this concept, I began experimenting with visualizing “*distance-based attractor fields*” inspired by a <a href="https://object-e.net/tools/attractorfields-tools-gh" target="_blank" class="lined">tool</a> I found. Those acting as the ‘attractors’ in the field can be represented as points or lines, with each point or line exerting a force of attraction on nearby objects or particles. The strength of the attraction is usually determined by the distance between the object and the attractor point or line, with closer objects experiencing a stronger pull. Objects move and interact in response to the collective influence of all the attractors in the system, creating patterns and movements that can be analyzed and understood.

Below are some of my creations, which showcase the concept of attractor fields. By experimenting with the system’s parameters, I generated multiple outputs. Additionally, I have applied aesthetic efforts to emphasize the attractor dynamics.

<div class="ui small images">
  <img class="ui image" src="/images/attractorfields1.png" style="border: 1px solid black;">
  <img class="ui image" src="/images/attractorfields4.jpg" style="border: 1px solid black;">
  <img class="ui image" src="/images/attractorfields2.png" style="border: 1px solid black;">
  <img class="ui image" src="/images/attractorfields3.png" style="border: 1px solid black;">
</div>

When you change the values of the parameters of a system, it can alter the behavior and dynamics of the system. This, in turn, can affect the basins of attraction. Thereby changing the set of initial conditions that lead to different outcomes or attractor states. The basins of attraction refers to the regions in the state space where the system's trajectories converge to specific attractor points or behaviors. Changing the parameters can affect the shape, size, and location of these basins.

<div style="font-family: 'Source Code Pro', monospace;" class="ui secondary segment">
  <p>To visualize the distance-based attractor fields, I used a grid of points. For each point in the grid, a value is generated based on the distance to the closest attractor, whether it's a point or a line. While each point is solely influenced by its closest attractor, the definition can be easily adapted to incorporate influence from multiple attractors simultaneously. The output of this definition is a single value for each point on the grid, which can then be used to control any property. In this case, it controls the radii of circles positioned on the points.</p></div>

## Using attractor fields in complex datasets

Attractor fields provide a valuable framework for analyzing and understanding complex systems, and visualizing them can help make sense of complex datasets, especially those with a high number of dynamic and time-series data. The attractor field approach aims to represent the data in a lower-dimensional space that captures the inherent structure of the system. By identifying the underlying attractors governing the dynamical system's behavior, it is possible to reduce the complexity of high-dimensional data while retaining important patterns and relationships in the data. This, in turn, facilitates improved predictions about future states of the system.
