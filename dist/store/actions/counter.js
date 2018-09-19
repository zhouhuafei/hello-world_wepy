'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.asyncInc = undefined;

var _counter = require('./../types/counter.js');

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var asyncInc = exports.asyncInc = (0, _reduxActions.createAction)(_counter.ASYNC_INCREMENT, function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(1);
        }, 1000);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiYXN5bmNJbmMiLCJBU1lOQ19JTkNSRU1FTlQiLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFTyxJQUFNQSw4QkFBVyxnQ0FBYUMsd0JBQWIsRUFBOEIsWUFBTTtBQUN4RCxXQUFPLElBQUlDLE9BQUosQ0FBWSxtQkFBVztBQUMxQkMsbUJBQVcsWUFBTTtBQUNiQyxvQkFBUSxDQUFSO0FBQ0gsU0FGRCxFQUVHLElBRkg7QUFHSCxLQUpNLENBQVA7QUFLSCxDQU51QixDQUFqQiIsImZpbGUiOiJjb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVNZTkNfSU5DUkVNRU5UIH0gZnJvbSAnLi4vdHlwZXMvY291bnRlcic7XG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IGFzeW5jSW5jID0gY3JlYXRlQWN0aW9uKEFTWU5DX0lOQ1JFTUVOVCwgKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKDEpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbn0pO1xuIl19