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
bmi-calculator | Yes | 
calculator | Yes | 
emoji-search | No | Google Chrome page is blank. Jalangi button works, and shows that instrumentation ran with some branches. Console reports error `TypeError: Cannot read properties of undefined (reading 'webpackJsonpemoji-search')`
react-image-compressor | No | Google Chrome page is blank. Instrumentation technically ran, but only return few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined`
react-tutorial-solutions | No | Google Chrome page is blank. Instrumentation technically ran, but only return few results. Console reports error `Uncaught TypeError: Cannot read properties of undefined (reading 'webpackJsonptic-tac-toe')`

## Conclusion
2/5 projects sucessfully converted to ES5 and were instrumented under the proxy. This is the exact same result as `babel_config_1`.