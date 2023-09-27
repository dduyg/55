---
layout: essay
type: essay
published: true
title: "Using Attractors to Understand Complex Systems"
permalink: posts/using-attractors-to-understand-complex-systems
# All dates must be YYYY-MM-DD format!
date: 2023-05-17
labels:
  - Complex Systems
  - Time Series
  - Data Visualization
# projectlabel: -
# mediumurl: -
# githuburl: -
# summary of max. 165 characters <meta name="description>
summary: What attractors are, and how they can be visualized and applied to understand complex datasets.
---

Recently, I stumbled upon an intriguing concept known as *attractors*, which originates from the study of <a href="https://en.m.wikipedia.org/wiki/Dynamical_systems_theory" target="_blank" class="lined">dynamical systems</a> and <a href="https://en.m.wikipedia.org/wiki/Chaos_theory" target="_blank" class="lined">chaos theory</a>. They provide a way to understand the behavior of various systems over time. If you think about it, the world around us is made up of countless complex systems, each one interacting and influencing the others in ways that we may not always fully understand. From natural systems to the social systems of our societies, these systems are constantly in motion and constantly changing. Understanding the concept of attractors can help us gain insights into the behavior of these systems. In this post, we will explore what attractors are, how they are used to model complex systems, and how they can be used in our datasets.

## What are attractors? 

Attractors help us understand the intriguing dynamics of objects within a system. An attractor is like a magnetic point of attraction that draws objects towards it (,,,) goes beyond this singular point and encompasses a collection of attractors and their associated features in a dynamical system's state space.

Attractors exert an influence on the behavior and movement of objects residing within the system. These attractors are defined as regions in the system's state space, which the system naturally gravitates towards or "attracts" over time. The state space of a system is a mathematical idealisation of all the possible states a system can take. To put it simply, attractors help explain certain patterns, movements, and describe how objects move and interact in a given environment.

## Understanding the relation between complexity and attractors
Complexity is essentially a multitude of overlapping, dynamic influences that are bound by context and time, leading to different outcomes depending on the specific conditions. It is precisely due to this web of interconnected layers that makes complex systems challenging to predict and control. The importance of attractors lies in their ability to provide stable and predictable patterns within complex systems, which supports the understanding and modeling of dynamic behaviors.

It is important to understand that attractors serve as islands of stability amidst the sea of chaos. Although chaotic and unstable by nature, dynamic complex systems tend to settle into one of several possible steady states, known as "attractor basins". By inducing transitions between these attractor basins, it is possible to exert some control and guide the system towards desired states. So, while attractors may seem like a small detail in the larger study of complex systems, they are in fact a fascinating concept that underpins our understanding and influence of these systems.

## The role of attractors in modeling complex and dynamical systems

Attractors offer glimpses into the behavior of systems, allowing us to gain a deeper understanding of their complexities. Therefore, they play a vital role in modeling complex systems, such as physics simulations involving the motion of particles in a fluid and computer graphics, to create realistic movement and behavior of particles or objects. Attractors can also be used to model more abstract systems, such as the dynamics of economic or social systems. For instance, they can help us understand the behavior of populations in a city or the spread of information through a network.

These systems are dynamical systems that are constantly evolving, and attractors have a set of states or values towards which the system tends to evolve, regardless of its initial state. By using attractors, we can explore the intricate web of interactions and influences that shape our world.

## Visualizing the influence of parameter changes on attractor fields

Fascinated by this concept, I began to further explore attractors by visualizing *distance-based attractor fields*, with inspiration from a <a href="https://object-e.net/tools/attractorfields-tools-gh" target="_blank" class="lined">tool</a> I had come across. Those acting as the ‘attractors’ in the field can be represented as points that exert a force of attraction on nearby objects. The strength of this attraction depends on the distance between the object and the attractor point, with closer objects experiencing a stronger pull. Objects move and interact in response to the collective influence of all the attractors in the system, creating patterns and movements that can be analyzed and understood.

Below are a few examples of my creations, showcasing the concept of attractors. I generated multiple outputs, by experimenting with the system's parameters and applying aesthetic efforts to emphasize the attractor dynamics.

<div class="ui small images">
  <img class="ui image" src="/images/attractorfields1.png" style="border: 1px solid black;">
  <img class="ui image" src="/images/attractorfields4.jpg" style="border: 1px solid black;">
  <img class="ui image" src="/images/attractorfields2.png" style="border: 1px solid black;">
  <img class="ui image" src="/images/attractorfields3.png" style="border: 1px solid black;">
</div>

<pre style="max-width: 550px">
<------------------------------------------------------------------------------------------------------------------>
To visualize the distance-based attractors, I used a grid of points. For each point in the grid, a value is
generated based on the distance to the closest attractor. While each point is solely influenced by its closest
attractor, the definition can be easily adapted to incorporate influence from multiple attractors simultaneously.
The output of this definition is a single value for each point on the grid, which can then be used to control any
property. In this case, it controls the radii of circles positioned on the points.
<------------------------------------------------------------------------------------------------------------------>
</pre>

Modifying the parameters of a dynamical system can have several effects. It can lead to the creation or elimination of attractors, shift the position or alter the shape of existing attractors. The basins of attraction associated with these attractors can change in size, shape, and location. Parameters can also influence the stability of the system, potentially converting stable regions into unstable ones and vice versa. Overall, modifying parameters has the potential to significantly influence the long-term trajectories and dynamics of a system, as well as the sets of initial conditions that lead to specific attractors. By altering parameters, we can explore how changes in the system's dynamics impact the basins of attraction and ultimately understand how different parameter settings affect the system's behavior. Understanding the sensitivity of the system to parameter variations is crucial for analyzing and predicting the dynamics of complex systems.

## Using attractors to analyze complex datasets

Attractors provide a valuable framework for analyzing and understanding complex systems, and visualizing them can help make sense of complex datasets, especially those with a high number of dynamic and time-series data. The attractor field approach aims to represent the data in a lower-dimensional space that captures the inherent structure of the system. By identifying the underlying attractors governing the dynamical system's behavior, it is possible to reduce the complexity of high-dimensional data while retaining important patterns and relationships in the data. This, in turn, facilitates improved predictions about future states of the system.

There are different types of attractors that can be observed in datasets, depending on the nature of the data. Some common types of attractors include point attractors (single stable points), limit cycle attractors (repetitive patterns), and strange attractors (complex, non-repetitive patterns). Because attractors represent stable patterns in time towards which a system is drawn, they help identify the underlying patterns and structures in a system's dynamics, even when the system exhibits nonlinear or chaotic behavior. This can manifest as specific patterns, cycles, or even chaotic trajectories within the data of complex systems. The presence of multiple attractors introduces the concept of bifurcations, where a small change in system parameters or initial conditions can lead to a qualitative change in the system's behavior. By analyzing the attractors and their stability, we can explore the transitions between different attractors and the emergence of complex patterns.

<hr>
In conclusion, attractors serve as a lens through which we can explore and comprehend the dynamics of complex systems. Thereby helping us understand how seemingly random events and patterns in complex systems can actually be structured and predictable. By understanding attractors, we can navigate the intricacies of complex systems and gain valuable insights into the interconnectedness of our world.
