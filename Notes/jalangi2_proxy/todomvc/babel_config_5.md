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
The following 10 projects are mentioned on the paper: Angularjs, backbone, canjs, jquery, Knockback, knockoutjs, Mithril, react, vanillajs, vue

## Projects tested
Project | Works? | Notes
---|---|---
angular-dart | Partial | The wrong UI loads, which is expected (see `Notes/Projects/todomvc.md`). Cannot add items to the todo list. Instrumentation runs and Jalangi page has results. Console reports errors: <br>`Failed to load resource: the server responded with a status of 404 (Not Found)` <br> and <br> `Uncaught NoSuchMethodError : method not found: 'Symbol("_mangledName")'`<br>  and <br> `Refused to apply style from 'http://0.0.0.0:8081/node_modules/todomvc-app-css/index.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.`
angular2 | No | Some UI is present. Instrumentation ran and Jalangi has results. Console reports error `Uncaught Error: Module angular2/platform/browser not declared as a dependency.`
angular2_es2015 | Yes |
angularjs | Yes | Console reports error `GET http://192.168.1.10:8081/api 404 (Not Found)`
angularjs_require | Partial | UI loads. Instrumentation ran and Jalangi has results. Cannot add items to the todo list. Console reports error `Uncaught ReferenceError: require is not defined`
aurelia | No ? | Takes too long to finish instrumenting
backbone | Yes | 
backbone_marionette | Partial | Text box for adding items to the todo list is missing. Instrumentation ran and Jalangi has results. Console reports errors: <br> `Uncaught TypeError: Cannot read properties of undefined (reading 'Backbone')` <br> and <br> `Uncaught ReferenceError: Mn is not defined` <br> and <br> `Uncaught TypeError: Cannot read properties of undefined (reading 'channel')`
backbone_require | Partial | UI loads. Instrumentation ran and Jalangi has results. Cannot add items to todo list. Console reports error: `Uncaught ReferenceError: require is not defined`
binding-scala | Yes |
canjs | Partial | UI is there, but cannot add items to todo list. Instrumentation ran and Jalangi page has some results. Console reports errors: <br> `Uncaught TypeError: Cannot read properties of undefined (reading 'Models')` <br> and <br> `Uncaught TypeError: Cannot read properties of undefined (reading 'call')`
canjs_require | Partial | Text box for adding items to the todo list is missing. Instrumentation ran and Jalangi has results. Console reports error: `Uncaught ReferenceError: require is not defined`
closure | Yes |
cujo | Partial | Text box for adding items to the todo list is missing. Instrumentation ran and Jalangi has results. Console reports error: `(index):10298 Uncaught TypeError: Cannot read properties of undefined (reading 'window')`
dijon | Partial | UI loads. Instrumentation ran and Jalangi has results. Cannot add items to the todo list. Console reports errors: <br> `Uncaught TypeError: Cannot set properties of undefined (setting 'dijon')` <br> and <br> `Uncaught ReferenceError: dijon is not defined`
dojo | Partial |  UI loads. Instrumentation ran and Jalangi has results. Cannot add items to the todo list. Instrumentation ran and Jalangi page has results. Console reports errors: <br> `Uncaught TypeError: Cannot set properties of undefined (setting 'require')` <br> and <br> `Uncaught TypeError: Cannot read properties of undefined (reading 'dojoConfig')`
duel
elm
emberjs
emberjs_require
enyo_backbone
exoskeleton
firebase-angular
gwt
jquery | Partial | UI loads. Cannot add items to todo list. Instrumentation ran and Jalangi page has results. Console reports errors: <br> `Uncaught TypeError: Cannot read properties of undefined (reading 'Handlebars')` <br> and <br> `Uncaught ReferenceError: Handlebars is not defined`
js_of_ocaml
jsblacks
knockback | Partial | UI loads. Cannot add items to todo list. Instrumentation ran and Jalangi page has results. Console reports errors <br> `Uncaught TypeError: Cannot set properties of undefined (setting 'ko')` <br> and <br> `Uncaught ReferenceError: kb is not defined` <br> and <br> `Uncaught ReferenceError: kb is not defined`
knockoutjs | Yes | 
knockoutjs_require
kotlin-react
lavaca_require
mithril | Yes | 
polymer
reactive
react | Yes | 
react-alt
react-backbone
react-hooks
reagent
riotjs
scalajs-react
typesript-angular
typescript-backbone
typescript-react
vanilla-es6
vanillajs | Yes | 
vue | No | Some essential UI is missing. Instrumentation ran and Jalangi page has some results. Console reports errors `Uncaught TypeError: Cannot set properties of undefined (setting 'Vue')`, `Uncaught ReferenceError: Vue is not defined`, and `Uncaught ReferenceError: app is not defined`

## Conclusion
