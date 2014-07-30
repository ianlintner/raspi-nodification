/**
 * Created by ianlintner on 7/30/14.
 */
var yaml = require("js-yaml");
var fs = require('fs');
var config = yaml.safeLoad(fs.readFileSync("./config/app.yml", 'utf8'));

setInterval(function () {
  i++;

}, 2000);


