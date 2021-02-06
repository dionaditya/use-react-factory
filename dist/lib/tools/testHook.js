"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testHook = void 0;
var React = require("react");
var enzyme_1 = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");
var enzyme_2 = require("enzyme");
enzyme_2.configure({ adapter: new Adapter() });
var TestHook = function (_a) {
    var callback = _a.callback;
    callback();
    return null;
};
exports.testHook = function (callback) {
    enzyme_1.mount(React.createElement(TestHook, { callback: callback }));
};
//# sourceMappingURL=testHook.js.map