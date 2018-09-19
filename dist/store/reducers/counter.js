'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _counter = require('./../types/counter.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _counter.INCREMENT, function (state) {
    return _extends({}, state, {
        num: state.num + 1
    });
}), _defineProperty(_handleActions, _counter.DECREMENT, function (state) {
    return _extends({}, state, {
        num: state.num - 1
    });
}), _defineProperty(_handleActions, _counter.ASYNC_INCREMENT, function (state, action) {
    return _extends({}, state, {
        asyncNum: state.asyncNum + action.payload
    });
}), _handleActions), {
    num: 0,
    asyncNum: 0
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiSU5DUkVNRU5UIiwic3RhdGUiLCJudW0iLCJERUNSRU1FTlQiLCJBU1lOQ19JTkNSRU1FTlQiLCJhY3Rpb24iLCJhc3luY051bSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztrQkFFZSx1RkFDVkEsa0JBRFUsWUFDQ0MsS0FERCxFQUNRO0FBQ2Ysd0JBQ09BLEtBRFA7QUFFSUMsYUFBS0QsTUFBTUMsR0FBTixHQUFZO0FBRnJCO0FBSUgsQ0FOVSxtQ0FPVkMsa0JBUFUsWUFPQ0YsS0FQRCxFQU9RO0FBQ2Ysd0JBQ09BLEtBRFA7QUFFSUMsYUFBS0QsTUFBTUMsR0FBTixHQUFZO0FBRnJCO0FBSUgsQ0FaVSxtQ0FhVkUsd0JBYlUsWUFhT0gsS0FiUCxFQWFjSSxNQWJkLEVBYXNCO0FBQzdCLHdCQUNPSixLQURQO0FBRUlLLGtCQUFVTCxNQUFNSyxRQUFOLEdBQWlCRCxPQUFPRTtBQUZ0QztBQUlILENBbEJVLG9CQW1CWjtBQUNDTCxTQUFLLENBRE47QUFFQ0ksY0FBVTtBQUZYLENBbkJZLEMiLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCB7IElOQ1JFTUVOVCwgREVDUkVNRU5ULCBBU1lOQ19JTkNSRU1FTlQgfSBmcm9tICcuLi90eXBlcy9jb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG4gICAgW0lOQ1JFTUVOVF0oc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgbnVtOiBzdGF0ZS5udW0gKyAxLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgW0RFQ1JFTUVOVF0oc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgbnVtOiBzdGF0ZS5udW0gLSAxLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgW0FTWU5DX0lOQ1JFTUVOVF0oc3RhdGUsIGFjdGlvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhc3luY051bTogc3RhdGUuYXN5bmNOdW0gKyBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICB9LFxufSwge1xuICAgIG51bTogMCxcbiAgICBhc3luY051bTogMCxcbn0pO1xuIl19