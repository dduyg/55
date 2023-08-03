---
layout: essay
type: essay
published: true
title: "Decoding Our Summer Times: Summer Nights Bytes"
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
summary: Unveiling patterns from images captured during summer times.
---

In this project, I want to use data to 


To give you a flavor of the game/ Here is some code that illustrates how we read values from the line sensors:
```python
import os
import cv2
import numpy as np
from sklearn.cluster import KMeans


def extract_dominant_colors(image_path, n_colors=1):
    """
    Function to extract the dominant color(s) from an image using KMeans clustering.

    Parameters:
        image_path (str): The path of the input image file.
        n_colors (int, optional): The number of dominant colors to extract (default is 1).

    Returns:
        List[str]: A list of hexadecimal color codes representing the dominant color(s).
    """
    # Read the image using OpenCV
    image = cv2.imread(image_path)
    # Convert the image from BGR to RGB format
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    # Reshape the image into a 2D array of pixels
    pixels = image.reshape(-1, 3)

    # Apply KMeans clustering to find the dominant color(s)
    kmeans = KMeans(n_clusters=n_colors, n_init=10)  # Explicitly set n_init to 10 to suppress the warning
    kmeans.fit(pixels)
    dominant_colors = kmeans.cluster_centers_.astype(int)

    # Convert the dominant color(s) to hexadecimal format
    hex_colors = ['#{:02x}{:02x}{:02x}'.format(*color) for color in dominant_colors]
    return hex_colors


def process_images_in_folder(folder_path, n_colors=1):
    """
    Function to process all images in a folder and extract dominant color(s) from each image.

    Parameters:
        folder_path (str): The full path of the folder containing the images.
        n_colors (int, optional): The number of dominant colors to extract (default is 1).
    """
    # Get a list of image files in the specified folder
    image_files = [f for f in os.listdir(folder_path) if f.endswith(('.jpg', '.png', '.jpeg'))]

    # Process each image and extract its dominant color(s)
    for image_file in image_files:
        image_path = os.path.join(folder_path, image_file)
        dominant_colors = extract_dominant_colors(image_path, n_colors)
        print(f"{image_file}: {dominant_colors}")

if __name__ == "__main__":
    # Input the full path of the folder containing the images
    folder_path = "/path/to/your/image/folder"
    
    # Define the number of dominant colors you want to extract
    num_colors = 2  # Change this value to extract a different number of colors

    process_images_in_folder(folder_path, num_colors)
```
