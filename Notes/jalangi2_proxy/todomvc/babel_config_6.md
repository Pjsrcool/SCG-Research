# Babel Config 5

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


## Projects tested
Project | Works? | Notes
---|---|---
angular-dart
angular2
angular2_es2015
angularjs
angularjs_require
aurelia
backbone
backbone_marionette
backbone_require
binding-scala
canjs
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
jquery
js_of_ocaml
jsblacks
knockback
knockoutjs
knockoutjs_require
kotlin-react
lavaca_require
mithril
polymer
reactive
react
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
vanillajs
vue

## Conclusion
