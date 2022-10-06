# Babel Config 6

## Babel Configuration Used
*.babelrc*
```
{
	"presets" : [["@babel/preset-env", {"modules": false, "forceAllTransforms": true}],
				 "@babel/preset-react"],
	"plugins" : [
		"transform-remove-strict-mode"]
}
```

This was tested WITHOUT "use strict" support.

## Preparation
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.

## Projects tested
Project | Works? | Notes
---|---|---
aurelia-realworld-example-app  | No | Google Chrome page is blank except for Jalangi button. Jalangi button is not responsive. Console reports error: `Uncaught SyntaxError: Unexpected token '<'`
crizmas-mvc-realworld-example-app | Yes |
ember-realworld | Yes |
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app | Yes | 
imba-realworld-example-app | No | Page Loads. Babel crashed in the Jalangi console with error `SyntaxError: /home/justin/jalangi2/cache/0.0.0.0/a909311703e03ca838cdf676b6e036cd/index.js: Deleting local variable in strict mode`. Google Chrome console reports no errors.
neomjs-realworld-example-app | No | Google Chrome page and Jalangi page is blank. In the dev builds, the Google Chrome console reports error: `Uncaught (in promise) SyntaxError: Unexpected eval or arguments in strict mode`
owl-realworld-app | No | Google Chrome and Jalangi page is blank. Console reports error: `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
react-redux-realworld-example | Yes | 
react-vite-realworld-example-app | No | The app loads, but Jalangi page is blank. Babel ran sucessfully, but instrumentation failed with error: `FileNotFoundError: [Errno 2] No such file or directory`. Google Chrome console reports no errors.
realworld | No | The app loads the Jalangi page is blank. Instrumentation fails with error: `FileNotFoundError: [Errno 2] No such file or directory`. 
realworld-example | Yes |
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app | Yes |
solid-realword | No | Google Chrome page loads, but Jalangi page is blank. Babel ran sucessfully. Instrumentation fails with error: `FileNotFoundError: [Errno 2] No such file or directory`.
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
There were 13/16 projects installed and build sucessfully. Of the 13 that ran, 6/13 sucessfully converted to ES5 and were Instrumented under mitmproxy.