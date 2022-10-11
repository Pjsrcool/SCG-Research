# Babel Config 7

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

This was tested WITH "use strict" support.

## Preparation
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.

**NOTE:**
When I write "console" without any context, I am refering to the Google Chrome console. Otherwise, I will specify.

## Projects tested
Project | Works? | Notes
---|---|---
aurelia-realworld-example-app | No | Google Chrome page is blank except for Jalangi button. Jalangi page shows a result. Console reports errors: `Uncaught SyntaxError: Unexpected token '<'` and `Uncaught TypeError: Assignment to constant variable. at Object.node_modulesAureliaWebpackPluginRuntimePalLoaderEntryJs`
crizmas-mvc-realworld-example-app  | No | Google Chrome page is blank. Jalangi page has some results. Console reports error: `Uncaught TypeError: Assignment to constant variable.`
ember-realworld | No | Google Chrome page is blank. Jalangi page has a result. Console reports error `Uncaught TypeError: Assignment to constant variable.`
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app | No | Google Chrome page is blank. Jalangi page has results. Console reports error: `Uncaught TypeError: Assignment to constant variable.`
imba-realworld-example-app | No | Page loads and functions. Jalangi page is blank. Google Chrome page reports no errors. In mitmproxy console, Instrumentation fails with error: `SyntaxError: /home/justin/jalangi2/cache/0.0.0.0/a909311703e03ca838cdf676b6e036cd/index.js: Deleting local variable in strict mode. (438:18)`. Babel also crashes with code `BABEL_PARSE_ERROR` and reasonCode `StrictDelete`.
neomjs-realworld-example-app | No | Google Chrome page is blank. Jalangig page has some results. Instrumentation fails in mitmproxy console with error: `FileNotFoundError: [Errno 2] No such file or directory`. Google Chrome console reports error: `Uncaught (in promise) TypeError: Assignment to constant variable.`
owl-realworld-app | No | Google Chrome page is blank. Jalangi page has some results. Console reports error: `Uncaught TypeError: Assignment to constant variable.`
react-redux-realworld-example-app | No | Google Chrome page is blank. Jalangi page has some results. Console reports error: `Uncaught TypeError: Assignment to constant variable.`
react-vite-realworld-example-app | No | Page loads and runs. Jalangi page is blank. Instrumentation fails in mitmproxy console with error: `FileNotFoundError: [Errno 2] No such file or directory`. Google Chrome console reports no errors.
realworld | No | Page loads and runs. Jalangi page is blank. Instrumentation fails in mitmproxy console with error: `FileNotFoundError: [Errno 2] No such file or directory`.
realworld-example | No | Google Chrome page is blank. Jalangi page has some results. Console reports error: `Uncaught TypeError: Assignment to constant variable.`
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app | No | Google Chrome page is blank. Jalangi page has some results. Console reports error: `Uncaught TypeError: Assignment to constant variable.`
solid-realword | No | Page loads and runs. Instrumentation fails in mitmproxy console with error: `FileNotFoundError: [Errno 2] No such file or directory`.
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
There were 13/16 projects installed and build sucessfully. All projects failed to convert to ES5 and get Instrumented through Jalangi. I believe "use strict" support may be interfering somewhere. Many projects with error `FileNotFoundError: [Errno 2] No such file or directory` ran through babel sucessfully, but failed to be instrumented. Many projects also reported error `Uncaught TypeError: Assignment to constant variable.`.