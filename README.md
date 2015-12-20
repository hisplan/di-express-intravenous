# Node.js + Express.js + Dependency Injection + Logging + Config + Unit Test

Could be used as a scaffolding for Express.js application.
- Node.js
- Express.js
- [Intravenous](http://www.royjacobs.org/intravenous/) as a dependency injection library
- [log4js-node](https://github.com/nomiddlename/log4js-node/blob/master/examples/example.js) as a logging library
- [nconf](https://github.com/indexzero/nconf) as a configuration library
- Unit testing
    - Mocha as a test runner
    - Chai as an assertion library
    - Sinon as a spy/stub/mock library

## Installation
```bash
npm install
ln -s conf_DEV conf
```

## Run
```bash
npm src\app.js
```

## Test
```bash
mocha
```

## To-Do & Fix-Me

- Currently, `logProvider` and `logger` have to be passed to `server.start()`. Get rid of `logProvider` if possible.
- Most of the code in `app.js` has to be duplicated in `unit-test.js`
- Use Promises instead of callback in the router and controller.
- Multiple controllers.
- Packaging using `gulp`.
