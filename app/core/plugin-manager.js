/**
 * Constructor
 * @param config
 * @constructor
 */
function PluginManager(config) {
  this.config = config;
}

/**
 * Load Plugins
 */
PluginManager.prototype.loadPlugins = function() {
  for (var i in this.config) {


  }
};

/**
 * Exports module
 * @type {PluginManager}
 */
module.exports = PluginManager;