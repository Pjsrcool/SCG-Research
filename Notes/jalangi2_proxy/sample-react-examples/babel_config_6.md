# Babel Config 6

## Babel Configuration Used
*.babelrc*
```
{
	"presets" : [["@babel/preset-env", {"modules": false}],
				 "@babel/preset-react"],
	"plugins" : [
		"@babel/plugin-transform-classes",
		"transform-remove-strict-mode"],
	"overrides": [{
		"sourceType": "unambiguous"
	}]
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
react-image-compressor | Yes, kinda | Uploading and image works. Clicking the "compress" button does nothing. The "download" button shows a preview of a placeholder. Console reports error `Uncaught ReferenceError: J$ is not defined at ....`
react-tutorial-solutions | Yes |

## Conclusion
4/5 projects works completely. Only react-image-compressor has some issues. This may be a Jalangi2 issue though. Will need to investigate further.
