
NNN Demo
=========

Run the App
-------------------
First install the dependencies.

`npm install`

And install and run the `serve` package so you can build the app.

```
npm install -g serve
serve src/
```

Navigate to `http://localhost:3000` and view the gloriousness that is NNN

Testing
-----------
Using [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) for running tests.
You can start a [TDD](http://en.wikipedia.org/wiki/Test-driven_development) workflow with `gulp tdd`.

> Note: you must have `Gulp CLI` installed in order to run the tests with `gulp`. If you do not have it installed globally, run `npm install -g gulp-cli` or use the method below.

If you prefer to use the local installation of gulp managed by npm, you can start the TDD workflow with

`node ./node_modules/gulp/bin/gulp.js tdd`

For continuous integration, you can execute tests with `gulp test` or `npm test`.
