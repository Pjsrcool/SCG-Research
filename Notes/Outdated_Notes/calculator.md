**calculator**\
fork: https://github.com/Pjsrcool/calculator

Checkout to branch "es5" to view ES5 version.

**To Install and run default project:**
1. clone project
2. follow readme

**To build and deploy the server:**
1. In `package.json`, ensure that the `"homepage"` field is set to only `"/"`.
2. Ensure that the necesarry packages are installed using `npm ci`. Then run `npm run build`
3. Ensure that the `serve` node package is installed globally. To install, use `npm install -g serve` or `yarn global add serve`
4. Run the server with `serve -s build`

**The following steps were taken to convert the project from ES6 to ES5:**
Note: Branch `es5` already has these changes
1. Branch off of `master` into a new branch `es5`
2. Install the required Babel modules by running:\
 `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node @babel/plugin-syntax-jsx @babel/plugin-transform-react-jsx`
3. In `package.json`, delete the `"babel"` field towards the bottom. And add the following to the `"scripts"` field:
```
"es5": "babel src -d src"
```
4. In the root directory of the project, create file `.babelrc` with the following contents:
```
{
	"presets" : ["@babel/preset-env"],
	"plugins" : ["@babel/plugin-syntax-jsx",
				 "@babel/plugin-transform-react-jsx"]
}
```
5. Run `npm run es5`

Basically, we generate ES5 files from the original ES6 files. Then we replace the original ES6 files with the new ES5 files. All this is done and saved in the `es5` branch.

**To Run the Puppeteer exercising script:**
1. Ensure that the calculator server is running using the steps from "To build and deploy the server"
2. Navigate to the `scripts` directory of this repo
3. Ensure that the `puppeteer` node package is installed using `npm install puppeteer`
4. Run `node <script you want to run>`. For example: `node calculator_1.js`