---
layout: essay
type: essay
published: true
title: "Using Attractors to Understand Complex Systems"
permalink: posts/attractor-fields
# All dates must be YYYY-MM-DD format!
date: 2023-01-20
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

I’ve recently stumbled upon a concept called *attractor fields*. It is a mathematical construct used in the field of <a href="https://en.m.wikipedia.org/wiki/Dynamical_systems_theory" target="_blank" class="lined">dynamical systems</a> to describe the behavior of certain systems *over time*. If you think about it, the world around us is made up of countless complex systems, each one interacting and influencing the others in ways that we may not always fully understand. From natural systems, such as cells and ecological patterns, to the social systems of our societies, these systems are constantly in motion and constantly changing. Understanding attractor fields can help us gain insights into the behavior of these systems. In this post, we will explore what attractor fields are, how they are used to model complex systems, and how they can be used in data science.

## What are attractor fields? 

> An attractor is a force or point of attraction that pulls objects towards it, while an attractor field is a more general concept that refers to a collection of attractors and their associated features in a dynamical system's state space.

Attractor fields are areas in a system that exert an influence on the behavior or movement of objects within the system. They are defined as regions in the state space of a system (a mathematical idealisation of all the possible states a system can take) that the system tends to move towards, or "attract" over time. To put it simply, they are a way to explain certain patterns, movements, and describe how objects move and interact in a given environment.

This concept is often used in modelling of complex systems, like physics simulations such as the motion of particles in a fluid and computer graphics, to create realistic movement and behavior of particles or objects. They can also be used to model more abstract systems, such as the dynamics of economic or social systems. For example, the behavior of populations in a city or the spread of information through a network.

These systems are dynamical systems that change over time. An attractor has a set of states or values to which a dynamic system tends to evolve over time, regardless of the starting state. They can be simple, like the motion of a pendulum, or complex, like the weather.

## Visualizing Attractor Fields

Fascinated by this concept, I started experimenting with visualizing distance based attractor fields using a <a href="https://object-e.net/tools/attractorfields-tools-gh" target="_blank" class="lined">tool</a> I found. Those acting as the ‘attractors’ in the field can be represented as points or lines, with each point or line exerting a force of attraction on nearby objects or particles. The strength of the attraction is usually determined by the distance between the object and the attractor point or line, with closer objects experiencing a stronger pull. Objects move and interact in response to the collective influence of all the attractors in the system, creating patterns and movements that can be analyzed and understood.

Below are some of my outputs that showcase the concept of attractor fields. By exploring and experimenting with the system's parameters, I generated multiple creations. Also note that I applied some aesthetical efforts to emphasise the attractor dynamics. When you change the values of the parameters of a system, it can alter the behavior and dynamics of the system. This, in turn, can affect the basins of attraction. Thereby changing the set of initial conditions that lead to different outcomes or attractor states. The basins of attraction refers to the regions in the state space where the system's trajectories converge to specific attractor points or behaviors. Changing the parameters can affect the shape, size, and location of these basins.

<div class="ui secondary segment"> 
  <div class="ui small images">
  <img class="ui image" src="/images/attractorfields1.png" style="border: 1px solid black;">
  <img class="ui image" src="/images/attractorfields4.jpg" style="border: 1px solid black;">
  <img class="ui image" src="/images/attractorfields2.png" style="border: 1px solid black;">
  <img class="ui image" src="/images/attractorfields3.png" style="border: 1px solid black;">
</div>
  <p>To create the visualizations, I used a grid of points, and for each point in the grid, a value is generated based on the distance of each point to the closest attractor (either point or line). Each point is affected only by one attractor (the closest), but the definition can be easily adapted to use influence from several attractors at once quite easily. The output of the definition is one value for each point of the grid that can then be used to control any property. In my outputs it controls the radii of circles positioned on the points.</p></div>

## Using Attractor Fields in Data Science

Attractor fields provide a useful framework for data science, particularly in the analysis of complex systems and nonlinear dynamical systems.

Attractor fields are a valuable tool for analyzing and understanding complex systems, and visualizing them can help make sense of complex datasets, especially those with a high number of dynamic and time-series data. 

Attractors can be used to visualize complex high-dimensional data by projecting it onto a lower-dimensional spaces. In these cases, the attractor field provides a low-dimensional representation of the data that captures the underlying structure of the system. By identifying the underlying attractors that govern the behavior of the dynamical system, attractor fields can help reduce the complexity of high-dimensional data while preserving important patterns and relationships in the data, and can be used to predict future states of the system.

While attractor fields and data science may seem unrelated, they can intersect in the context of complex dynamical systems with high-dimensional data. Machine learning models often seek to find attractors in high-dimensional data spaces in order to cluster similar data points together. In this case, the attractors are not explicitly referred to as such, but the concept is still relevant to the algorithms being used.

For instance, attractor fields have been used in the development and improvement of self-organizing maps (SOMs). SOMs are a type of neural network that can be used to visualize high-dimensional data in a low-dimensional space. They work by mapping the data onto a grid of nodes, where each node represents a different region of the data space. By adjusting the connections between nodes over time, the SOM can learn to recognize patterns in the data and map them onto the grid.
