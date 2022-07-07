---
layout: essay
type: essay
title: Dark Theme for SemanticUI - Part 1
# All dates must be YYYY-MM-DD format!
date: 2020-07-22
language: en
labels:
  - Technical
---
You might've realised by now that this website has a convenient darkmode toggle, if you haven't, I will assume everything is working as intendend and the site has followed your preferences so perfectly you didn't even need to look for one.

![Toggling darkmode](/images/essays/darkmode/darkmode_toggle.gif)

Usually the implementation of such modules is quite convoluted requiring a rewrite of your css, luckly for us, FomanticUI, the up-to-date fork of SemanticUI, and to a certain extent SemanticUI itself has already done 90% of the hard work through the `inverted` class.

## The toggle
I've opted to do a very simple icon button as my toggle, but you can use checkboxes, buttons or anything else, just make sure to adapt your code accordingly.

```html
<button class="ui button icon basic" id="darkmode">
  <i class="moon icon"></i>
</button>
```

## Invert everything
FomanticUI's `inverted` is a built-in tag avaliable to almost all ui elements which, as the name states, inverts its color, making it an easy fit on a dark mode such as mine.

Since FUI requires JQuerry to work properly, I've resorted to it to do the heavy lifting on our code.

```javascript
function toggleDarkMode () {
    // add fomantic's inverted class to all ui elements
    $('body').find('.ui').addClass('inverted');
    // add custom inverted class to body
    $('body').addClass('inverted');

    // simple toggle icon change
    $("#darkmode > i").removeClass('moon');
    $("#darkmode > i").addClass('sun');

    return;
}
```

`toggleDarkMode` will add the `inverted` class to all `ui` elements, since, usually, they are the ones FUI offers. Also, I've had to add our magic class to `body` and specify a dark background color since FUI don't handle that. 

Also, our functions will change the icons to fit with the current theme.

```css
:root {
  --darkBG: #232B32;
}

body.inverted {
  background-color: var(--darkBG);
}
```

On the other hand, our `toggleLightMode` function will undo everything the previou function did by removing the class from all elements and changing our button icon to something more appropriate.

```javascript
function toggleLightMode() {
    // remove fomantic's inverted from all ui elements
    $('body').find('.ui').removeClass('inverted');
    // remove custom inverted class to body
    $('body').removeClass('inverted');

    // change button icon
    $("#darkmode > i").removeClass('sun')
    $("#darkmode > i").addClass('moon');

    return;
}
```

Now all you have to do is listen for a click on your toggle.

```javascript
$('#darkmode').click(function () {
    if (darkmodeEnabled) {
        toggleLightMode();
    } else {
        toggleDarkMode();
    }
});
```

## Conclusion
Today we learned how to do a very basic Dark theme toggle for your website leveraging Fomantic UI's built-in options.

Your final code should look something like this:

```html
<style>
  :root {
  --darkBG: #232B32;
  }

  body.inverted {
    background-color: var(--darkBG);
  }
</style>

<button class="ui button icon basic" id="darkmode">
  <i class="moon icon"></i>
</button>

<script>
  function toggleDarkMode () {
    // add fomantic's inverted class to all ui elements
    $('body').find('.ui').addClass('inverted');
    // add custom inverted class to body
    $('body').addClass('inverted');

    // simple toggle icon change
    $("#darkmode > i").removeClass('moon');
    $("#darkmode > i").addClass('sun');

    return;
  }

  function toggleLightMode() {
    // remove fomantic's inverted from all ui elements
    $('body').find('.ui').removeClass('inverted');
    // remove custom inverted class to body
    $('body').removeClass('inverted');

    // change button icon
    $("#darkmode > i").removeClass('sun')
    $("#darkmode > i").addClass('moon');

    return;
  }

  $('#darkmode').click(function () {
    if (darkmodeEnabled) {
        toggleLightMode();
    } else {
        toggleDarkMode();
    }
  });
</script>
```

*[FUI]: Fomantic UI / Semantic UI
