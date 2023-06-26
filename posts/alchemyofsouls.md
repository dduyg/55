---
layout: essay
type: essay
published: true
title: "Extracting Valuable Lessons from ‘Alchemy of Souls’"
permalink: posts/alchemy-of-souls-project
# All dates must be YYYY-MM-DD format!
date: 2023-01-08
labels:
  - Data Extraction
  - NLP
  - Web Application
  - Python
  - JavaScript
  - HTML
mediumurl: mybyy.github.io
githuburl: https://github.com/dduyg/alchemy-of-souls
projectcheck: true
# summary of max. 165 characters <meta name="description>
summary: How fictional stories can help you learn new perspectives by turning it into a data-based web application.
---

<div class="ui dropdown">
  <i class="dropdown icon"></i>
  <span class="text">&nbsp;&nbsp;Table of Contents</span>
  <div class="menu">
    <div class="ui compact grey message">
      <div class="header">Table of Contents</div>
  <ul class="list">
    <li><a href="#section-1" class="lined2">How fictional stories can help <br> conceptualize the world</a></li>
    <li><a href="#section-2" class="lined2">Creating the data</a></li>
  </ul>
    </div>
  </div>
</div>

‘<a href="https://www.imdb.com/title/tt20859920/" target="_blank" class="lined">Alchemy of Souls</a>’ was my guilty pleasure this past months. The South Korean TV series is set in a fictional country where the fates of two people become intertwined due to the forbidden 'alchemy of souls', which allows souls to switch bodies, while also introducing various political conflicts alongside.

As a data scientist, I have a habit of seeing everything as a potential dataset that can be expressed in numbers and strings.

<div class="ui embed">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/axXUNvd47GI?cc_load_policy=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
</div>


## <a id="section-1"></a>How fictional stories can help conceptualize the world

We all enjoy a good story. Throughout history, telling stories has been one of our most fundamental communication methods. Interestingly, even in the realm of Data Science, we recognize and appreciate the influence of data storytelling. Stories go beyond mere entertainment; they possess a remarkable ability to teach us important life lessons, help us make sense of the world around us, and inspire us to think and act in new ways. Undoubtedly, they are a timeless and universal tool, capable of engaging, entertaining, and inspiring us all.

Korean series are well known for their phenomenal storytelling. They often have complex and well-developed plots with compelling characters, were various themes and issues are explored. Whether it's the charming and charismatic leading man or the strong and independent leading woman, they have an interesting way of incorporating what a character is thinking into the plot. These characters are often written in a way that makes them feel like real people with flaws, hopes, and dreams. I have personally watched many K-dramas with relatable themes, that tackle pretty important issues. By depicting these themes in a way that is both honest and emotional, Korean dramas are able to connect with viewers on a deep level. Also worth mentioning are the visual elements that draw viewers in. Their high production values are no joke. It’s hard to look away from their high-quality cinematography, beautiful locations, and well-choreographed scenes.

## <a id="section-2"></a>Creating the data

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

If you're curious to see the application, you can find it <a href="https://dduyg.github.io/alchemy-of-souls/" target="_blank" class="home">here</a>. <i class="small grey external alternate icon"></i> I hope you enjoy it as much as I enjoyed creating it, and that it inspires you to explore the meaningful messages that can be found in your favorite stories. 

<a href="https://github.com/dduyg/alchemy-of-souls" target="_blank">
   <button class="ui black button"> <i class="large github icon"></i> Source code </button>
</a>


<script>
  $('.ui.dropdown')
  .dropdown();
</script>

<script>
  $('.ui.embed').embed();
</script>
