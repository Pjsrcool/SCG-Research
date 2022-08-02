**imba-realworld-example-app**\
fork: https://github.com/Pjsrcool/imba-realworld-example-app

**Installation**
1. Clone the repo. Stay in main branch
2. Run `npm install`

**Run without build**
note: currently not running through proxy
1. run `npm run dev -- --host <ip> --port <port>`, where `<ip>` is your local IP that would work on the proxy, and `<port>` is any port that does not conflict with the proxy

**To build and run the server**
1. In `package.json`, ensur that the `"homepage"` field to be `"homepage": "/"`
2. Run `npm run build`
3. Start the server with `serve -s dist`

**Notes**
- Fails to convert to es5 under proxy