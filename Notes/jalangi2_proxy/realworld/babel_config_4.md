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
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.

***Important: All projects fail to connect to the internet (realworld server) unless noted otherwise**

## Projects tested
Project | Works? | Notes
---|---|---
aurelia-realworld-example-app | No | Google Chrome page is blank. Console reports error `Uncaught ReferenceError: require is not defined`. Jalangi button appears but has no results
crizmas-mvc-realworld-example-app | No | Google Chrome page is blank. Console reports error `Uncaught ReferenceError: require is not defined`. Jalangi has some results, but not all
ember-realworld |  | 
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app |  | 
imba-realworld-example-app |  | 
neomjs-realworld-example-app |  | 
owl-realworld-app |  | 
react-redux-realworld-example  |  | 
react-vite-realworld-example-app |  | 
realworld |  | 
realworld-example |  | 
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app |  | 
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
