# scroll-spy

a little script to detect the scrolling of a user

```js
new BackToTop(backToTopBtn, {
  // [optional] element that will throw a callback, if scrolled above the viewport
  offsetTopElement: document.getElementById('#topElement'),
  // [optional] set "offsetTop" if you want to tweak the timing.
  // will use "offsetTopElement" to calculate, if "offsetTopElement" is not set, the top of the page will use instead.
  offsetTop: 2200,
  // [optional] element that will throw a callback, if its scrolled into view from below
  offsetBottomElement: document.getElementById('#bottomElement'),
  // [optional] set "offsetBottom" if you want to tweak the timing.
  // will use "offsetBottomElement" to calculate, if "offsetBottomElement" is not set, the bottom of the page will use instead.
  offsetBottom: 80,
  cb: (isBelowTopOffset, isBelowBottomOffset) => {
    // do some stuff...
  },
}).init();
```
