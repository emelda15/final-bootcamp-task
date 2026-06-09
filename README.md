# Frontend Mentor - Newsletter sign-up form with success message solution

This is my solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![My Mobile Solution Layout](./mobile-solution.jpeg)

### Links

- Solution URL: [https://github.com/emelda15/final-bootcamp-task](https://github.com/emelda15/final-bootcamp-task)
- Live Site URL: [https://emelda15.github.io/final-bootcamp-task/](https://emelda15.github.io/final-bootcamp-task/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

During this challenge, I reinforced how to implement adaptive image rendering using the semantic `<picture>` element to alternate between native vector layouts (`.svg` files) seamlessly depending on viewport breakpoints:

```html
<picture>
  <source media="(max-width: 768px)" srcset="illustration-sign-up-mobile.svg">
  <img src="illustration-sign-up-desktop.svg" alt="Newsletter Illustration" class="illustration">
</picture>