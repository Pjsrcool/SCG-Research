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

This 

## Preparation
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.

***Important: Projects can now connect to the internet (Realworld server)***

## Projects tested
Project | Works? | Notes
---|---|---
owl-realworld-app | No | Google Chrome page is blank. Jalangi has some results.Console reports error `Uncaught TypeError: Assignment to constant variable.`
react-vite-realworld-example-app | No | Google Chrome and Jalangi page is blank. Console reports error `Uncaught ReferenceError: require is not defined`
realworld | Yes? | Page loads and functions. Looks like Instrumentation ran, but Jalangi page is blank.  Console reports error `Uncaught SyntaxError: The requested module '/_app/immutable/start-9d61c4b6.js' does not provide an export named 'start'`. Jalangi has instrumented and updated the file `/_app/immutable/start-9d61c4b6.js`, leading me to believe that the export for `start` has been changed/removed.
solid-realworld | No | Google Chrome and Jalangi page is blank. Console reports error `Uncaught ReferenceError: exports is not defined`


## Conclusion
There were 4 projects that reported the error `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`.