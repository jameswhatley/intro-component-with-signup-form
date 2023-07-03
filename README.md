# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](.//images/screenshot-desktop.jpeg)

### Links

- Solution URL: [GitHub](https://github.com/jameswhatley/intro-component-with-signup-form)
- Live Site URL: [GitHub Pages](https://jameswhatley.github.io/intro-component-with-signup-form/)

## My process

### Built with

- HTML5
- CSS
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

Here I learned how to add an image inside of the text input field. This is something I didn't know how to do before so this challenge was a good way to practice that.

```css
form .inputField input.error {
  background: url(./images/icon-error.svg) no-repeat 96%;
  color: var(--red);
  border: 2px solid var(--red);
}
```

### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/917610/put-icon-inside-input-element-in-a-form) - This helped me with positioning the icon inside the input field.

## Author

- Frontend Mentor - [@jameswhatley](https://www.frontendmentor.io/profile/jameswhatley)