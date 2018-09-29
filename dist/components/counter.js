'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_wepy$component) {
    _inherits(Counter, _wepy$component);

    function Counter() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Counter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Counter;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.props = {
        num: {
            type: [Number, String],
            coerce: function coerce(v) {
                return +v;
            },
            default: 50
        }
    };
    this.data = {};
    this.events = {
        'index-broadcast': function indexBroadcast() {
            var _ref2;

            var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
            console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
        }
    };
    this.watch = {
        num: function num(curVal, oldVal) {
            console.log('\u65E7\u503C\uFF1A' + oldVal + '\uFF0C\u65B0\u503C\uFF1A' + curVal);
        }
    };
    this.methods = {
        plus: function plus() {
            this.num = this.num + 1;
            console.log(this.$name + ' plus tap');

            this.$emit('index-emit', 1, 2, 3);
        },
        minus: function minus() {
            this.num = this.num - 1;
            console.log(this.$name + ' minus tap');
        }
    };
};

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsIndlcHkiLCJjb21wb25lbnQiLCJwcm9wcyIsIm51bSIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJjb2VyY2UiLCJ2IiwiZGVmYXVsdCIsImRhdGEiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIiwid2F0Y2giLCJjdXJWYWwiLCJvbGRWYWwiLCJtZXRob2RzIiwicGx1cyIsIiRlbWl0IiwibWludXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBZ0JDLGVBQUtDLFM7Ozs7O1NBQ3RDQyxLLEdBQVE7QUFDSkMsYUFBSztBQUNEQyxrQkFBTSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsQ0FETDtBQUVEQyxvQkFBUSxnQkFBU0MsQ0FBVCxFQUFZO0FBQ2hCLHVCQUFPLENBQUNBLENBQVI7QUFDSCxhQUpBO0FBS0RDLHFCQUFTO0FBTFI7QUFERCxLO1NBVVJDLEksR0FBTyxFO1NBQ1BDLE0sR0FBUztBQUNMLDJCQUFtQiwwQkFBYTtBQUFBOztBQUM1QixnQkFBTUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFOO0FBQ0FDLG9CQUFRQyxHQUFSLENBQWUsT0FBS0MsS0FBcEIsaUJBQXFDSixPQUFPSyxJQUE1QyxjQUF5REwsT0FBT00sTUFBUCxDQUFjRixLQUF2RTtBQUNIO0FBSkksSztTQU9URyxLLEdBQVE7QUFDSmhCLFdBREksZUFDQWlCLE1BREEsRUFDUUMsTUFEUixFQUNnQjtBQUNoQlAsb0JBQVFDLEdBQVIsd0JBQWtCTSxNQUFsQixnQ0FBK0JELE1BQS9CO0FBQ0g7QUFIRyxLO1NBTVJFLE8sR0FBVTtBQUNOQyxZQURNLGtCQUNDO0FBQ0gsaUJBQUtwQixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FXLG9CQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLFdBQXpCOztBQUVBLGlCQUFLUSxLQUFMLENBQVcsWUFBWCxFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNILFNBTks7QUFPTkMsYUFQTSxtQkFPRTtBQUNKLGlCQUFLdEIsR0FBTCxHQUFXLEtBQUtBLEdBQUwsR0FBVyxDQUF0QjtBQUNBVyxvQkFBUUMsR0FBUixDQUFZLEtBQUtDLEtBQUwsR0FBYSxZQUF6QjtBQUNIO0FBVkssSzs7O2tCQXpCT2pCLE8iLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBudW06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICAgICAgICAgIGNvZXJjZTogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gK3Y7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiA1MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YSA9IHt9O1xuICAgICAgICBldmVudHMgPSB7XG4gICAgICAgICAgICAnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICBudW0oY3VyVmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg5pen5YC877yaJHtvbGRWYWx977yM5paw5YC877yaJHtjdXJWYWx9YCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBwbHVzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubnVtID0gdGhpcy5udW0gKyAxO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHBsdXMgdGFwJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbmRleC1lbWl0JywgMSwgMiwgMyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWludXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgbWludXMgdGFwJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiJdfQ==