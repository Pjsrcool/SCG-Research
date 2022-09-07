**todomvc**\
fork: https://github.com/Pjsrcool/todomvc

These examples are already compiled. To run them, we us a script from Madhurima.

**To run each project**
1. Make sure you are in this repo's root directory
2. Run `node Utilities/serveTodo.js <directory>`

Replace `<directory>` with the absolute path to the example you want to run. Check the list below for the specific path used for each example. The beginning of each path is removed because it will be different on each person's computer. For example, if I wanted to run `angular2` on my computer, the command I would run is `node Utilities/serveTodo.js /home/justin/SCG-Research/Projects/todomvc/examples/angular2`

**Note**: If the directory specified does not have an `index.html` file, then the script will open the `index.html` from the todomvc root directory. This results in opening a web page allowing the user to choose  a framework

Project | Specific Directory | Notes
--|--|--
angular-dart | `/todomvc/examples/angular-dart/web` | opens the todomvc app, but with missing/wrong gui. If we use `/todomvc/examples/angular-dart`, we get a web page allowing the user to chose a framework because there is no `index.html` file.
angular2 | `/todomvc/examples/angular2`
angular2_es2015 | `/todomvc/examples/angular2_es2015`
angularjs | `/todomvc/examples/angularjs` | Has a panel on the left linking to some resources
angularjs_require | `/todomvc/examples/angularjs_require` | Has a panel on the left linking to some resources
aurelia | `/todomvc/examples/aurelia` | Has a panel on the left linking to some resources
backbone | `/todomvc/examples/backbone` | Has a panel on the left linking to some resources
backbone_marionette | `/todomvc/examples/backbone_marionette` | Has a panel on the left linking to some resources
backbone_require | `/todomvc/examples/backbone_require` | Has a panel on the left linking to some resources
binding-scala | `/todomvc/examples/binding-scala` | Has a panel on the left linking to some resources
canjs | `/todomvc/examples/canjs` | Has a panel on the left linking to some resources
canjs_require | `/todomvc/examples/canjs_require` | Has a panel on the left linking to some resources
closure | `/todomvc/examples/closure` | Has a panel on the left linking to some resources
cujo | `/todomvc/examples/cujo` | Has a panel on the left linking to some resources. The todomvc app itself is missing most of its UI. Trying `serve -s <path to /todomvc/examples/cujo/>`, also results in the app but most of its UI is also missing. Trying to use `/todomvc/examples/cujo/app` opens a web page allowing the user to choose a framework, due to not having an `index.html` file. 
dijon | `/todomvc/examples/dijon` | Has a panel on the left linking to some resources
dojo | `/todomvc/examples/dojo` | Has a panel on the left linking to some resources
duel
elm
emberjs
emberjs_require
enyo_backbone
exoskeleton
firebase-angular
gwt
jquery | `/todomvc/examples/jquery` | Has a panel on the left linking to some resources
js_of_ocaml
jsblacks
knockback | `/todomvc/examples/knockback` | Has a panel on the left linking to some resources
knockoutjs | `/todomvc/examples/knockoutjs` | Has a panel on the left linking to some resources
knockoutjs_require
kotlin-react
lavaca_require
mithril | `/todomvc/examples/mithril` | Has a panel on the left linking to some resources
polymer
reactive
react | `/todomvc/examples/react` | Has a panel on the left linking to some resources
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
vanillajs | `/todomvc/examples/vanillajs` | Has a panel on the left linking to some 
vue | `/todomvc/examples/vue` | Has a panel on the left linking to some 