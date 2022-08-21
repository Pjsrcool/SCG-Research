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
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.

***Important: All projects fail to connect to the internet (realworld server) unless noted otherwise**

## Projects tested
Project | Works? | Notes
---|---|---
aurelia-realworld-example-app | No | Google Chrome page is blank. The jalangi button is unresponsive. Console reports error `Uncaught SyntaxError: Unexpected token '<'`
crizmas-mvc-realworld-example-app | No | Google Chrome page is blank. We can see some results from instrumentation. Even though babel convertion ran successfully on the proxy, it is most likely NOT error-free. This applies for both before and after I manually converted to ES5.
ember-realworld | No | Google Chrome page is blank. We can see some results from instrumentation. Console reports error `Uncaught ReferenceError: require is not defined`. This probably means babel conversion is not perfect.
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app | Yes | 
imba-realworld-example-app | No | Babel cmd in proxy fails. Instrumentation does NOT run on JS files
neomjs-realworld-example-app | No | Ran project without build. Main page appears. Clicking the links to the projects takes us to a blank page. Jalangi button appears, but instrumentation runs. Probably because the links take us to `html` pages, not `js` pages.
owl-realworld-app | No | Google Chrome page is blank. Jalangi page is blank as well. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode` 
react-redux-realworld-example | Yes | 
react-vite-realworld-example-app | No | Google Chrome page is blank. Jalangi page is blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`.
realworld | Yes? | Looks like Instrumentation ran, but jalangi page is blank. This project is able to connect to the internet (realworld server) when connected to proxy
realworld-example | No | Google Chrome page is blank. Jalangi page as few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined (reading 'webpackJsonpreact-statium-realworld-example')`
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app | Yes | 
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
12/15 projects installed and built sucessfully. 4/12 projects sucessfuly converted to ES5 and were instrumented under proxy. This is the exact same result as `babel_config_1`.