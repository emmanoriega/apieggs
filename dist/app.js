"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _eggsRoutes = _interopRequireDefault(require("./routes/eggs-routes"));

var app = (0, _express["default"])();
app.set('port', process.env.PORT || 4000);
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json({
    message: 'Welcome to my application'
  });
});
app.use('/api/eggs', _eggsRoutes["default"]);
var _default = app;
exports["default"] = _default;