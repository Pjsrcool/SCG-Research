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

## Preparation
Each project was tested by installing, building, then serving from the build folder. Find each project's markdown file in `Notes/Projects` to see the specific steps taken to build each project.

***Important: All projects fail to connect to the internet (realworld server) unless noted otherwise**

## Projects tested
Project | Works? | Notes
---|---|---
bmi-calculator | Yes |
calculator | Yes | 
emoji-search | Yes |
react-image-compressor | Yes? | App loads sucessfully. Jalangi page has results. When trying to download the compressed image, console reports error: `Uncaught ReferenceError: J$ is not defined`
react-tutorial-solutions | Yes |

## Conclusion
4/5 projects definitely sucessfully converted to ES5 under proxy. react-image-compressor has issues with Jalangi2 when trying to download the compressed image.
