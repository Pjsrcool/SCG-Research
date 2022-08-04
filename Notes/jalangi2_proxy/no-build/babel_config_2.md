# Babel Config 2

## Babel Configuration Used
*.babelrc*
```
{
	"presets" : ["@babel/preset-env",
				 "@babel/preset-react"],
	"plugins" : [
		"@babel/plugin-syntax-jsx",
		"@babel/plugin-transform-react-jsx",
		"transform-remove-strict-mode"]
}
```

## Preparation
Each project was tested by installing then running locally. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to run each project.

***Important: All projects fail to connect to the internet (realworld server) unless noted otherwise**

## Projects tested
Project | Works? | Notes
---|---|---
aurelia-realworld-example-app | No | Page fails to load. Looks like Babel did not run to completion
bmi-calculator | Yes |
calculator | Yes | 
crizmas-mvc-realworld-example-app | No | The correct web page flashed before resulting in a blank page. Jalangi page shows that instrumentation ran. Console reports error `Uncaught TypeError: Cannot read properties of null (reading 'length')`
ember-realworld | No | Google Chrome page is blank. Jalangi page has instrumentation results. Console reports error `Uncaught TypeError: Cannot read properties of null (reading 'length')`
emoji-search | No | Google Chrome page is blank except for a "Fork me on GitHub" link. Jalangi page shows a few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined (reading 'webpackJsonpemoji-search')`
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app | Yes |
imba-realworld-example-app | No | Page loads. Babel crashed. Maybe strict mode issue?
neomjs-realworld-example-app | No | Main page appears. Clicking the links to the projects takes us to a blank page. Jalangi button appears, but instrumentation runs. Probably because the links take us to html pages, not js pages.
owl-realworld-app | No | Google Chrome and Jalangi page is blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
react-image-compressor | No | Blue background loads. Jalangi page has a few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined (reading 'webpackJsonpreact-image-compressor')`
react-redux-realworld-example | Yes | 
react-tutorial-solutions | No | Google Chrome page is blank. Jalangi page has a few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined (reading 'webpackJsonptic-tac-toe')`
react-vite-realworld-example-app | No | Google Chrome and Jalangi page is blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
realworld | No | Page loads. Babel crashed. Jalangi page is blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
realworld-example | ? | Randomly won't run anymore. Reports type errors. Maybe because new Google Chrome update?
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app | Yes |
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
There were 20 projects tested. Only 16 ran. 5/16 sucessfully converted to ES5 and were instrumented through the proxy. I believe there is an issue with the remove-strict-mode plugin because strict mode is not being remove properly. Running the project without building seems to cause issues due to lack of webpack. A quick google search suggests Babel does not handle `require`, and webpack is supposed to fix that. This means we need to build the project.