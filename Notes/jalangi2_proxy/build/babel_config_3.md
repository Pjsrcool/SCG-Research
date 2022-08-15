# Babel Config 3

## Babel Configuration Used
*.babelrc*
```
{
	"presets" : ["@babel/preset-env"]
}
```

## Preparation
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.

***Important: All projects fail to connect to the internet (realworld server) unless noted otherwise**

## Projects tested
Project | Works? | Notes
---|---|---
aurelia-realworld-example-app | No | Babel runs, but page fails to load. Pop up appears saying that page is unresponsive.
bmi-calculator | Yes | 
calculator | Yes | 
crizmas-mvc-realworld-example-app | No | Google Chrome page is blank. Jalangi button works, and shows that instrumentation ran with many branches. Console reports error `TypeError: Cannot read properties of null (reading 'length')`
ember-realworld | No | Google Chrome page is blank. Jalangi button works, and shows that instrumentation ran with many branches. Console reports error `Uncaught ReferenceError: require is not defined`
emoji-search | No | Google Chrome page is blank. Jalangi button works, and shows that instrumentation ran with some branches. Console reports error `TypeError: Cannot read properties of undefined (reading 'webpackJsonpemoji-search')`
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app | Yes | 
imba-realworld-example-app | No | Babel cmd in proxy fails. Instrumentation does NOT run on JS files
neomjs-realworld-example-app | No | Ran project without build. Main page appears. Clicking the links to the projects takes us to a blank page. Jalangi button appears, but jalangi page is blank. Probably because the links take us to `html` pages, not `js` pages.
owl-realworld-app | No | Google Chrome page is blank. Jalangi page is blank as well. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
react-image-compressor | No | Google Chrome page is blank. Instrumentation technically ran, but only return few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
react-redux-realworld-example | Yes | 
react-tutorial-solutions | No | Google Chrome page is blank. Instrumentation technically ran, but only return few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined (reading 'webpackJsonptic-tac-toe')`
react-vite-realworld-example-app | No | Google Chrome page is blank. Jalangi page is also blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
realworld | Yes? | Looks like Instrumentation ran, but jalangi page is blank. This project is able to connect to the internet (realworld server) when connected to proxy. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
realworld-example | No | Google Chrome page is blank. Instrumentation technically ran, but only return few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined (reading 'webpackJsonpreact-statium-realworld-example')`
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app | Yes | 
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
There were 20 projects tested. I was only able to install, build, and run 17 of them. Of the 17, only 6 were successfully instrumented through the proxy. Two of them are small, sample React projects; the 4 are realworld examples. This is the exact same result as `babel_config_1`.