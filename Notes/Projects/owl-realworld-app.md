**owl-realworld-app**\
fork: https://github.com/Pjsrcool/owl-realworld-app

**Installation**
1. Run `npm install`

**Run without build**
1. in `rollup.config.js`, update the host and port so that it will pass through the proxy
2. run `npm run dev`

**Build and Run Server**
1. Run `npm run build`
2. Run `serve -s dist`

**Convert to ES5**\
WIP (does not work currently)
1. Run `npm install @babel/cli @babel/core --save-dev`
2. In `package.json`, add the following script: `"es5": "babel src -d src"`
3. Run `npm run es5`

**Notes**
- comes with its own babel config