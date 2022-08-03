# Babel Config 1

## Babel Configuration Used
*.babelrc*
```
{
	"presets" : ["@babel/preset-env"],
	"plugins" : ["@babel/plugin-syntax-jsx",
		     "@babel/plugin-transform-react-jsx"]
}
```

## Preparation
Each project was tested by installing then running locally. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to run each project.

***Important: All projects fail to connect to the internet (realworld server) unless noted otherwise**

## Projects tested
Project | Works? | Notes
---|---|---
aurelia-realworld-example-app | No | Page loads forever. Jalangi button is unresponsive. Console reports `DevTools failed to load source map: Could not load content for http://<my ip>:8081/jquery.min.map: HTTP error: status code 404, net::ERR_HTTP_RESPONSE_CODE_FAILURE`
bmi-calculator | Yes | 
calculator | Yes | 
crizmas-mvc-realworld-example-app | No | Jalangi2 runs and has results. The actual web page flashes once. Then only a blank page remains with a Jalangi button
ember-realworld | No | Jalangi runs, but the page is blank with a Jalangi button. The start script automatically builds the project before serving it. More reading about ember is required.
emoji-search | No | Google Chrome page is blank except for a `fork me on GitHub` button and a Jalangi button. Console reports error `Uncaught TypeError: Cannot read properties of undefined (reading 'webpackJsonpemoji-search')`
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app | Yes | 
imba-realworld-example-app | No | Babel crashes. Page still loads. Jalangi page is blank.
neomjs-realworld-example-app | No | Main page appears. Clicking the links to the projects takes us to a blank page. Jalangi button appears, but instrumentation runs. Probably because the links take us to html pages, not js pages.
owl-realworld-app | No | Google Chome and Jalangi page is blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
react-image-compressor | No | Only the Jalangi button and the blue background appears. Jalangi has a few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined (reading 'webpackJsonpreact-image-compressor')`
react-redux-realworld-example  | Yes | 
react-tutorial-solutions | No | Google Chrome page is blank. Jalangi page is blank. Console reports error `Uncaught TypeError: Cannot read properties of undefined (reading 'webpackJsonptic-tac-toe')`
react-vite-realworld-example-app | No | Google Chrome and Jalangi page is blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
realworld | No | Page loads, but babel fails. Jalangi page is blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
realworld-example | No | Google Chrome page is blank. Jalangi returns a few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined (reading 'webpackJsonpreact-statium-realworld-example')`
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app | Yes | 
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
There were 20 projects tested. 17 were sucessfully installed. 5/17 sucessfuly converted into ES5 through the proxy, and were instrumented with jalangi2.