# GSAP CURSOR FOLLOW

This repo contains two CursorFollow components, one using typescript and another one vanilla.js.

Use this component to display a simple but nice mouse follow element.

This component uses gsap. So you will to install de package or add the CDN script to your index.html

Most of the code comes from this [codepen](https://codepen.io/GreenSock/pen/WNNNBpo) where it explains the use of [gsap.quickSetter()](<https://greensock.com/docs/v3/GSAP/gsap.quickSetter()>).

I only adapted the code to use in React and I have been using on couple of projects since.

```bash
npm install gsap
```

Take a look at the React example on CodeSandBox or a simple vanilla js example on [codepen](https://codepen.io/maxrpark/pen/mdxyzOx).

### Show conditionally depending on the screen size

By defaul the cursor and the function that controls it work on 960px screen and widther but you can adjust it to your needs.

```js
const getWindowSize = () => {
  let windowSize = window.innerWidth;

  if (windowSize > 960) {
    window.addEventListener("mousemove", moveCoursorFunc);
    ball.style.display = "block";
  } else {
    ball.style.display = "none";
  }
};
```

## Fire a custom function when the cursor is on certain element.

```js
const target = e.target;
// run costume function
if (target && target.classList.contains("logo")) {
  // do something
} else {
  // do something else
}
```
