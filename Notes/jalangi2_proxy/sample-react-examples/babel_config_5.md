# Babel Config 5

## Babel Configuration Used
*.babelrc*
```
{
	"presets" : ["@babel/preset-env",
				 "@babel/preset-react"],
	"plugins" : [
		"@babel/plugin-transform-classes",
		"transform-remove-strict-mode"]
}

```

## Preparation
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.

***Important: Projects can now connect to the internet (Realworld server)***

## Projects tested
Project | Works? | Notes
---|---|---
bmi-calculator | Yes |
calculator | Yes |
emoji-search | No | Google Chrome page is blank except for 'Fork me on Github' button. Jalangi has some results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
react-image-compressor | No | Google Chrome page is blank. Jalangi has few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
react-tutorial-solutions | No | Google Chrome page is blank. Jalangi has few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`

## Conclusion
2/5 project sucessfully converted to ES5 and were instrumented under the proxy. The 3 projects that failed had the error `Uncaught TypeError: Cannot read properties of undefined`