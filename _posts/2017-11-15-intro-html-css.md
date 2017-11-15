---
layout: post
date: 2017-11-15 11:52:35 +0000
title: Intro to HTML/CSS Workshop
hosted: Hosted by Design at UCSD
time: Wednesday, Nov 15, 6:30 - 8:00pm
location: Atkinson Hall, Room 1601 (The Design Lab)
image: FA16_IntroHTML.png
published: true
quarter: FA17
type: skill
resource_text: Intro to HTML/CSS Workshop
resource_link: https://designatucsd.org/2017/11/15/intro-html-css.html
excerpt: Knowing HTML and CSS can help you build great websites, though getting started
  with it may seem daunting at first. Join us at this hands-on workshop where we tackle
  the basics of HTML and CSS. Just bring your computer and your favorite text editor.
---
## Table of Contents

* TOC
{:toc}

## Getting Set Up

If you haven't already done so, find and install a text editor. Here are two we recommend:

* [Sublime Text](https://www.sublimetext.com/){:target="_blank"}
* [Atom](https://atom.io/){:target="_blank"}

Go ahead and create a folder to hold everything in this workshop. Call it something like `HTMLWorkshop`. Navigate into that directory and create a file called `index.html` using your new code editor.

Now go ahead and write this in your `index.html`

```html
Hello World!
```

Then navigate to the file in your browser to view it. On Macs, you can also drag the file from Finder into Chrome to open it. You should see something like this:

![](https://designatucsd.org/examples/screenshots/HelloWorldScreenshot.png)

## What is HTML?

* HTML (HyperText Markup Language) describes the structure of a webpage

### Introductory HTML

Now go ahead and write this code into your index.html:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Aesop's Fables</title>
    </head>
    <body>
        <div>
            <h1>Aesop's Fables</h1>
            <p>This is my first HTML page</p>
            <a href="https://stackoverflow.com">Example link</a>
            <!-- This is a HTML comment and it won't show up -->
        </div>
    </body>
</html>
```
Now refresh the browser to view this new content.

The elements inside the angled brackets are called `tags`. Most of these tags require a corresponding **closing tag**, ie `<h1>` and `</h1>`. Here's what each of these do:

* `<!DOCTYPE html>` Tells the browser this is an HTML5 file.
* `<html>` Root element of HTML page
* `<head>` Contains undisplayed information about this HTML document
* `<title>` Denotes title (displayed on tab or window bar) of page
* `<body>` Contains all content of an HTML document
* `<div>` Denotes a division (like a section) of an HTML document
* `<h1>` Largest header tag - used for key headers
* `<p>` A paragraph tag - used for most text content
* `<a>` An anchor tag (used to link; the `href` specifies where the content links to)

There are many more types of tags you'll encounter as you continue learning frontend, but these should be enough for now. More about tags can be found [here](https://www.w3schools.com/html/html_elements.asp){:target="_blank"}

### HTML: Block vs Inline

There are two ways HTML can be displayed:

* `block`: these elements take up the full width available
  * Examples: `div`, `p`, `h1`
* `inline`: these elements take as much width as they need
  * Examples: `span`, `a`

Note: you can also change the `display` type of an element with CSS, which we'll get into later.

To see this, try placing this `<a>` tag below the `<a>` tag (right above the HTML comment) that you currently have in your code and see what happens.

```html
<a href="gnat.html">The Gnat and the Bull</a>
```

Note: the point here is to see that inline tags like `<a>` by default space out horizontally, while block tags like `<p>` or `<h1>` space out on top of each other.

## Building a website

Now let's go ahead and build our first Fable page! Write this HTML into a new file called `gnat.html` in the same directory. Then, open the HTML file in your browser by clicking the `<a>` tag surrounding the `The Gnat and the Bull` text in index.html.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>The Gnat and the Bull</title>
        <link rel="stylesheet" href="stylesheet.css" />
    </head>
    <body>
        <h1>The Gnat and the Bull</h1>
        <div>
            <p>
              A Gnat alighted on one of the horns of a Bull, and remained sitting there for a considerable time. When it had rested sufficiently and was about to fly away, it said to the Bull, "Do you mind if I go now?" The Bull merely raised his eyes and remarked, without interest, "It’s all one to me; I didn’t notice when you came, and I shan’t know when you go away."
            </p>
            <p>
              We may often be of more consequence in our own eyes than in the eyes of our neighbours.
            </p>
            <p>
              Back to <a href="index.html">home</a>
            </p>
        </div>
    </body>
</html>
```

We can delete the first link in `index.html` (The `This is a link` link) as it's only for demonstration purposes. Try clicking around and navigating using the links. At this point, your site should look something like [this](https://designatucsd.org/examples/intro-html-css/checkpoint1/).

## What is CSS?

* CSS (Cascading Style Sheets) gives the styles (positioning, colors, etc) of elements on the webpage.

### Introductory CSS

Given your newfound knowledge of basic HTML, it's time to dive into basic CSS. 

First let's try something. Change your `<p>` tag in your HTML file to `<p style="color: red">`. Refresh your browser and see what happens.

Imagine if you had to add *inline styles* (like we just did) to style every element on the page. There must be some more reusable and less cluttery way to denote styling. 

This is where **classes** and **ids** come in. CSS can specify style properties that define the behavior of **certain classes, ids, and HTML tags**. This gives more power and separated, reusable code. (Note that ids are unique so you can only have one of a certain id on a page). 

However, we'll first need to link our stylesheet. Create a file called `stylesheet.css` in the same directory and add this line to in your HTML `head`:

```html
<link rel="stylesheet" href="stylesheet.css">
```

* `link`: tags define a link to an external resource (usually stylesheets)
* `rel`: specifies external resource's relationship to this document (in this case, it's a stylesheet)
* `href`: specifies location of document

Now, you can add classes and ids like so:

```html
<p class="your-class" id="your-id">Content here</p>
```

Let's try to add a class and add properties with our stylesheet. Add a class to your `<h1>` and add this in your CSS, replacing the class name.

```html
<!-- This is what your <h1> might look like -->
<h1 class="your-class-name">Aesop's Fables</h1>
```

```css
/* This is a css comment */
.your-class-name {
  color: blue;
}
```

Now refresh your page and see what happens. Cool, right? Note that the period before the class name in the css is necessary (but in the HTML don't include the period). Similar for hashtags, which are used for ids. Tags (like `<p>` or `<div>`) require no preceding characters. Here's the syntax:

```css
#your-id-name {
  /* Your properties */
}
div {
  /* Your properties */
}
```

**An important note about css**: Generally (but not always), later properties will override new ones. Try adding `color: blue` and `color: red` to the same class and see what happens.

There's definitely more we can do though. How about using a nicer font? Let's start with a [web safe](http://www.w3schools.com/cssref/css_websafe_fonts.asp){:target="_blank"} font. We'll pick a nice, popular sans-serif, ~~Comic Sans~~ Helvetica. 

```css
/* See how we can deal with multiple tags at once
 * Also note that we're using 'sans-serif' as a fallback
 * font for Helvetica.
 */
body {
  font-family: "Helvetica", sans-serif;
}
```

Side note: try playing around with other web-safe fonts. 

### CSS Box Model

A central concept in CSS is the box model. The box model is the idea that every HTML element can be considered as boxes with 4 essential elements: content, padding, border, and margin.

![box model image](/public/images/boxmodel.png) Image from Khan Academy

Manipulating these properties in CSS will allow us to define how we want to space out our content.

## A Heroic Step

Now that we know some of the basic concepts of CSS, let's move on to styling our `gnat.html` page. Let's start by adding a hero for the title. Add a `<div class="hero">` to wrap your title `<h1>` tag. Make sure to include the closing `</div>`.

```css
.hero {
  padding-top: 20vh;
  padding-bottom: 20vh;
  text-align: center;
  background-color: gray; /* Or your choice color */
}
```

The white border on the edge of the page can be gotten rid of with:

```css
html, body {
  padding: 0;
  margin: 0;
}
```

What if we added an image to be the background of our page? You can look in [Unsplash](http://unsplash.com){:target="_blank"} for good stock photos or use the example provided

```css
.hero {
  /* background-image: url("path/to/your/image"); */
  background-image: url("http://designatucsd.org/examples/files/bull.jpg");
  background-size: cover;
}
.hero h1 {
  color: white; /* Or your choice color */
}
```

* `.hero h1`: This property applies to **all h1 descendants of an element with class 'hero'**
* `background-image`: self-explanatory
* `background-size: cover`: Tells the browser to stretch the image to fit window

Your `gnat.html` page should now look something like [this](https://designatucsd.org/examples/intro-html-css/checkpoint2/gnat.html).

## Readability

Right now, our text appears to span the entire width of the page, making it difficult to read, so let's update that. Add a class for your `<div>` tag surrounding your paragraph contents (`<p>` tags) with a relevant name (like 'container') and add some css.

```css
.your-div-class-name {
  margin: auto;
  max-width: 700px;
  padding: 10px;
  color: #555;
}
```

* `margin`: denotes space around (outside) elements; auto denotes to base it off width of element and width of container
* `padding`: denotes space around (on the inside) elements. `10px` means there will be a space between content and the edge of the container 10px wide (on all edges).
* `max-width`: denotes the largest width of an element
* Note: there exists properties like `padding-left` and `margin-left` and for each other direction.

Now viewing this in desktop, we can see that the content centers nicely on the page. Let's try a custom font to add more personality. One popular font is [Lato](https://fonts.google.com/specimen/Lato). You can always head to [fonts.google.com](https://fonts.google.com) to pick a different font to use. Just make sure to also use `font-family` in the tags/classes/ids where you'd like the font to be used.

```css
/* The url below is given by fonts.google.com */
@import url('https://fonts.googleapis.com/css?family=Lato');

/* You can edit your existing body tag */
body {
  /* The continued use of Helvetica afterwards is as a back up, say in case Lato fails to load due to bad network connection */
  font-family: "Lato", "Helvetica", sans-serif;
  line-height: 1.4;
}
```
* `line-height`: denotes the height of the line relative to the size of text.

We can also update font sizes to improve readability. Try changing the `font-size` property for your `.hero h1` to 64px and `p` elements to **20px** using CSS. 

```css
.hero h1 {
  font-size: 64px;
  font-weight: lighter;
}
p {
  /* Try figuring this out */
}
```
* `font-weight`: sets thickness of font

Now, your `gnat.html` page should look something like [this](https://designatucsd.org/examples/intro-html-css/checkpoint3/gnat.html). 

## Cards

Cards are a major feature that are often show up on many sites and help separate different sections of content. In this case, let's try separating the majority of our content, Let's try making our different paragraphs basic cards. Let's assume we've added a couple fables already to our fables website. You can add the next two anchor tags under our original link to `gnat.html`. Let's also wrap our cards in a div.

```html
<div class="card-wrapper">
  <a href="gnat.html">The Gnat and the Bull</a>
  <a href="boywolf.html">The Boy who Cried Wolf</a>
  <a href="fox.html">The Fox and the Grapes</a>
</div>
```

To make our cards, let's add to the anchor tag class `card` to each of our links so that we can have content inside of our cards. Here's one example (make sure to do the other two):

```html
<a class="card" href="gnat.html">The Gnat and the Bull</a>
```

To style our card divs, let's add these properties into our class selector in CSS:

```css
.card-wrapper {
  text-align: center; /* Keep our cards centered */
}
.the-card-classname-we-used {
  background-color: #f1f1f1; /* Or your choice color */
  margin-top: 10px;
}
```

Try refreshing and observe how the cards help give the page some organization.

### Inline cards

So far while our cards add a bit of organization, they still look like a simple list. Let's make them a bit more organized. Let's make our card class `inline-block`. Similar to `inline` elements, `inline-block` elements act like inline elements, but are allowed to have a specified width and height. This will help us create equal-width cards. Let's add these two lines **inside** our card styling:

```css
.the-card-classname-we-used {
  /* Add the new styles below the old ones */
  display: inline-block;
  width: 31%;
  margin-left: 0.5%;
  margin-right: 0.5%;
  text-align: center; /* Make the links centered */
}
```

### Better looking cards

Right now we just have a link with text as each of our cards, and it looks a bit boring. Let's add images for each of the cards. To do this, let's first separate out our text from the images. Let's use paragraph tags to enclose our text. Each paragraph tag should have an *opening* `a` tag before, and a *closing* `a` tag after. Here's one example (make sure to do the other two):

```html
<a class="card" href="gnat.html">
  <p>The Gnat and the Bull</p>
</a>
```

We can use an `img` tag to add an image. We've pre-selected 3 images for you:

* [https://designatucsd.org/examples/files/bull.jpg](https://designatucsd.org/examples/files/bull.jpg)
* [https://designatucsd.org/examples/files/wolf.jpg](https://designatucsd.org/examples/files/wolf.jpg)
* [https://designatucsd.org/examples/files/fox.jpg](https://designatucsd.org/examples/files/fox.jpg)

For the first card for *The Gnat and the Bull*, let's add the `img` tag before the link. Here's an example (make sure to do the other two):

```html
<a class="card" href="gnat.html">
  <img src="https://designatucsd.org/examples/files/bull.jpg">
  <p>The Gnat and the Bull</p>
</a>
```

Note: `img` tags are *self-closing*, which means there is *no corresponding closing tag needed* for them.

If we open our page it looks like our images are overflowing the cards. Let's go ahead and set the images to match the sizing of the cards. We can do this by nesting:

```css
.card img {
  width: 100%;
}
```

Finally, let's make and style a hero for our homepage. See if you can handle this yourself, and refer to the previous step where we [added a hero to the gnat page](#a-heroic-step).

At this point with the hero, your code could look something like [this](). Feel free to play around with styles, content and colors as you see fit.

## Bonus: Mobile-friendliness & Media Queries

So what happens if we look at our page on mobile?

## Finishing up
Can you think of more touches you'd like to add to your site? Here's some things you can play around with:

* Fonts and font-sizes
  * Try changing the header to a different font. Maybe Montserrat?
* Colors
  * Try changing the color of that link
* Content sizes
* Your hero background image
  * Try including your own image or finding one online
* Adding other Aesop's fables. You can find some inspiration and fables [here](https://femmebot.github.io/google-type/)

How about adding a class and making Aesop's punchline "We may often be..." more unique? [Here's](http://designatucsd.org/examples/htmlcss1/){:target="_blank"} an example of what your site might look like at the end of this tutorial. You can view its code [here](https://github.com/designucsd/examples/tree/master/htmlcss1){:target="_blank"}.

## Feedback and thank you

Here at Design at UCSD, we're passionate about putting forward educational, hands-on and fun workshops, and are always looking to improve and iterate, so if you've completed this tutorial (remotely or on-site), please fill out [this](https://docs.google.com/forms/d/e/1FAIpQLSdAA4XAQWcP46BNcQp_NwobYA-2eRV5ahP03KflYlm0js18zw/viewform){:target="_blank"} form to let us know how we did. 

## What's next?

Congratulations! If you've done everything up to this point this means you've built a basic HTML and CSS site. If you're wondering where to go from here, there are many, many available resources and clubs at UCSD; here's some you should check out:

* [CSES](http://cses.ucsd.edu){:target="_blank"}: Holds workshops on web development similar to this one
* [TESC](http://tesc.ucsd.edu){:target="_blank"}: Holds Decaf, SD Hacks, and works on some really cool projects
* [DesignatUCSD](http://designatucsd.org){:target="_blank"}: Well this is us. Hope you enjoyed and please come back

Our advice? Either **get involved with a project** or **start building your own website**. There are many projects occurring on campus that are in need of passionate designers and developers. 

If you're ever interested in getting more involved with DesignatUCSD, have general feedback, or just want to love us, email us at [designatucsd@gmail.com](mailto:designatucsd.gmail.com).

### The next logical steps
Now that we've covered the basics of HTML and CSS, what's next? To become a frontend developer, you'd need to learn and do a couple more things:

* Javascript
* Mobile friendliness
* Frontend frameworks (like Bootstrap) - we'll be having a workshop on this soon!
* Practice, practice, practice!

### Additional resources
Here are some resources for you to continue learning frontend:

* [This Medium post](https://medium.freecodecamp.com/from-zero-to-front-end-hero-part-1-7d4f7f0bff02){:target="_blank"}: A good post on how to get started with frontend development in general.
* [CodeAcademy Tutorial](https://www.codecademy.com/learn/web){:target="_blank"}: A hands-on tutorial teaching you the basics of HTML, CSS, and later on Bootstrap (also recommended by the above post).
* [Check this out](http://jgthms.com/web-design-in-4-minutes/){:target="_blank"} for an interesting, quick brief on effective lightweight HTML/CSS, in which some of this tutorial is based on
* Your favorite search engines and StackOverflow: If you've got an issue at this point, chances are someone else has encountered it before.