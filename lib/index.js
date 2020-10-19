class ObjeniousPlugin {
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-console */

  constructor() {
    this.context = null;
    this.config = {};
    this.hooks = {};
    this.pipes = {};
    this.controllers = {};
    this.routes = [];
  }

  init(customConfig, context) {
    this.config = Object.assign(this.config, customConfig);
    this.context = context;
  }
}

module.exports = ObjeniousPlugin;
