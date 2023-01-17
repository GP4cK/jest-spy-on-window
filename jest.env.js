const JSDOMEnvironment = require("jest-environment-jsdom");
const vm = require("vm");
const fs = require("fs");

class MyEnv extends JSDOMEnvironment.default {
  constructor(config, context) {
    super(config, context);
    this.loadContext();
  }

  loadContext() {
    const js = fs.readFileSync("./src/index.js", "utf8");
    const context = vm.createContext();
    context.document = this.global.document;
    context.window = this.global.window;
    vm.runInContext(js, context, {
      filename: "./src/index.js",
      displayErrors: true,
    });
    Object.assign(this.global, context);
  }
}

module.exports = MyEnv;
