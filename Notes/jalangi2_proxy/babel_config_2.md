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
ember-realworld |  | 
emoji-search |  | 
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app |  | 
imba-realworld-example-app |  | 
neomjs-realworld-example-app |  | 
owl-realworld-app |  | 
react-image-compressor |  | 
react-redux-realworld-example |  | 
react-tutorial-solutions |  | 
react-vite-realworld-example-app |  | 
realworld |  | 
realworld-example |  | 
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app |  | 
web-components-realworld-example-app |  | 

## Conclusion
There were 20 projects tested. I was only able to install, build, and run 18 of them. Of the 18