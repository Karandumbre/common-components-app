"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function Image(_ref) {
  var imgSrc = _ref.imgSrc,
    altName = _ref.altName;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
    src: imgSrc,
    alt: altName
  }));
}
var _default = Image;
exports["default"] = _default;