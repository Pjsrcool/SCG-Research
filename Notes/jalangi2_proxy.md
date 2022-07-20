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

See `Notes/jalangi2_proxy` for test results
