const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./Tests/00_post_json_test.js",
  //tests: "./Tests/*_test.js",
  output: "./output",
  helpers: {
    REST: {
      endpoint: "https://petstore.swagger.io/v2",
      onRequest: (request) => {
        request.headers.accept = "application/json";
      },
    },
    ChaiWrapper: {
      require: "codeceptjs-chai",
    },
    FileSystem: {},
  },
  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "codecept-js-api",
  translation: "pt-BR",
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
