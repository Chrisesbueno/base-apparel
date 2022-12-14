# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./Desktop.png)

![](./DesktopProvide.png)

![](./DekstopVerified.png)

![](./Mobile.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-V0wRZhmBAU)
- Live Site URL: [Add live site URL here](https://chrisesbueno.github.io/base-apparel/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```js
buttom.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value == '') {
        form.classList.add('active');
        form.classList.remove('verified')
    } else if (input.value.match(email)) {
        form.classList.remove('active');
        form.classList.add('verified')
    } else {
        form.classList.remove('verified');
        form.classList.add('active');
    }
})
```

## Author

- Frontend Mentor - [@chrisesbueno](https://www.frontendmentor.io/profile/chrisesbueno)
- Twitter - [@chrisesbueno](https://www.twitter.com/chrisesbueno)
