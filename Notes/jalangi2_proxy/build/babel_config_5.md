# Babel Config 5

## Babel Configuration Used
*.babelrc*
```
{
	"presets" : ["@babel/preset-env",
				 "@babel/preset-react"],
	"plugins" : [
		"@babel/plugin-transform-classes",
		"transform-remove-strict-mode"]
}

```

## Preparation
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.

***Important: Projects can now connect to the internet (Realworld server)***

## Projects tested
Project | Works? | Notes
---|---|---
aurelia-realworld-example-app | No | Google Chrome page is blank. Jalangi button is blank and is unresponsive. Console reports error `Uncaught SyntaxError: Unexpected token '<'`
bmi-calculator | Yes |
calculator | Yes |
crizmas-mvc-realworld-example-app | Yes |
ember-realworld | No | Google Chrome page is blank. Jalangi has some results. Console reports errors `Uncaught SyntaxError: Unexpected token '<'` and `Uncaught ReferenceError: require is not defined`
emoji-search | No | Google Chrome page is blank except for 'Fork me on Github' button. Jalangi has some results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app | Yes |
imba-realworld-example-app | No | Babel crashed with code `BABEL_PARSE_ERROR`. Page loads. Jalngi page is blank. Console reports no errors.
neomjs-realworld-example-app | No | Ran project without build. Main page appears. Clicking the links to the projects takes us to a blank page. Jalangi button appears, but jalangi page is blank. Probably because the links take us to `html` pages, not `js` pages.
owl-realworld-app | No | Google Chrome page and Jalangi page is blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
react-image-compressor | No | Google Chrome page is blank. Jalangi has few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
react-redux-realworld-example | Yes |
react-tutorial-solutions | No | Google Chrome page is blank. Jalangi has few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
react-vite-realworld-example-app | No | Google Chrome and Jalangi page is blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
realworld | Yes? | Page loads and function. Looks like Instrumentation ran, but Jalangi page is blank.  Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
realworld-example | No | Google Chrome page is blank. Jalangi has few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app | Yes | 
solid-realworld | No | Google Chrome and Jalangi page is blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
There were 21 projects tested. 18/21 projects successfully installed. 7/18 projects successfully converted to ES5 and were instrumented through the proxy. 1 of the projects that ran through the proxy has a blank Jalangi page, despite the proxy terminal reporting that instrumentation ran. The 2 most common error were `Uncaught SyntaxError: Unexpected eval or arguments in strict mode` and `Uncaught TypeError: Cannot read properties of undefined`