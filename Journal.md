## Log Journal
---
### 8 March 2023
---
I began building out the base features for the website. I wanted to keep the pages separate in the HTML, as well as the specific components.
I figured I'd emulate a frontend framework style with components being able to be added to each piece (while still being a single webpage). \
I created the index.html template that contains the scripts being used for the website, and I had to dig into JQuery to find ways to implement my ideas.
Since I wanted to use the navbar to load the content of the page and simulate loading a new page, I figured I'd find a way to load .html files into divs.
Along with this, I used Bootstrap to build out the style of the navbar, which allowed me to add active elements in the navbar, which are also handled by
the JQuery script. 


### 9 March 2023
---
I noticed that since I hadn't loaded any content when the page is first loaded that I needed a specific way to load the home page. 
I first went with a static implementation, but I noticed that upon refresh, no matter what "page" I was on, it would go back to loading the 
home page. I dug into some documentation and found states for the DOM that included `beforeunload` which allowed me to capture what page
the client was on upon refresh. \
With this ability, I then needed a way to store that value somewhere, and I chose to use the local storage of the browser. Now, upon
loading the page, if the cookie exists then we can load that particular page content, otherwise just load the home page.


