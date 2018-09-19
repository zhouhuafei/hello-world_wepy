'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('moduleA ignored: ', _moduleA2.default); // => moduleA ignored: {}

var Index = (_dec = (0, _wepyRedux.connect)({
    num: function num(state) {
        return state.counter.num;
    },
    asyncNum: function asyncNum(state) {
        return state.counter.asyncNum;
    },
    sumNum: function sumNum(state) {
        return state.counter.num + state.counter.asyncNum;
    }
}), _dec(_class = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var self = this;
            this.$parent.getUserInfo(function (userInfo) {
                if (userInfo) {
                    self.userInfo = userInfo;
                }
                self.normalTitle = '标题已被修改';

                self.setTimeoutTitle = '标题三秒后会被修改';
                setTimeout(function () {
                    self.setTimeoutTitle = '到三秒了';
                    self.$apply();
                }, 3000);

                self.$apply();
            });
        }
    }]);

    return Index;
}(_wepy2.default.page)) || _class);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.config = {
        navigationBarTitleText: '首页'
    };
    this.$repeat = {};
    this.$props = { "counter1": { "xmlns:v-on": "" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" }, "group": { "v-bind:grouplist.once": "item", "v-bind:indexa.once": "index" } };
    this.$events = { "counter1": { "v-on:index-emit": "counterEmit" } };
    this.components = {
        panel: _panel2.default,
        counter1: _counter2.default,
        counter2: _counter2.default,
        list: _list2.default,
        group: _group2.default,
        toast: _wepyComToast2.default
    };
    this.mixins = [_test2.default];
    this.data = {
        mynum: 20,
        userInfo: {
            nickName: '加载中...'
        },
        normalTitle: '原始标题',
        setTimeoutTitle: '标题三秒后会被修改',
        count: 0,
        netrst: '',
        groupList: [{
            id: 1,
            name: '点击改变',
            list: [{
                childid: '1.1',
                childname: '子项，点我改变'
            }, {
                childid: '1.2',
                childname: '子项，点我改变'
            }, {
                childid: '1.3',
                childname: '子项，点我改变'
            }]
        }, {
            id: 2,
            name: '点击改变',
            list: [{
                childid: '2.1',
                childname: '子项，点我改变'
            }, {
                childid: '2.2',
                childname: '子项，点我改变'
            }, {
                childid: '2.3',
                childname: '子项，点我改变'
            }]
        }, {
            id: 3,
            name: '点击改变',
            list: [{
                childid: '3.1',
                childname: '子项，点我改变'
            }]
        }]
    };
    this.computed = {
        now: function now() {
            return +new Date();
        }
    };
    this.methods = {
        plus: function plus() {
            this.mynum++;
        },
        toast: function toast() {
            var promise = this.$invoke('toast', 'show', {
                title: '自定义标题',
                img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
            });

            promise.then(function (d) {
                console.log('toast done');
            });
        },
        tap: function tap() {
            console.log('do noting from ' + this.$name);
        },
        communicate: function communicate() {
            console.log(this.$name + ' tap');

            this.$invoke('counter2', 'minus', 45, 6);
            this.$invoke('counter1', 'plus', 45, 6);

            this.$broadcast('index-broadcast', 1, 3, 4);
        },
        request: function request() {
            var self = this;
            var i = 10;
            var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
            while (i--) {
                _wepy2.default.request({
                    url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
                    success: function success(d) {
                        self.netrst += d.data + '.';
                        self.$apply();
                    }
                });
            }
        },
        counterEmit: function counterEmit() {
            var _ref2;

            var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
            console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
        }
    };
    this.events = {
        'index-emit': function indexEmit() {
            var _ref3;

            var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
            console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
        }
    };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVBIiwiSW5kZXgiLCJudW0iLCJzdGF0ZSIsImNvdW50ZXIiLCJhc3luY051bSIsInN1bU51bSIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsIm5vcm1hbFRpdGxlIiwic2V0VGltZW91dFRpdGxlIiwic2V0VGltZW91dCIsIiRhcHBseSIsIndlcHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiUGFuZWwiLCJjb3VudGVyMSIsIkNvdW50ZXIiLCJjb3VudGVyMiIsImxpc3QiLCJMaXN0IiwiZ3JvdXAiLCJHcm91cCIsInRvYXN0IiwiVG9hc3QiLCJtaXhpbnMiLCJ0ZXN0TWl4aW4iLCJkYXRhIiwibXludW0iLCJuaWNrTmFtZSIsImNvdW50IiwibmV0cnN0IiwiZ3JvdXBMaXN0IiwiaWQiLCJuYW1lIiwiY2hpbGRpZCIsImNoaWxkbmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJwbHVzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJ0aXRsZSIsImltZyIsInRoZW4iLCJkIiwidGFwIiwiJG5hbWUiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJyZXF1ZXN0IiwiaSIsIm1hcCIsInVybCIsInN1Y2Nlc3MiLCJjb3VudGVyRW1pdCIsIiRldmVudCIsImxlbmd0aCIsInNvdXJjZSIsImV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUc0QztBQUNUO0FBQ1E7QUFDUDs7O0FBTGhDOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBQSxRQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNDLGlCQUFqQyxFLENBQTJD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UyxpQkFBU1QsQ0FBVCxFQUFZO0FBQ2pCakQsNkJBQUtpQyxNQUFMLElBQWVnQixFQUFFcEIsSUFBRixHQUFTLEdBQXhCO0FBQ0E3Qiw2QkFBS08sTUFBTDtBQUNIO0FBTFEsaUJBQWI7QUFPSDtBQUNKLFNBdENLO0FBdUNOb0QsbUJBdkNNLHlCQXVDZTtBQUFBOztBQUNqQixnQkFBTUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFOO0FBQ0F0RSxvQkFBUUMsR0FBUixDQUFlLEtBQUsyRCxLQUFwQixpQkFBcUNTLE9BQU94QixJQUE1QyxjQUF5RHdCLE9BQU9FLE1BQVAsQ0FBY1gsS0FBdkU7QUFDSDtBQTFDSyxLO1NBNkNWWSxNLEdBQVM7QUFDTCxzQkFBYyxxQkFBYTtBQUFBOztBQUN2QixnQkFBTUgsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFOO0FBQ0F0RSxvQkFBUUMsR0FBUixDQUFlLE9BQUsyRCxLQUFwQixpQkFBcUNTLE9BQU94QixJQUE1QyxjQUF5RHdCLE9BQU9FLE1BQVAsQ0FBY1gsS0FBdkU7QUFDSDtBQUpJLEs7OztrQkE1SFF6RCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnO1xuICAgIGltcG9ydCBQYW5lbCBmcm9tICdAL2NvbXBvbmVudHMvcGFuZWwnOyAvLyBhbGlhcyBleGFtcGxlXG4gICAgaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcic7IC8vIGFsaWFzIGV4YW1wbGVcbiAgICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnOyAvLyBhbGlhc0ZpZWxkcyBleGFtcGxlXG4gICAgaW1wb3J0IG1vZHVsZUEgZnJvbSAnbW9kdWxlLWEnOyAvLyBhbGlhc0ZpZWxkcyBpZ25vcmUgbW9kdWxlIGV4YW1wbGVcbiAgICBpbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCc7XG4gICAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0JztcbiAgICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0JztcblxuICAgIGNvbnNvbGUubG9nKCdtb2R1bGVBIGlnbm9yZWQ6ICcsIG1vZHVsZUEpOyAvLyA9PiBtb2R1bGVBIGlnbm9yZWQ6IHt9XG5cbiAgICBAY29ubmVjdCh7XG4gICAgICAgIG51bShzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtO1xuICAgICAgICB9LFxuICAgICAgICBhc3luY051bShzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIuYXN5bmNOdW07XG4gICAgICAgIH0sXG4gICAgICAgIHN1bU51bShzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtICsgc3RhdGUuY291bnRlci5hc3luY051bTtcbiAgICAgICAgfSxcbiAgICB9KVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aaW6aG1JyxcbiAgICAgICAgfTtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImNvdW50ZXIxXCI6e1wieG1sbnM6di1vblwiOlwiXCJ9LFwiY291bnRlcjJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm51bS5zeW5jXCI6XCJteW51bVwifSxcImdyb3VwXCI6e1widi1iaW5kOmdyb3VwbGlzdC5vbmNlXCI6XCJpdGVtXCIsXCJ2LWJpbmQ6aW5kZXhhLm9uY2VcIjpcImluZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHtcImNvdW50ZXIxXCI6e1widi1vbjppbmRleC1lbWl0XCI6XCJjb3VudGVyRW1pdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgcGFuZWw6IFBhbmVsLFxuICAgICAgICAgICAgY291bnRlcjE6IENvdW50ZXIsXG4gICAgICAgICAgICBjb3VudGVyMjogQ291bnRlcixcbiAgICAgICAgICAgIGxpc3Q6IExpc3QsXG4gICAgICAgICAgICBncm91cDogR3JvdXAsXG4gICAgICAgICAgICB0b2FzdDogVG9hc3QsXG4gICAgICAgIH07XG5cbiAgICAgICAgbWl4aW5zID0gW3Rlc3RNaXhpbl07XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIG15bnVtOiAyMCxcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vcm1hbFRpdGxlOiAn5Y6f5aeL5qCH6aKYJyxcbiAgICAgICAgICAgIHNldFRpbWVvdXRUaXRsZTogJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuScsXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIG5ldHJzdDogJycsXG4gICAgICAgICAgICBncm91cExpc3Q6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRpZDogJzEuMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMy4xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIG5vdygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gK25ldyBEYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBwbHVzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubXludW0rKztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2FzdCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93Jywge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXG4gICAgICAgICAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZycsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvYXN0IGRvbmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YXAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvIG5vdGluZyBmcm9tICcgKyB0aGlzLiRuYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21tdW5pY2F0ZSgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjInLCAnbWludXMnLCA0NSwgNik7XG4gICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXF1ZXN0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBpID0gMTA7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwID0gWydNQT09JywgJ01Rbz0nLCAnTWc9PScsICdNdz09JywgJ05BPT0nLCAnTlE9PScsICdOZz09JywgJ053PT0nLCAnT0E9PScsICdPUT09J107XG4gICAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cubWFkY29kZXIuY24vdGVzdHMvc2xlZXAucGhwP3RpbWU9MSZ0PWNzcyZjPScgKyBtYXBbaV0gKyAnJmk9JyArIGksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5uZXRyc3QgKz0gZC5kYXRhICsgJy4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY291bnRlckVtaXQoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBldmVudHMgPSB7XG4gICAgICAgICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uKHVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5ub3JtYWxUaXRsZSA9ICfmoIfpopjlt7Looqvkv67mlLknO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5JztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJztcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==