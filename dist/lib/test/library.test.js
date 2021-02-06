"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_utils_1 = require("react-dom/test-utils");
var useReactFactory_1 = require("../src/useReactFactory");
var testHook_1 = require("../tools/testHook");
var rxjs_1 = require("rxjs");
var stream = new rxjs_1.BehaviorSubject(0);
var reactFactory;
beforeEach(function () {
    testHook_1.testHook(function () {
        reactFactory = useReactFactory_1.useReactFactory(stream, 0);
    });
});
describe('useReactfactory', function () {
    test('should have correct state after change', function () {
        test_utils_1.act(function () {
            stream.next(1);
        });
        expect(reactFactory === null || reactFactory === void 0 ? void 0 : reactFactory.state).toBe(1);
    });
});
//# sourceMappingURL=library.test.js.map