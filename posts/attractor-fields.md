---
layout: essay
type: essay
published: true
title: "Using Attractors to Understand Complex Systems"
permalink: posts/using-attractors-to-understand-complex-systems
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

## What are attractor fields? 

> An attractor is a force or point of attraction that pulls objects towards it, while an attractor field is a more general concept that refers to a collection of attractors and their associated features in a dynamical system's state space.

Attractor fields are areas in a system that exert an influence on the behavior and movement of objects residing within the system. These fields are defined as regions in the system's state space, which the system naturally gravitates towards or "attracts" over time. The state space of a system is a mathematical idealisation of all the possible states a system can take. To put it simply, attractor fields help explain certain patterns, movements, and describe how objects move and interact in a given environment.

## Understanding attractor dynamics

It is important to understand that attractors serve as islands of stability amidst the sea of chaos. Although chaotic and unstable by nature, dynamic complex systems tend to settle into one of several possible steady states, known as "attractor basins". By inducing transitions between these attractor basins, it is possible to exert some control over these systems.

## The role of attractors in dynamical and complex systems

Attractors offer glimpses into the behavior of different systems over time, allowing us to gain a deeper understanding of their complexities. Therefore, they play a vital role in modeling complex systems, such as physics simulations involving the motion of particles in a fluid and computer graphics, to create realistic movement and behavior of particles or objects. Attractors can also be used to model more abstract systems, such as the dynamics of economic or social systems. For instance, they can help us understand the behavior of populations in a city or the spread of information through a network.

These systems are dynamical systems that are constantly evolving, and attractors have a set of states or values towards which the system tends to evolve, regardless of its initial state. By employing attractors, we can explore the intricate web of interactions and influences that shape our world, whether they're simple, like the motion of a pendulum, or complex, like the weather.

## Visualizing the influence of parameter changes on attractor fields

Fascinated by this concept, I began to further explore attractors by visualizing distance-based attractor fields, inspired from a <a href="https://object-e.net/tools/attractorfields-tools-gh" target="_blank" class="lined">tool</a> I had come across. Those acting as the ‘attractors’ in the field can be represented as points or lines that exert a force of attraction on nearby objects or particles. The strength of this attraction depends on the distance between the object and the attractor point or line, with closer objects experiencing a stronger pull. Objects move and interact in response to the collective influence of all the attractors in the system, creating patterns and movements that can be analyzed and understood.

Below are a few examples of my creations, showcasing the concept of attractor fields. By experimenting with the system's parameters and applying aesthetic efforts to emphasize the attractor dynamics, I generated multiple outputs.

<div class="ui small images">
  <img class="ui image" src="/images/attractorfields1.png" style="border: 1px solid black;">
  <img class="ui image" src="/images/attractorfields4.jpg" style="border: 1px solid black;">
  <img class="ui image" src="/images/attractorfields2.png" style="border: 1px solid black;">
  <img class="ui image" src="/images/attractorfields3.png" style="border: 1px solid black;">
</div>

Modifying the parameters of a dynamical system can have several effects. It can lead to the creation or elimination of attractors, shift the position or alter the shape of existing attractors. The basins of attraction associated with these attractors can change in size, shape, and location. Parameters can also influence the stability of the system, potentially converting stable regions into unstable ones and vice versa. Overall, modifying parameters has the potential to significantly influence the long-term trajectories and dynamics of a system, as well as the sets of initial conditions that lead to specific attractors. By altering parameters, one can explore how changes in the system's dynamics impact the basins of attraction and ultimately understand how different parameter settings affect the system's behavior. Understanding the sensitivity of the system to parameter variations is crucial for analyzing and predicting the dynamics of complex systems.

<div style="font-family: 'Source Code Pro', monospace;" class="ui secondary segment">
  <p>To visualize the distance-based attractor fields, I used a grid of points. For each point in the grid, a value is generated based on the distance to the closest attractor, whether it's a point or a line. While each point is solely influenced by its closest attractor, the definition can be easily adapted to incorporate influence from multiple attractors simultaneously. The output of this definition is a single value for each point on the grid, which can then be used to control any property. In this case, it controls the radii of circles positioned on the points.</p></div>

## Using attractors to analyze complex datasets

Attractor fields provide a valuable framework for analyzing and understanding complex systems, and visualizing them can help make sense of complex datasets, especially those with a high number of dynamic and time-series data. The attractor field approach aims to represent the data in a lower-dimensional space that captures the inherent structure of the system. By identifying the underlying attractors governing the dynamical system's behavior, it is possible to reduce the complexity of high-dimensional data while retaining important patterns and relationships in the data. This, in turn, facilitates improved predictions about future states of the system.

There are different types of attractors that can be observed in datasets, depending on the nature of the data. Some common types of attractors include point attractors (single stable points), limit cycle attractors (repetitive patterns), and strange attractors (complex, non-repetitive patterns).