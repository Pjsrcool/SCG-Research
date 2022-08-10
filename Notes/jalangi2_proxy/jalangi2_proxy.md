**Using Jalangi2 and proxy to automate conversion JS to ES5**
1. Clone repo https://github.com/Pjsrcool/jalangi2
2. Checkout to `es5` branch
3. Run `npm install`
4. In your system settings, set network proxy to include the following for both HTTP and HTTPS
```
IP: 127.0.0.1
Port: 8080 
```
5. Start the proxy. See the official Jalangi2 readme.md for details. A sample command for Linux is 
```
mitmdump --quiet --anticache -s scripts/proxy.py "--inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/sample_analyses/pldi16/BranchCoverage.js"
```
6. Access the project through local network to run it through the proxy

NOTE: Currently, this will NOT work for all projects. I am still working on that.

See `Notes/jalangi2_proxy` for test results
Results in the `Notes/jalangi2_proxy/build` folder are from builing each project and running the the build. Results from `Notes/jalangi2_proxy/no-build` folder are from simply running the project

Use `--allow-hosts` to allow all connections
