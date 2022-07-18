# Babel Config 2

## Babel Configuration Used
*.babelrc*
```
{
	"presets" : ["@babel/preset-env", "@babel/preset-react"],
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
bmi-calculator | Yes | 
calculator | Yes | 
crizmas-mvc-realworld-example-app | No | Google Chrome page is blank. We can see some results from instrumentation. Even though babel convertion ran successfully on the proxy, it is most likely NOT error-free. This applies for both before and after I manually converted to ES5.
ember-realworld | No | Google Chrome page is blank. We can see some results from instrumentation. Console reports error `Uncaught ReferenceError: require is not defined`. This probably means babel conversion is not perfect.
emoji-search | No | Only the jalangi button and a banner saying "Fork me on GitHub" appears. Otherwise the page is blank. I believe babel conversion was imperfect. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app | Yes | 
imba-realworld-example-app | No | Babel cmd in proxy fails. Instrumentation does NOT run
neomjs-realworld-example-app | No | Ran project without build. Main page appears. Clicking the links to the projects takes us to a blank page. Jalangi button appears, but instrumentation runs. Probably because the links take us to `html` pages, not `js` pages.
owl-realworld-app | No | Google Chrome page is blank. Jalangi page is blank as well. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode` 
react-image-compressor | No | Google Chrome page is blank. Instrumentation technically ran, but only return few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
react-redux-realworld-example | Yes | 
react-tutorial-solutions | No | Google Chrome page is blank. Instrumentation technically ran, but only return few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
react-vite-realworld-example-app | No | Google Chrome page is blank. Jalangi page is blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`.
realworld | Yes? | Looks like Instrumentation ran, but jalangi page is blank. This project is able to connect to the internet (realworld server) when connected to proxy
realworld-example | No | Google Chrome page is blank. Jalangi page as few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined (reading 'webpackJsonpreact-statium-realworld-example')`
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app | Yes | 
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
There were 20 projects tested. I was only able to install, build, and run 18 of them. Of the 17, only 6 were successfully instrumented through the proxy. Two of them are small, sample React projects; the 4 are realworld examples. This is the exact same result as `babel_config_1`.