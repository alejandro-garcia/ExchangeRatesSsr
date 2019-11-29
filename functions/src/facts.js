'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFacts;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFacts() {
  return (0, _isomorphicFetch2.default)('https://exchageratesmgr.firebaseio.com/warehouses.json').then(function (res) {
    return res.json();
  }).then(function (facts) {
    var warehouses = Object.keys(facts).map(function (f) {
      return Object.assign({}, { warehouse: f }, facts[f], { flag: facts[f].status === "success" });
    });
    return warehouses;
  });
}