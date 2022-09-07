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
angular-dart
angular2
angular2_es2015
angularjs | Yes | Console reports error `GET http://192.168.1.10:8081/api 404 (Not Found)`
angularjs_require
aurelia
backbone | Yes | 
backbone_marionette
backbone_require
binding-scala
canjs | Partial | UI is there, but cannot add items to todo list. Instrumentation ran and Jalangi page has some results. Console reports errors `Uncaught TypeError: Cannot read properties of undefined (reading 'Models')` and `Uncaught TypeError: Cannot read properties of undefined (reading 'call')`
canjs_require
closure
cujo
dijon
dojo
duel
elm
emberjs
emberjs_require
enyo_backbone
exoskeleton
firebase-angular
gwt
jquery | Partial | UI is there, but cannot add items to todo list. Instrumentation ran and Jalangi page has some results. Console reports errors `Uncaught TypeError: Cannot read properties of undefined (reading 'Handlebars')` and `Uncaught ReferenceError: Handlebars is not defined`
js_of_ocaml
jsblacks
knockback | Partial | UI is there, but cannot add items to todo list. Instrumentation ran and Jalangi page has some results. Console reports errors `Uncaught TypeError: Cannot set properties of undefined (setting 'ko')`, `Uncaught ReferenceError: kb is not defined`, and `Uncaught ReferenceError: kb is not defined`
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
