# Babel  Config 1

## Babel Configuration Used
*.babelrc*
```
{
	"presets" : ["@babel/preset-env"],
	"plugins" : ["@babel/plugin-syntax-jsx",
		     "@babel/plugin-transform-react-jsx"]
}
```

## Preparation
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.

***Important: All projects fail to connect to the internet (realworld server) unless noted otherwise**

## Projects tested
Project | Works? | Notes
---|---|---
bmi-calculator | Yes
calculator | Yes
emoji-search | No | Google Chrome page is blank
react-image-compressor | No | Google Chrome page is blank
react-tutorial-solutions | No | Google Chrome page is blank

## Conclusion
2/5 projects were successfully converted to ES5 and instrumented through the proxy. Even though I had the `@babel/plugin-transform-react-jsx` plugin included in `.babelrc`, some React projects still failed.