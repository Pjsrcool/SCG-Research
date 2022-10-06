# Babel Config 6

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

This was tested WITHOUT "use strict" support.

## Preparation
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.

## Projects tested
Project | Works? | Notes
---|---|---
aurelia-realworld-example-app 
crizmas-mvc-realworld-example-app 
ember-realworld 
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app 
imba-realworld-example-app 
neomjs-realworld-example-app 
owl-realworld-app 
react-redux-realworld-example 
react-vite-realworld-example-app
realworld 
realworld-example 
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app 
solid-realword
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
There were 13/16 projects installed and build sucessfully.