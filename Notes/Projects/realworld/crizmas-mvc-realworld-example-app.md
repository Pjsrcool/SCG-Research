**crizmas-mvc-realworld-example-app**\
fork: https://github.com/Pjsrcool/crizmas-mvc-realworld-example-app

**Installation**
1. Run `npm i`

**Build and Run Server**
1. Run `npm run build`
2. Run `serve -s dist`

**Run without build**
1. Run `npm start`

**Convert to ES5 Using Babel**\
*The results of these steps are on branch `es5`*
1. Run `npm install @babel/cli`
2. Create a file `.babelrc` with the following contents
```
{
	"presets" : ["@babel/preset-react"],
	"plugins" : ["@babel/plugin-syntax-jsx",
		     "@babel/plugin-transform-react-jsx"]
}
```
3. Run `babel src -d src`
4. Don't forget to rebuild the project if needed