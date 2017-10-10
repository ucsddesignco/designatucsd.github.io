---
layout: post
title: Intro to HTML/CSS Workshop
hosted: Hosted by Design at UCSD
time: Wednesday, Nov 16, 7-8&#58;30pm
location: H&SS 1346
image: FA16_IntroHTML.png
published: true
quarter: FA16
type: skill
resource_text: Intro to HTML/CSS Workshop
resource_link: http://designatucsd.org/2016/11/16/intro-html-css.html
gallery_link: https://www.facebook.com/pg/designatucsd/photos/?tab=album&album_id=1787327574841039
excerpt: Knowing HTML and CSS can help you build great websites, though getting started
  with it may seem daunting at first. Join us at this hands-on workshop where we tackle
  the basics of HTML and CSS. Just bring your computer and your favorite text editor.
date: 2016-11-16 00:00:00 +0000
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

```
Hello World!
```

Then navigate to the file in your browser to view it. On Macs, you can also drag the file from Finder into Chrome to open it. You should see something like this:

![](/public/images/events/FA16_IntroHTML_HelloWorld.jpg)

## What are HTML and CSS?

* HTML (HyperText Markup Language) describes the structure of a webpage
* CSS (Cascading Style Sheets) gives the styles (positioning, colors, etc) of elements on the webpage.

### Introductory HTML

Now go ahead and paste this code into your index.html:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Welcome to HTML and CSS!</title>
    </head>
    <body>
        <div>
            <h1>My first HTML page</h1>
            <p>This is my first HTML page</p>
            <a href="https://stackoverflow.com">This is a link</a>
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

There are many more types of tags you'll encounter as you continue learning frontend, but these should be enough for now. 

### HTML: Block vs Inline

There are two ways HTML can be displayed:

* `block`: these elements take up the full width available
  * Examples: `div`, `p`, `h1`
* `inline`: these elements take as much width as they need
  * Examples: `span`, `a`

To see this, try placing two `<a>` tags next to each other and two `p` tags next to each other and see what happens:

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<a>Anchor 1</a>
<a>Anchor 2</a>
```

Note: you can also change the `display` type of an element with CSS, which we'll get into now.

### Cascading Style Sheets

Given your newfound knowledge of basic HTML, it's time to dive into basic CSS. 

First let's try something. Change your `<p>` tag in your HTML file to `<p style="color: red">`. Refresh your browser and see what happens.

Imagine if you had to add *inline styles* (like we just did) to style every element on the page. There must be some more reusable and less cluttery way to denote styling. 

This is where **classes** and **ids** come in. CSS can specify style properties that define the behavior of **certain classes, ids, and HTML tags**. This gives more power and separated, reusable code. (Note that ids are unique so you can only have one of a certain id on a page). 

However, we'll first need to link our stylesheet. Create a file called `stylesheet.css` and add this line to in your HTML `head`.

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
<h1 class="your-class-name">My first HTML page</h1>
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

## Building a website

Now that you've got a hang of basic HTML and CSS, we can move on to more advanced content. Copy paste this HTML into a new file and create an empty file called `stylesheet.css` in the same directory. Then, open the HTML file in your browser.

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
              Read more Aesop's Fables <a href="https://femmebot.github.io/google-type/">here</a>
            </p>
        </div>
    </body>
</html>
```

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

### A Heroic Step

Now let's add a hero for the title. Add a `<div class="hero">` to wrap your title `<h1>` tag. Make sure to include the closing `</div>`.

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
  background-image: url("http://designatucsd.org/examples/htmlcss1/bull_background.jpg");
  background-size: cover;
}
.hero h1 {
  color: white; /* Or your choice color */
}
```

* `.hero h1`: This property applies to **all h1 descendants of an element with class 'hero'**
* `background-image`: self-explanatory
* `background-size: cover`: Tells the browser to stretch the image to fit window

### Readability

Right now, our text appears to span the entire width of the page, making it difficult to read, so let's update that. Add a class for your `<div>` tag with a relevant name (like 'container') and add some css.

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

Now viewing this in desktop, we can see that the content centers nicely on the page. Let's try a custom font to add more personality. Here at DesignatUCSD, we're big fans of [Lato](https://fonts.google.com/specimen/Lato). You can always head to [fonts.google.com](https://fonts.google.com) to pick a different font to use. Just make sure to also use `font-family` in the tags/classes/ids where you'd like the font to be used.

```css
@import url('https://fonts.googleapis.com/css?family=Lato');

/* You can edit your existing body tag */
body {
  font-family: "Lato", "Helvetica", sans-serif;
  line-height: 1.4;
}
```
* `line-height`: denotes the height of the line relative to the size of text.

We can also update font sizes to improve readability. Try changing the `font-size` property for your `.hero h1` to 48px and `p` elements to 20px using CSS. 

```css
.hero h1 {
  font-size: 48px;
}
p {
  /* Try figuring this out */
}
```

### Cards

Cards are a major feature that are often show up on many sites and help separate different sections of content. In this case, let's try separating the majority of our content, Let's try making our different paragraphs basic cards. Try to add these properties into your existing `p` selector in CSS.

```css 
p {
  /* Previous styles */
  padding: 10px;
  background-color: #f1f1f1; /* Or your choice color */
  box-shadow: 0 4px 8px 0 #ddd; /* This adds some depth */
  margin-top: 10px;
}
```

Try refreshing and observe how the cards help give the page some organization. 

### Finishing up
Can you think of more touches you'd like to add to your site? Here's some things you can play around with:

* Fonts and font-sizes
  * Try changing the header to a different font. Maybe Montserrat?
* Colors
  * Try changing the color of that link
* Content sizes
* Your hero background image
  * Try including your own image or finding one online
* Adding more/editing text content

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