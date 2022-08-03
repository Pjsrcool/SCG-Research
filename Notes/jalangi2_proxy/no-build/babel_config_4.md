# Babel Config 4

## Babel Configuration Used
*.babelrc*
```
{
	"presets" : ["@babel/preset-env",
				 "@babel/preset-react"],
	"plugins" : ["@babel/plugin-syntax-jsx",
		     "@babel/plugin-transform-react-jsx",
			 "@babel/plugin-transform-runtime"]
}
```

## Preparation
Each project was tested by installing then running locally. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to run each project.

***Important: All projects fail to connect to the internet (realworld server) unless noted otherwise**

## Projects tested
Project | Works? | Notes
---|---|---
aurelia-realworld-example-app | No | Google Chrome and Jalangi page is blank. Console reports error `Uncaught ReferenceError: require is not defined`
bmi-calculator | No | Google Chrome and Jalangi page is blank. Jalangi technically ran. Console reports error `Uncaught ReferenceError: require is not defined`
calculator | No | Google Chrome and Jalangi page is blank. Jalangi technically ran. Console reports error `Uncaught ReferenceError: require is not defined`
crizmas-mvc-realworld-example-app | No | Google Chrome page is blank. Jalangi return a few results. Console reports error `Uncaught ReferenceError: require is not defined`
ember-realworld | No | Google Chrome page is blank. Jalangi return a few results. Console reports error `Uncaught ReferenceError: require is not defined`
emoji-search | No | Google Chrome page is blank except for a "Fork me on GitHub" link. Jalangi return a few results. Console reports error `Uncaught ReferenceError: require is not defined`
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app | No | Google Chrome and Jalangi page is blank. Jalangi technically ran. Console reports error `Uncaught ReferenceError: require is not defined`
imba-realworld-example-app | No | The page loads and the Jalangi button appears. Babel crashed
neomjs-realworld-example-app | No | Main page launches, but links to the app is blank. Jalangi page is also blank
owl-realworld-app | No | Google Chrome and jalangi page is blank. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
react-image-compressor | No | Blue blackground loads. Jalangi page is blank. Console reports error `Uncaught ReferenceError: require is not defined`
react-redux-realworld-example | No | Google Chrome and Jalangi page is blank. Jalangi technically ran. Console reports error `Uncaught ReferenceError: require is not defined`
react-tutorial-solutions | No | Google Chrome and Jalangi page is blank. Jalangi technically ran. Console reports error `Uncaught ReferenceError: require is not defined`
react-vite-realworld-example-app | No | Google Chrome and Jalangi page is blank. Jalangi technically ran. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
realworld | No | Page loaded. Jalangi page is blank. Instrumentation failed. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
realworld-example | No | Google Chrome and Jalangi page is blank. Console reports error `Uncaught ReferenceError: require is not defined`
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app | No | Google Chrome and Jalangi page is blank. Console reports error `Uncaught ReferenceError: require is not defined`
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
There were 20 projects tested. 17 installed and ran. NONE of them worked under this babel configuration. It looks like babel doesn't handle `require` at all. A quick Google search suggests we fix this with webpack, but that would involve making direct changes to each project.