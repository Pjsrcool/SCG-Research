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
aurelia-realworld-example-app 
bmi-calculator 
calculator 
crizmas-mvc-realworld-example-app 
ember-realworld 
emoji-search 
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app 
imba-realworld-example-app 
neomjs-realworld-example-app 
owl-realworld-app 
react-image-compressor 
react-redux-realworld-example  
react-tutorial-solutions 
react-vite-realworld-example-app 
realworld 
realworld-example 
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app 
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
There were 20 projects tested.