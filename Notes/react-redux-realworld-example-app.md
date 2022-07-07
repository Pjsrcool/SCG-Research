**react-redux-realworld-example-app**\
fork: https://github.com/Pjsrcool/react-redux-realworld-example-app

**To Install and run default project:**
1. clone project
2. install with ``yarn``
3. run with ``yarn start``

**Watch limit error**\
To fix the following error on Ubuntu based Linux distributions:
```
System limit for number of file watchers reached
```
Add ``fs.inotify.max_user_watches = 524588`` to the end of ``/etc/sysctl.conf``

**jalangi w/ mitmproxy**\
When running the project using ``yarn start``, it appears as if jalangi fails to run analysis. The jalangi button does not appear. mitmproxy produces the following output:
```
Jalangi home is /home/justin/jalangi2
Current working directory is /home/justin/jalangi2
Instrumenting: cache/192.168.1.10/d4beb452a01d8699afa94c22f8f72618/index.html from http://192.168.1.10:4100/
node /home/justin/jalangi2/src/js/commands/esnstrument_cli.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis /src/js/sample_analyses/pldi16/BranchCoverage.js cache/192.168.1.10/d4beb452a01d8699afa94c22f8f72618/index.html --out cache/192.168.1.10/d4beb452a01d8699afa94c22f8f72618/index_jalangi_.html --outDir cache/192.168.1.10/d4beb452a01d8699afa94c22f8f72618
b'Failure during HTML instrumentation: ENOENT: no such file or directory, open \'/src/js/sample_analyses/pldi16/BranchCoverage.js\' (Error).\nSource: <!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="shortcut icon" href="/favicon.ico">\n    <link rel="stylesheet" href="//demo.productionready.io/main.css">\n    <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">\n    <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic&display=swap" rel="stylesheet" type="text/css">\n    <!--\n      Notice the use of  in the tag above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favico.ico", "/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n    <title>Conduit</title>\n  <script defer src="/static/js/bundle.js"></script></head>\n  <body>\n    <div id="root"></div>\n    <!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start`.\n      To create a production bundle, use `npm run build`.\n    -->\n  </body>\n</html>\n\n/home/justin/jalangi2/src/js/commands/esnstrument_cli.js:252\n                throw e;\n                ^\n\nError: ENOENT: no such file or directory, open \'/src/js/sample_analyses/pldi16/BranchCoverage.js\'\n    at Object.openSync (node:fs:585:3)\n    at Object.readFileSync (node:fs:453:35)\n    at /home/justin/jalangi2/src/js/instrument/instUtil.js:73:38\n    at Array.forEach (<anonymous>)\n    at Object.getInlinedScripts (/home/justin/jalangi2/src/js/instrument/instUtil.js:70:26)\n    at Object.onNodeVisited (/home/justin/jalangi2/src/js/commands/esnstrument_cli.js:222:46)\n    at walkDOM (/home/justin/jalangi2/node_modules/rewriting-proxy/rewriting-proxy.js:139:17)\n    at walkDOM (/home/justin/jalangi2/node_modules/rewriting-proxy/rewriting-proxy.js:78:13)\n    at walkDOM (/home/justin/jalangi2/node_modules/rewriting-proxy/rewriting-proxy.js:78:13)\n    at Object.rewriteHTML (/home/justin/jalangi2/node_modules/rewriting-proxy/rewriting-proxy.js:160:5) {\n  errno: -2,\n  syscall: \'open\',\n  code: \'ENOENT\',\n  path: \'/src/js/sample_analyses/pldi16/BranchCoverage.js\'\n}\n'
Exception in processFile() @ proxy.py
Traceback (most recent call last):
  File "scripts/proxy.py", line 73, in processFile
    with open (instrumentedFileName, 'r') as file:
FileNotFoundError: [Errno 2] No such file or directory: 'cache/192.168.1.10/d4beb452a01d8699afa94c22f8f72618/index_jalangi_.html'

Instrumenting: cache/192.168.1.10/0a467b752692bd3110db2288f06894d1/bundle.js from http://192.168.1.10:4100/static/js/bundle.js
node /home/justin/jalangi2/src/js/commands/esnstrument_cli.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis /src/js/sample_analyses/pldi16/BranchCoverage.js cache/192.168.1.10/0a467b752692bd3110db2288f06894d1/bundle.js --out cache/192.168.1.10/0a467b752692bd3110db2288f06894d1/bundle_jalangi_.js --outDir cache/192.168.1.10/0a467b752692bd3110db2288f06894d1
b''

```
After instrumentation, the webpage will fail to load again, even if we restart the server with ``yarn start`` or ``serve -s build``. We fix this by clearing the browser's cache after each instrumentation.