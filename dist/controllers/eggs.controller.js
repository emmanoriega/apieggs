"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findOneEgg = exports.createEgg = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _eggs = _interopRequireDefault(require("../models/eggs"));

var createEgg = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var newEggs, eggSave;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newEggs = new _eggs["default"]({
              wallet: req.body.wallet,
              idegg: req.body.idegg
            });
            _context.next = 3;
            return newEggs.save();

          case 3:
            eggSave = _context.sent;
            res.json('New Eggs Created ' + eggSave);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createEgg(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createEgg = createEgg;

var findOneEgg = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var egg;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _eggs["default"].find({
              wallet: req.params.id
            });

          case 2:
            egg = _context2.sent;
            res.json(egg);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function findOneEgg(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.findOneEgg = findOneEgg;