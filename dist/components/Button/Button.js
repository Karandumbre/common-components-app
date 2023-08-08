"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function Button(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick
  }, "click me");
}
var _default = Button;
exports["default"] = _default;