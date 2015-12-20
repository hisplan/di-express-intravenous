# Node.js + Express.js + Dependency Injection + Logging + Config + Unit Test

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

## To-Do

- packaging using gulp
