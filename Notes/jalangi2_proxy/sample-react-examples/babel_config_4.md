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
bmi-calculator |  | 
calculator | No | The black background appears, but nothing else does. Console reports error `Uncaught ReferenceError: require is not defined`
emoji-search |  | 
react-image-compressor |  | 
react-tutorial-solutions |  | 

## Conclusion
