**todomvc**\
fork: https://github.com/Pjsrcool/todomvc

These examples are already compiled. To run them, we us a script from Madhurima.

**To run each project**
1. Make sure you are in this repo's root directory
2. Run `node Utilities/serveTodo.js <directory>`
3. Access from the browser at `0.0.0.0:8081`

Replace `<directory>` with the absolute path to the example you want to run. Check the list below for the specific path used for each example. The beginning of each path is removed because it will be different on each person's computer. For example, if I wanted to run `angular2` on my computer, the command I would run is `node Utilities/serveTodo.js /home/justin/SCG-Research/Projects/todomvc/examples/angular2`

**Note**: If the directory specified does not have an `index.html` file, then the script will open the `index.html` from the todomvc root directory. This results in opening a web page allowing the user to choose  a framework

Project | Specific Directory | Notes
--|--|--
angular-dart | `/todomvc/examples/angular-dart/web` | opens the todomvc app, but with missing/wrong gui. Everything still functions as expected though. If we use `/todomvc/examples/angular-dart`, we get a web page allowing the user to chose a framework because there is no `index.html` file.
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
duel | `/todomvc/examples/duel/www` | Missing UI for radio button to mark an item as completed. It still works as intended though.
elm | `/todomvc/examples/elm`
emberjs | `/todomvc/examples/emberjs` | Has a panel on the left linking to some resources
emberjs_require | `/todomvc/examples/emberjs_require` | This Example has been removed by owners
enyo_backbone | `/todomvc/examples/enyo_backbone` | Has a panel on the left linking to some resources
exoskeleton | `/todomvc/examples/exoskeleton` | Has a panel on the left linking to some resources
firebase-angular | `/todomvc/examples/firebase-angular` | Has a panel on the left linking to some resources
gwt  | `/todomvc/examples/gwt` | Missing UI for radio button to mark an item as completed. It still works as intended though. Has a panel on the left linking to some resources
jquery | `/todomvc/examples/jquery` | Has a panel on the left linking to some resources
js_of_ocaml | `/todomvc/examples/js_of_ocaml` | Has a panel on the left linking to some resources
jsblocks | `/todomvc/examples/js_blocks` | Has a panel on the left linking to some resources
knockback | `/todomvc/examples/knockback` | Has a panel on the left linking to some resources
knockoutjs | `/todomvc/examples/knockoutjs` | Has a panel on the left linking to some resources
knockoutjs_require | `/todomvc/examples/knockoutjs_require` | Missing UI to check all/active/completed tasks. There is no way to check those tabs. Has a panel on the left linking to some resources
kotlin-react | `/todomvc/examples/kotlin-react` | 
lavaca_require | `/todomvc/examples/knockoutjs` | Has a panel on the left linking to some resources
mithril | `/todomvc/examples/mithril` | Has a panel on the left linking to some resources
polymer | `/todomvc/examples/polymer` | Has a panel on the left linking to some resources
ractive | `/todomvc/examples/ractive` | Has a panel on the left linking to some resources
react | `/todomvc/examples/react` | Has a panel on the left linking to some resources
react-alt | `/todomvc/examples/react-alt` | Has a panel on the left linking to some resources
react-backbone | `/todomvc/examples/react-backbone` | Has a panel on the left linking to some resources
react-hooks | `todomvc/examples/react-hooks/build` | Need to go into the `react-hooks` directory and run `npm run install` and `npm run build` for initial set up.
reagent | `/todomvc/examples/reagent` | Has a panel on the left linking to some resources
riotjs | `/todomvc/examples/riotjs` | Has a panel on the left linking to some resources
scalajs-react | `/todomvc/examples/scalajs-react` | Has a panel on the left linking to some resources
typesript-angular | `/todomvc/examples/typescript-angular` | Has a panel on the left linking to some resources
typescript-backbone | `/todomvc/examples/typescript-backbone` | Has a panel on the left linking to some resources
typescript-react | `/todomvc/examples/typescript-react` | 
vanilla-es6 | `/todomvc/examples/vanilla-es6` | Has a panel on the left linking to some resources
vanillajs | `/todomvc/examples/vanillajs` | Has a panel on the left linking to some 
vue | `/todomvc/examples/vue` | Has a panel on the left linking to some 