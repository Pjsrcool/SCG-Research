# Babel Config 6

## Babel Configuration Used
*.babelrc*
```
{
	"presets" : [["@babel/preset-env", {"modules": false}],
				 "@babel/preset-react"],
	"plugins" : [
		"@babel/plugin-transform-classes",
		"transform-remove-strict-mode"],
	"overrides": [{
		"sourceType": "unambiguous"
	}]
}

```

This was tested with "use strict" support on Jalangi2

## Preparation
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.


## Projects tested
Project | Works? | Notes
---|---|---
aurelia-realworld-example-app | No | Google Chrome page is blank except for Jalangi button. Jalangi page shows a result. Console reports errors: `Uncaught SyntaxError: Unexpected token '<'` and `Uncaught TypeError: Assignment to constant variable. at Object.node_modulesAureliaWebpackPluginRuntimePalLoaderEntryJs`
crizmas-mvc-realworld-example-app | No | Google Chrome page is blank. Jalangi page has some results. Console reports error: `Uncaught TypeError: Assignment to constant variable.`
ember-realworld | No | Google Chrome page is blank. Jalangi page has a result. Console reports error `Uncaught TypeError: Assignment to constant variable.`
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app | No | Google Chrome page is blank. Jalangi page has results. Console reports error: `Uncaught TypeError: Assignment to constant variable.`
imba-realworld-example-app | Yes |
neomjs-realworld-example-app | No | Google Chrome page is blank. Jalangi has some results. Console reports error `Uncaught (in promise) TypeError: Assignment to constant variable.`
owl-realworld-app | No | Google Chrome page is blank. Jalangi has results. Console reports error: `Uncaught TypeError: Assignment to constant variable.`
react-redux-realworld-example | No | Google Chrome page is blank. Jalangi has some results. Console reports error: `Uncaught TypeError: Assignment to constant variable.`
react-vite-realworld-example-app | No | The app functions, but the feed does not load. Jalangi page is blank. Instrumentation fails in the mitmproxy console. Google Chrome console reports no errors.
realworld | No | The app loads and functions. Jalangi page is blank. Instrumentation fails in the mitmproxy console. Google Chrome console reports no errors.
realworld-example | No | Google Chome page is blank. Jalangi page has some results. Console reports error: `Uncaught TypeError: Assignment to constant variable`
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app | No | Google Chrome page is blank. Jalangi page has results. Console reports error: `Uncaught TypeError: Assignment to constant variable.`
solid-realworld | No | The app loads. Jalangi page is blank. Instrumentation fails in the mitmproxy console.
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
There were 16 projects tested. 1/16 work. The most common error was `Uncaught TypeError: Assignment to constant variable.`