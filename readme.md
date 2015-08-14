# thumbz

Inspired by [React Thumb Preview](https://github.com/caike/React-Thumb-Preview) from [Carlos Souza](https://github.com/caike), I wanted to recreate it with pure js, no libraries.
I was curious to see how it compared to React. I average around 8.194 ms Painting.
Compared to Carlos's 6ms with react.
I'm running Chrome Version 44.0.2403.155 (64-bit) on a 13in 2012 macbook pro with 16gb ram and ssd.

mouseover or slide your thumb across the image

You can try out the demo [here](http://dwit.us/thumbz/)


## to use

add a data attribute to your images that lists the sources

 `<img data-imgs="imgs/miata1.jpg, imgs/miata2.jpeg, imgs/miata3.jpg, imgs/miata4.jpeg" />`

src attribute is optional, if there isn't a `<img src="path/img" />` then the first image in the `data-imgs=` attribute will be used `imgs/miata1.jpg` for instance

 adding a `data-preload="true"` attribute will preload all the images, so as to cut down on load times. takes advantage of the browser cache

## todo
* probably try more images, and images of different sizes
* try it out in different projects (load images in via ajax, or upload from device)
* probably wait until images are loaded to add event listener
* improve mobile functionality
* cross browser testing
* better namespacing?
