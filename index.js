const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;


var Bugsnag = require('@bugsnag/js')
var BugsnagPluginExpress = require('@bugsnag/plugin-express')

Bugsnag.start({
  apiKey: '902267175ef3a2970ee14dde77224f48',
  plugins: [BugsnagPluginExpress]
})


var middleware = Bugsnag.getPlugin('express')

// This must be the first piece of middleware in the stack.
// It can only capture errors in downstream middleware
app.use(middleware.requestHandler)



// Example route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Node.js with Bugsnag!" });
});

// Example error route
app.get("/crash", (req, res, next) => {
  next(new Error("Simulated crash 🚨"));
});


/* all other middleware and application routes go here */

// This handles any errors that Express catches
app.use(middleware.errorHandler)

app.listen(8080, () => {
  console.log("Server running on port 8080");
});