/*jscs:disable disallowDanglingUnderscores*/
/*global require, exports, module, define*/
(function (root, factory) {

    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD: Register as an anonymous module
        return define(['require', 'exports', 'module'], factory);
    }

    if (typeof exports === 'object') {
        // CommonJS
        return factory(require, exports, module);
    }

}(this, function (require, exports, module) {

    'use strict';

    var Cla55, assign, hook;

    assign = function assign(target, source) {
        var key;

        for (key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }

        return target;
    };

    // Hook prototype methods with _super() and _superApply()
    hook = function hook(parentProto, childProto, protoProps) {
        var hookProp = function hookProp(prop, value) {
                if (typeof protoProps[prop] === 'function' && typeof parentProto[prop] === 'function') {
                    childProto[prop] = (function () {
                        var _super = function () {
                                return parentProto[prop].apply(this, arguments);
                            },
                            _superApply = function (args) {
                                return parentProto[prop].apply(this, args);
                            };

                        return function () {
                            var __super = this._super,
                                __superApply = this._superApply,
                                returnValue;

                            this._super = _super;
                            this._superApply = _superApply;

                            returnValue = protoProps[prop].apply(this, arguments);

                            this._super = __super;
                            this._superApply = __superApply;

                            return returnValue;
                        };
                    }());
                } else {
                    childProto[prop] = protoProps[prop];
                }
            },

            key;

        for (key in protoProps) {
            if (protoProps.hasOwnProperty(key)) {
                hookProp(key);
            }
        }
    };

    Cla55 = function Cla55() {
        return this.constructor.apply(this, arguments);
    };

    Cla55.prototype.constructor = function Cla55() {
        return;
    };

    Cla55.extend = function extend(protoProps, staticProps, _super) {
        // Ensure prototype and static are define objects
        protoProps = protoProps || (protoProps = {});
        staticProps = staticProps || (staticProps = {});

        var Parent = this,
            Child = function Cla55() {
                if (this instanceof Child) {
                    // Call the instance constructor
                    return this.constructor.apply(this, arguments);
                } else {
                    // Static call of the constructor
                    return Child.prototype.constructor.apply(Child, arguments);
                }
            },
            Surrogate = function Cla55() {
                return;
            };

        // Set the prototype chain to inherit from `parent`
        Surrogate.prototype = Parent.prototype;
        Child.prototype = new Surrogate();

        // Clear prototype reference
        Surrogate.prototype = null;

        // Assign parent static properties to the new class
        assign(Child, Parent);

        // Ensure new class has static extend method
        assign(Child, !Child.extend ? {extend: Cla55.extend} : {});

        // Assign provided static properties to the new class
        assign(Child, staticProps);

        // Set a constructor on the new prototype
        if (protoProps.hasOwnProperty('constructor')) {
            protoProps.constructor = protoProps.constructor;
        } else if (Parent.prototype.hasOwnProperty('constructor')) {
            protoProps.constructor = Parent.prototype.constructor;
        } else {
            protoProps.constructor = Parent;
        }

        // Assign provided prototype properties to the new class
        if (_super === true) {
            hook(Parent.prototype, Child.prototype, protoProps);
        } else {
            assign(Child.prototype, protoProps);
        }

        return Child;
    };

    exports.Cla55 = Cla55;

    exports.extend = function (protoProps, staticProps, _super) {
        return exports.Cla55.extend.call(exports.Cla55, protoProps, staticProps, _super);
    };

    exports.create = function cla55(Parent, protoProps, staticProps, _super) {
        return exports.Cla55.extend.call(Parent, protoProps, staticProps, _super);
    };

}));
