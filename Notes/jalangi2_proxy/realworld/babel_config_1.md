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
aurelia-realworld-example-app | No | Using this project's .babelrc and .babelrc.js to convert to ES5 results in a successful transpile, but fails the babel cmd in proxy.py.
crizmas-mvc-realworld-example-app | No | Jalangi2 runs, but Google Chrome page is blank. We can manually convert this project to ES5 using its own babel config, but it will still fail when running though proxy (instrumentation runs, but Google Chrome displays a blank page)
ember-realworld | No | Jalangi2 runs, but Google Chrome page is blank. Console reports error `Uncaught ReferenceError: require is not defined`
event-driven-web-components-realworld-example-app | ? | Currently having issues with installation and running
hyperapp-realworld-example-app | Yes | Works over proxy/jalangi2 (both with and without babel transpile). This project comes with its own babel config
imba-realworld-example-app | No | The babel cmd fails in the proxy, therefore, instrumentation does not occur for JS files
neomjs-realworld-example-app | No | Ran project without build. Main page shows. Instrumentation does not trigger. Needs investigation
owl-realworld-app | No | Google Chrome page is blank. Instrumentation does not run. Console reports error `Uncaught SyntaxError: Unexpected eval or arguments in strict mod`. Attempt as running the "es5" version results on blank page as well.
react-redux-realworld-example | Yes
react-vite-realworld-example-app | No | Google Chrome page is blank. Instrumentation does not run. Console report error: `Uncaught SyntaxError: Unexpected eval or arguments in strict mode`
realworld | Yes? | Looks like Instrumentation ran, but jalangi page is blank. This project is able to connect to the internet (realworld server) when connected to proxy
realworld-example | No | Fails to convert to es5 under proxy. Therefore, Instrumentation does not run
realworld-kingly-svelte | ? | App cannot install properly
san-realworld-app | Yes | 
web-components-realworld-example-app | ? | App cannot install properly

## Conclusion
12/15 projects installed and built sucessfully. 4/12 projects sucessfuly converted to ES5 and were instrumented under proxy. Even though I had the `@babel/plugin-transform-react-jsx` plugin included in `.babelrc`, some React projects still failed. Some projects that did depend on React (ex. `realworld`) still ran successfully.