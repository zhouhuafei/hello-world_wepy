'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _counter = require('./../store/types/counter.js');

var _actions = require('./../store/actions/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = (_dec = (0, _wepyRedux.connect)({
    stateNum: function stateNum(state) {
        return state.counter.num;
    },
    asyncNum: function asyncNum(state) {
        return state.counter.asyncNum;
    }
}, {
    incNum: _counter.INCREMENT,
    decNum: _counter.DECREMENT,
    asyncInc: _actions.asyncInc
}), _dec(_class = function (_wepy$component) {
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
}(_wepy2.default.component)) || _class);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsInN0YXRlTnVtIiwic3RhdGUiLCJjb3VudGVyIiwibnVtIiwiYXN5bmNOdW0iLCJpbmNOdW0iLCJJTkNSRU1FTlQiLCJkZWNOdW0iLCJERUNSRU1FTlQiLCJhc3luY0luYyIsIndlcHkiLCJjb21wb25lbnQiLCJwcm9wcyIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJjb2VyY2UiLCJ2IiwiZGVmYXVsdCIsImRhdGEiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIiwid2F0Y2giLCJjdXJWYWwiLCJvbGRWYWwiLCJtZXRob2RzIiwicGx1cyIsIiRlbWl0IiwibWludXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFlcUJBLE8sV0FicEIsd0JBQVE7QUFDTEMsWUFESyxvQkFDSUMsS0FESixFQUNXO0FBQ1osZUFBT0EsTUFBTUMsT0FBTixDQUFjQyxHQUFyQjtBQUNILEtBSEk7QUFJTEMsWUFKSyxvQkFJSUgsS0FKSixFQUlXO0FBQ1osZUFBT0EsTUFBTUMsT0FBTixDQUFjRSxRQUFyQjtBQUNIO0FBTkksQ0FBUixFQU9FO0FBQ0NDLFlBQVFDLGtCQURUO0FBRUNDLFlBQVFDLGtCQUZUO0FBR0NDO0FBSEQsQ0FQRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFhb0NDLGVBQUtDLFM7Ozs7O1NBQ3RDQyxLLEdBQVE7QUFDSlQsYUFBSztBQUNEVSxrQkFBTSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsQ0FETDtBQUVEQyxvQkFBUSxnQkFBU0MsQ0FBVCxFQUFZO0FBQ2hCLHVCQUFPLENBQUNBLENBQVI7QUFDSCxhQUpBO0FBS0RDLHFCQUFTO0FBTFI7QUFERCxLO1NBVVJDLEksR0FBTyxFO1NBQ1BDLE0sR0FBUztBQUNMLDJCQUFtQiwwQkFBYTtBQUFBOztBQUM1QixnQkFBTUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFOO0FBQ0FDLG9CQUFRQyxHQUFSLENBQWUsT0FBS0MsS0FBcEIsaUJBQXFDSixPQUFPSyxJQUE1QyxjQUF5REwsT0FBT00sTUFBUCxDQUFjRixLQUF2RTtBQUNIO0FBSkksSztTQU9URyxLLEdBQVE7QUFDSnpCLFdBREksZUFDQTBCLE1BREEsRUFDUUMsTUFEUixFQUNnQjtBQUNoQlAsb0JBQVFDLEdBQVIsd0JBQWtCTSxNQUFsQixnQ0FBK0JELE1BQS9CO0FBQ0g7QUFIRyxLO1NBTVJFLE8sR0FBVTtBQUNOQyxZQURNLGtCQUNDO0FBQ0gsaUJBQUs3QixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FvQixvQkFBUUMsR0FBUixDQUFZLEtBQUtDLEtBQUwsR0FBYSxXQUF6Qjs7QUFFQSxpQkFBS1EsS0FBTCxDQUFXLFlBQVgsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDSCxTQU5LO0FBT05DLGFBUE0sbUJBT0U7QUFDSixpQkFBSy9CLEdBQUwsR0FBVyxLQUFLQSxHQUFMLEdBQVcsQ0FBdEI7QUFDQW9CLG9CQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLFlBQXpCO0FBQ0g7QUFWSyxLOzs7a0JBekJPMUIsTyIsImZpbGUiOiJjb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnO1xuICAgIGltcG9ydCB7IElOQ1JFTUVOVCwgREVDUkVNRU5UIH0gZnJvbSAnLi4vc3RvcmUvdHlwZXMvY291bnRlcic7XG4gICAgaW1wb3J0IHsgYXN5bmNJbmMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJztcblxuICAgIEBjb25uZWN0KHtcbiAgICAgICAgc3RhdGVOdW0oc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmNOdW0oc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtO1xuICAgICAgICB9LFxuICAgIH0sIHtcbiAgICAgICAgaW5jTnVtOiBJTkNSRU1FTlQsXG4gICAgICAgIGRlY051bTogREVDUkVNRU5ULFxuICAgICAgICBhc3luY0luYyxcbiAgICB9KVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBudW06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICAgICAgICAgIGNvZXJjZTogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gK3Y7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiA1MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YSA9IHt9O1xuICAgICAgICBldmVudHMgPSB7XG4gICAgICAgICAgICAnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICBudW0oY3VyVmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg5pen5YC877yaJHtvbGRWYWx977yM5paw5YC877yaJHtjdXJWYWx9YCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBwbHVzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubnVtID0gdGhpcy5udW0gKyAxO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHBsdXMgdGFwJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbmRleC1lbWl0JywgMSwgMiwgMyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWludXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgbWludXMgdGFwJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiJdfQ==