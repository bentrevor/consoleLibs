This Chrome extension makes [jQuery](http://jquery.com/) and [underscore.js](http://underscorejs.org/) available in the
javascript console.  This may screw up the javascript on some pages because it will overwrite `$()` to `jQuery()`.

###To Install

1. clone the repo: `git clone git@github.com:bentrevor/consoleLibs.git`

2. go to chrome's extensions page at `chrome://extensions`

3. make sure "Developer Mode" is checked

4. click "Load unpacked extension..." and point it to the cloned repo
