Liferay.Loader.define('__FRAGMENT_MODULE_NAME__', [
    'module',
    'require',
    'frontend-js-react-web$react'
], function (__MODULE__, __REQUIRE__) {
    (function (modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function (exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.r = function (exports) {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            }
            Object.defineProperty(exports, '__esModule', { value: true });
        };
        __webpack_require__.t = function (value, mode) {
            if (mode & 1)
                value = __webpack_require__(value);
            if (mode & 8)
                return value;
            if (mode & 4 && typeof value === 'object' && value && value.__esModule)
                return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            if (mode & 2 && typeof value != 'string')
                for (var key in value)
                    __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                    }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function (module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module['default'];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, 'a', getter);
            return getter;
        };
        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = '';
        return __webpack_require__(__webpack_require__.s = './build/liferay-npm-bundler-workdir/generated/to-do.js');
    }({
        './build/liferay-npm-bundler-workdir/generated/to-do.js': function (module, exports, __webpack_require__) {
            __MODULE__.exports = __webpack_require__('./src/sample-collection/to-do/main.js');
        },
        './src/sample-collection/to-do/main.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            var _src_TodoApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/sample-collection/to-do/src/TodoApp.js');
            var React_raw = __REQUIRE__('frontend-js-react-web$react');
            var React = React_raw && React_raw.__esModule ? React_raw['default'] : React_raw;
            __webpack_exports__['default'] = function () {
                return React.createElement(_src_TodoApp__WEBPACK_IMPORTED_MODULE_0__['TodoApp'], null);
            };
        },
        './src/sample-collection/to-do/src/TodoApp.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, 'TodoApp', function () {
                return TodoApp;
            });
            var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/sample-collection/to-do/src/TodoList.js');
            var React_raw = __REQUIRE__('frontend-js-react-web$react');
            var React = React_raw && React_raw.__esModule ? React_raw['default'] : React_raw;
            function _typeof(obj) {
                '@babel/helpers - typeof';
                if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
                    _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                } else {
                    _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
                    };
                }
                return _typeof(obj);
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }
            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    _defineProperties(Constructor, staticProps);
                return Constructor;
            }
            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function');
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass)
                    _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                return function _createSuperInternal() {
                    var Super = _getPrototypeOf(Derived), result;
                    if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else {
                        result = Super.apply(this, arguments);
                    }
                    return _possibleConstructorReturn(this, result);
                };
            }
            function _possibleConstructorReturn(self, call) {
                if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
                    return call;
                }
                return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
                if (self === void 0) {
                    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                }
                return self;
            }
            function _isNativeReflectConstruct() {
                if (typeof Reflect === 'undefined' || !Reflect.construct)
                    return false;
                if (Reflect.construct.sham)
                    return false;
                if (typeof Proxy === 'function')
                    return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    }));
                    return true;
                } catch (e) {
                    return false;
                }
            }
            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }
            var TodoApp = function (_React$Component) {
                _inherits(TodoApp, _React$Component);
                var _super = _createSuper(TodoApp);
                function TodoApp(props) {
                    var _this;
                    _classCallCheck(this, TodoApp);
                    _this = _super.call(this, props);
                    _this.state = {
                        items: [],
                        text: ''
                    };
                    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
                    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
                    return _this;
                }
                _createClass(TodoApp, [
                    {
                        key: 'render',
                        value: function render() {
                            return React.createElement('div', null, React.createElement('h3', null, 'TODO'), React.createElement(_TodoList__WEBPACK_IMPORTED_MODULE_0__['TodoList'], { items: this.state.items }), React.createElement('form', { onSubmit: this.handleSubmit }, React.createElement('label', { htmlFor: 'new-todo' }, 'What needs to be done?'), React.createElement('input', {
                                id: 'new-todo',
                                onChange: this.handleChange,
                                value: this.state.text
                            }), React.createElement('button', null, 'Add #', this.state.items.length + 1)));
                        }
                    },
                    {
                        key: 'handleChange',
                        value: function handleChange(e) {
                            this.setState({ text: e.target.value });
                        }
                    },
                    {
                        key: 'handleSubmit',
                        value: function handleSubmit(e) {
                            e.preventDefault();
                            if (this.state.text.length === 0) {
                                return;
                            }
                            var newItem = {
                                text: this.state.text,
                                id: Date.now()
                            };
                            this.setState(function (state) {
                                return {
                                    items: state.items.concat(newItem),
                                    text: ''
                                };
                            });
                        }
                    }
                ]);
                return TodoApp;
            }(React.Component);
        },
        './src/sample-collection/to-do/src/TodoList.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, 'TodoList', function () {
                return TodoList;
            });
            var React_raw = __REQUIRE__('frontend-js-react-web$react');
            var React = React_raw && React_raw.__esModule ? React_raw['default'] : React_raw;
            function _typeof(obj) {
                '@babel/helpers - typeof';
                if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
                    _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                } else {
                    _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
                    };
                }
                return _typeof(obj);
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }
            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    _defineProperties(Constructor, staticProps);
                return Constructor;
            }
            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function');
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass)
                    _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                return function _createSuperInternal() {
                    var Super = _getPrototypeOf(Derived), result;
                    if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else {
                        result = Super.apply(this, arguments);
                    }
                    return _possibleConstructorReturn(this, result);
                };
            }
            function _possibleConstructorReturn(self, call) {
                if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
                    return call;
                }
                return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
                if (self === void 0) {
                    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                }
                return self;
            }
            function _isNativeReflectConstruct() {
                if (typeof Reflect === 'undefined' || !Reflect.construct)
                    return false;
                if (Reflect.construct.sham)
                    return false;
                if (typeof Proxy === 'function')
                    return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    }));
                    return true;
                } catch (e) {
                    return false;
                }
            }
            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }
            var TodoList = function (_React$Component) {
                _inherits(TodoList, _React$Component);
                var _super = _createSuper(TodoList);
                function TodoList() {
                    _classCallCheck(this, TodoList);
                    return _super.apply(this, arguments);
                }
                _createClass(TodoList, [{
                        key: 'render',
                        value: function render() {
                            return React.createElement('ul', null, this.props.items.map(function (item) {
                                return React.createElement('li', { key: item.id }, item.text);
                            }));
                        }
                    }]);
                return TodoList;
            }(React.Component);
        }
    }));
});
//# sourceMappingURL=main.js.map