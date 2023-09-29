This repository contains a fresh Gatsby.js project with reproduction of a bug that I spotted using the Head API.

On top of the newly created Gatbsy project, I've just added a simple `wrapRootElement` which logs a message on every render.

## What is the bug

If you run this project on your machine (`npm start`) you will see that the message "RENDER" appears twice in the console. Which means that `wrapRootElement` renders twice.
In case of using some provider component, that also means it will be initiated two times.

BUT if you remove the export of Head component from the page (comment the last line in the `./src/pages/index.js`), you will notice that this issue has gone and the log message only gets printed once, which is a correct behaviour.

It seems like the usage of Head API in a page cause the double rendering of the `wrapRootElement`
