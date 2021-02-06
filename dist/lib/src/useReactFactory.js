"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReactFactory = exports.sink = exports.ConnectionState = exports.StreamBuilder = exports.createStore = void 0;
var rxjs_1 = require("rxjs");
var react_stream_builder_1 = require("react-stream-builder");
var use_observable_1 = require("use-observable");
exports.createStore = function (initValue) {
    var stream = new rxjs_1.BehaviorSubject(initValue);
    return {
        stream: stream,
        initValue: initValue
    };
};
exports.StreamBuilder = react_stream_builder_1.StreamBuilder;
exports.ConnectionState = react_stream_builder_1.ConnectionState;
exports.sink = function (stream) {
    return {
        add: function (value) { return stream.next(value); }
    };
};
var useReactFactory = function (stream, initValue) {
    var state = use_observable_1.default(stream, initValue);
    return {
        state: state,
    };
};
exports.useReactFactory = useReactFactory;
//# sourceMappingURL=useReactFactory.js.map