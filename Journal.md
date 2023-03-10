# Log Journal

## 8 March 2023
---
### Skeleton HTML & Framework Emulation
I began building out the base features for the website. I wanted to keep the pages separate in the HTML, as well as the specific components.
I figured I'd emulate a frontend framework style with components being able to be added to each piece (while still being a single webpage). \
I created the index.html template that contains the scripts being used for the website, and I had to dig into JQuery to find ways to implement my ideas.
Since I wanted to use the navbar to load the content of the page and simulate loading a new page, I figured I'd find a way to load .html files into divs.
Along with this, I used Bootstrap to build out the style of the navbar, which allowed me to add active elements in the navbar, which are also handled by
the JQuery script. 


## 9 March 2023
---
### JS Dynamic Pages Issues & Solution
I noticed that since I hadn't loaded any content when the page is first loaded that I needed a specific way to load the home page. 
I first went with a static implementation, but I noticed that upon refresh, no matter what "page" I was on, it would go back to loading the 
home page. I dug into some documentation and found states for the DOM that included `beforeunload` which allowed me to capture what page
the client was on upon refresh. \
With this ability, I then needed a way to store that value somewhere, and I chose to use the local storage of the browser. Now, upon
loading the page, if the cookie exists then we can load that particular page content, otherwise just load the home page.


## 10 March 2023
---
### Resume Data & HTML Generation
To add my previous work and education, I didn't necessarily want to have a large wall of text in the HTML, so I chose to input the data in JSON files, and then use those to generate
elements using JQuery. I had to do some research to get the elements to fill the empty space
vertically for the separate sections between education and work, but this [article](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container) helped with the implementation of that.
This additionally helped with the layout of the home page that contains the picture and 
short intro.

### Project Layout
For the projects, I chose to create similar grid items to the HW5 assignment, so that
the projects would fill the space available in rows/columns. Using a title and github icon
that holds the link to the website seems pretty intuitive to me, but I'm unsure if
adding pictures to the projects is necessary since some projects aren't terribly
visually appealing (backend APIs, ASCII chess, etc.).

I decided against using images for projects, as many implementations are AI, which don't necessarily have much to show in image format. I added descriptions to the projects, which
seems to fill the proper space and looks visually appealing in my opinion.

### Contact Form
I added a simple contact form to the website, and I wanted a simple way to have the information actually get sent to me, but without spinning up my own server to handle
the information, I'd have to resort to using 3rd party servers to handle that. I'm
not a huge fan of that, so I chose to have the form simply add all the information
that was input into their own email client and they can send the email that way.
It's a bit clunky, but I think that's the best option only using client-side. \
I originally had the form function using `window.open()` but it opened a new empty tab
in the browser, which seemed unnecessary, but I found this [StackOverflow post](https://stackoverflow.com/questions/13457684/how-to-prevent-mailto-event-from-opening-a-new-tab-in-browser) that gave me a better way
to handle the form submission mailing.

## 11 March 2023

### Site Accessibility
I wanted a darker theme for the website, so I added a darker background and a dark gray text for the website. Once I ran the accessibility checks, I noticed plenty of contrast errors, so I had to tone down the colors a bit and went with a lighter (but still dark) background, but with much lighter text to make readability a bit better. \
With the accessibility checks, I noticed that all the pages were missing a header element,
which I (still) don't really like since the active page title is directly above in the navbar. I originally added the header element and made it hidden, but turns out thats
a contrast error in the accessibility check as well. \
I decided to give in, and add a header element to the content portion, but I had to write an
additional section of JS code to update the title on page navigation. This works well, but I'm still not a huge fan of the look of the title on the page.

### CSS Refactoring
With all the pages running and working, I refactored the styling a bit to actually have
the CSS for the necessary pages in their own CSS file, made it a bit cleaner to find
things and know what's actually being used where. I also noticed I was using a couple
CSS classes on multiple pages but the naming was specific to a single page, so I had to
do some updating there to make it more name appropriate. I also added a couple CSS variables
to make less variation between styling elements (like how wide & tall projects should be, how much padding should be used everywhere, how much gap should be used, etc.).

### Deployment
For deployment with Github Pages, I noticed the ability to use custom domains, and since I already own my family name domain [esquerra.io](esquerra.io), I decided to make this portfolio page specific to me as a subdomain, using [kyle.esquerra.io](kyle.esquerra.io).
This was surprisingly easy to do with Github Pages, and I'm really pleased with how well
it works with deployments.