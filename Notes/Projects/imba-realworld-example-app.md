**imba-realworld-example-app**\
fork: https://github.com/Pjsrcool/imba-realworld-example-app

**Installation**
1. Clone the repo. Stay in main branch
2. Run `npm install`

**Run without build**
1. run `npm run dev -- --host 0.0.0.0 --port 3000`

**To build and run the server**
1. In `package.json`, ensur that the `"homepage"` field to be `"homepage": "/"`
2. Run `npm run build`
3. Start the server with `serve -s dist`
