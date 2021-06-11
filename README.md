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

`Cobo` offers two modes: `static` (default) and `hover`. To activate static mode, you need to call it without any parameters in your image initialization function:

```
Cobo()
```

To activate `hover` mode, you need to pass an object with parameter `hoverMode` set to `true`: 

```
Cobo({hoverMode: true})
```

Calling `Cobo({hoverMode: false})` is equal to calling `Cobo` without any parameters at all.

## Example

Insert script `test.js` inside the `head` element of your HTML file as module:

```
<head>
    <title>CoBo</title>
    <script type="module" src="test.js"></script>
</head>
```

Import `Cobo` from `cobo.min.js` in the file `test.js` 

```
import Cobo from './cobo.min.js';
```

then set onload function of the image like shown below:

```
var img = document.createElement('img');

img.src = "/path/to/image";
img.onload = () => Cobo({hoverMode: true});

document.body.appendChild(img);
```

## License
GPL-3.0-only
