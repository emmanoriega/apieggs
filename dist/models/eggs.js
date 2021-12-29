"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var eggsSchema = new _mongoose.Schema({
  wallet: {
    type: String,
    required: true,
    trim: true
  },
  idegg: {
    type: String,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});

var _default = (0, _mongoose.model)('Eggs', eggsSchema);

exports["default"] = _default;