**Using Jalangi2 and proxy to automate conversion JS to ES5**
1. Clone repo https://github.com/Pjsrcool/jalangi2
2. Checkout to `es5` branch
3. Run `npm install`
4. In your system settings, set network proxy to include the following for both HTTP and HTTPS
```
IP: 127.0.0.1
Port: 8080 
```
5. Start the proxy. See the official Jalangi2 readme.md for details. A sampele command for Linux is 
```
mitmdump --quiet --anticache -s scripts/proxy.py "--inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/sample_analyses/pldi16/BranchCoverage.js"
```
6. When running your node project, Make sure to build it and run it using `serve -s build`. Access it through your local network, not localhost. This will allow the proxy to intercept the project

NOTE: Currently, this will NOT work for all projects. I am still working on that.


**Projects tested:**
- aurelia-realworld-example-app: does NOT work. Using this project's .babelrc and .babelrc.js fails the babel cmd in proxy.py.
- bmi-calculator: works
- calculator: works
- crizmas-mvc-realworld-example-app: does NOT work. Jalangi runs, but Google Chrome page is blank. We can manually convert this project to ES5 using its own babel config, but it will still fail when running though proxy (instrumentation runs, but Google Chrome displays a blank page) 
- emoji-search: does NOT work. Google Chrome page is blank
- react-image-compressor: does NOT work. Google Chrome page is blank
- react-redux-realworld-example: works
- react-tutorial-solutions: does NOT work. Google Chrome page is blank
