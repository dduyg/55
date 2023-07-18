---
layout: essay
type: essay
published: true
title: "Extracting Valuable Messages from ‘Alchemy of Souls’"
permalink: posts/alchemy-of-souls-project
# All dates must be YYYY-MM-DD format!
date: 2023-04-20
labels:
  - Data Extraction
  - NLP
  - Web Application
  - Python
  - JavaScript
  - HTML
# mediumurl: https://67
githuburl: https://github.com/dduyg/alchemy-of-souls
projectcheck: true
# summary of max. 165 characters <meta name="description>
summary: How a fictional story can help you learn new perspectives, by turning it into a data-based web application using NLP techniques.
---

  <div class="ui accordion">
    <div class="ui labeled icon post button title">    
      <div class="ui icon"><i class="dropdown icon"></i></div>
       <div style="font-family: 'Source Code Pro', monospace;" class="ui content">Table of Contents&nbsp;&nbsp;</div>
      </div>
    <div class="content">
            <div class="ui small grey message">
      <div style="color: black;" class="header">Table of Contents</div>
  <ul class="list">
    <li><a href="#section-1" class="lined">How fictional stories can help conceptualize the world</a></li>
    <li><a href="#section-2" class="lined">Creating the data</a>
       <ul class="list">
          <li><a href="#section-3" class="lined">Applying NLP techniques to find the valuable lines</a></li>
       </ul> 
    </li>
    <li><a href="#section-4" class="lined">Building a application with my dataset</a></li>
  </ul>
    </div>
   </div>
  </div>

<div class="ui hidden divider"></div>

*<a href="https://www.imdb.com/title/tt20859920/" target="_blank" class="lined">Alchemy of Souls</a>* was my guilty pleasure this past months. The South Korean TV series is set in a fictional country where the fates of two people become intertwined due to the forbidden 'alchemy of souls', which allows souls to switch bodies, while also introducing various political conflicts alongside. As a data scientist, I have a habit of seeing everything as a potential dataset that can be expressed in numbers and strings.


## <a id="section-1"></a>How fictional stories can help conceptualize the world

We all enjoy a good story. Throughout history, telling stories has been one of our most fundamental communication methods. Interestingly, even in the realm of Data Science, we recognize and appreciate the influence of data storytelling. Stories go beyond mere entertainment; they possess a remarkable ability to teach us important life lessons, help us make sense of the world around us, and inspire us to think and act in new ways. Undoubtedly, they are a timeless and universal tool, capable of engaging, entertaining, and inspiring us all.

Korean series are well known for their phenomenal storytelling. They often have complex and well-developed plots with compelling characters, were various themes and issues are explored. Whether it's the charming and charismatic leading man or the strong and independent leading woman, they have an interesting way of incorporating what a character is thinking into the plot. These characters are often written in a way that makes them feel like real people with flaws, hopes, and dreams. I have personally watched many K-dramas with relatable themes, that tackle pretty important issues. By depicting these themes in a way that is both honest and emotional, Korean dramas are able to connect with viewers on a deep level. Also worth mentioning are the visual elements, their high production values are no joke. It’s hard to look away from their high-quality cinematography, beautiful locations, and well-choreographed scenes.

<div class="ui embed">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/axXUNvd47GI?cc_load_policy=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
</div>

## <a id="section-2"></a>Creating the data

To create the data, I turned to the English subtitles per episode, which where available in `srt` format. Using Python, I <a href="https://github.com/dduyg/alchemy-of-souls/blob/main/scripts/srt2csv.py" target="_blank" class="lined">wrote a script</a>  to extract the dialogue from the subtitle files per episode and convert them into a `csv` file. This process involved identifying and selecting the relevant data, with the result of these output csv files containing all the spoken lines by the characters throughout the episode, along with timestamps, the season and episode number in which they were spoken. With this collection of prepped <a href="https://github.com/dduyg/alchemy-of-souls/tree/main/data/AoS-episodes" target="_blank" class="lined">datasets</a> in hand, I was ready to analyze the dialogue and find the meaningful, iconic lines that contain valuable messages, lessons using Natural Language Processing (NLP) techniques in Python.

### <a id="section-3"></a>Applying NLP techniques to find the valuable lines

Using a topic modeling technique like Latent Dirichlet Allocation (LDA) to extract themes and messages from the preprocessed text data:

```python
from gensim import corpora
from gensim.models import LdaModel

# create a dictionary
dictionary = corpora.Dictionary(df_ep19['clean_text'].apply(lambda x: x.split()))

# create a corpus
corpus = [dictionary.doc2bow(text.split()) for text in df_ep19['clean_text']]

# train the LDA model
lda_model = LdaModel(corpus=corpus, id2word=dictionary, num_topics=5, random_state=42)
```

Viewing the top 5 topics and the top words in each topic:

```python
# print the topics and the top words in each topic
for idx, topic in lda_model.print_topics(-1):
    print(f"Topic: {idx} \nWords: {topic}\n")
```

## <a id="section-4"></a>Building a application with my dataset

<img class="ui small left floated image" src="https://raw.githubusercontent.com/dduyg/alchemy-of-souls/main/images/project-image.png">If you're curious to see the application, you can find it <a href="https://dduyg.github.io/alchemy-of-souls/" target="_blank" class="home">here</a>. <i class="small grey external alternate icon"></i> I hope you enjoy it as much as I enjoyed creating it, and that it inspires you to explore the meaningful messages that can be found in your favorite stories. 

<a href="https://github.com/dduyg/alchemy-of-souls" target="_blank">
   <button class="ui black button"> <i class="large github icon"></i> Source code </button>
</a>


<script>
   $('.ui.accordion').accordion();
</script>

<script>
  $('.ui.embed').embed();
</script>
