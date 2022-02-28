# cobo
**Co**lorful **Bo**rder

## Install
```
npm install cobo --save
```

## Usage

This package contains two files:

 * `cobo.js` -- unminified version for development purposes
 * `cobo.min.js` -- minified production-ready version

Just include either of those files and import `Cobo` in your code.

```js
/**
 * @param {HTMLImageElement} img - Required
 * @param {boolean} [hoverMode] - Optional
 * @param {number} [borderSize] - Optional
 */
Cobo({
    img,
    hoverMode: false,
    borderSize: 8
});
```

`Cobo` offers two modes: `static` (default) and `hover`. To activate `static` mode,
you just need to pass an `HTMLImageElement` in image initialization function:

```js
Cobo({
    img: e.target
})
```

To activate `hover` mode, you need to pass a `hoverMode` parameter too and set to `true`: 

```js
Cobo({
    img: e.target,
    hoverMode: true
})
```

To control border size you need to pass `borderSize` parameter

```js
Cobo({
    img: e.target,
    borderSize: 32
})
```

Calling `Cobo({img: e.target, hoverMode: false})` is equal to calling `Cobo` in `static` mode.

## Example

Insert script `test.js` inside the `head` element of your `index.html` file as module:

```html
<head>
    <title>CoBo</title>
    <script type="module" src="test.js"></script>
</head>
```

Import `Cobo` from `cobo.min.js` in the file `test.js` 

```js
import Cobo from './cobo.min.js';
```

then set onload function of the image like shown below:

```js
const img = document.createElement('img');

img.src = "/path/to/image";
img.onload = (e) => Cobo({
    img: e.target,
    hoverMode: true,
    borderSize: 16
});

document.body.appendChild(img);
```

## License
GPL-3.0-only
