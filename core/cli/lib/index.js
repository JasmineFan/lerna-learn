'use strict';

module.exports = core;

const pkg = require('../package.json')
const file = require('../file.txt')
file()

function core() {
  checkPkgVersion()
}
function checkPkgVersion(){
  console.log(pkg.version)
}
