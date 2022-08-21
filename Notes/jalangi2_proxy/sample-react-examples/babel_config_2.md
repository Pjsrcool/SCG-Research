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
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.

***Important: All projects fail to connect to the internet (realworld server) unless noted otherwise**

## Projects tested
Project | Works? | Notes
---|---|---
bmi-calculator | Yes | 
calculator | Yes | 
emoji-search | No | Only the jalangi button and a banner saying "Fork me on GitHub" appears. Otherwise the page is blank. I believe babel conversion was imperfect. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
react-image-compressor | No | Google Chrome page is blank. Instrumentation technically ran, but only return few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
react-tutorial-solutions | No | Google Chrome page is blank. Instrumentation technically ran, but only return few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`

## Conclusion
2/5 projects sucessfully converted to ES5 and were instrumented under the proxy. This is the exact same result as `babel_config_1`.