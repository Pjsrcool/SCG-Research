**aurelia-realworld-example-app**\
fork: https://github.com/Pjsrcool/aurelia-realworld-example-app

**Installation**
1. Run `yarn install`
2. Install aurelia-cli globally with `npm install -g aurelia-cli`

**Run without build**
doesn't go through proxy???
1. Inside `aurelia_project/aurelia.json`, update the `platform.port` field to a port that does not conflict with the proxy
2. Inside `aurelia_project/tasks/run.js`, inside `function runWebpack(done)`, update the variable `opts` to have field `"host": '0.0.0.0'`
3. run `au run --watch`

**Build and Run Server**
1. Run `au build`
2. Start server with `serve -s dist`

**Notes**
- I need to learn more about aurelia-cli. I may have a flawed understanding of it currently.