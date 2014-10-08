
'use strict';

var Extend, extend, assign, hook;

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
            }
            else {
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

Extend = function Extend() {
    return this.constructor.apply(this, arguments);
};

Extend.prototype.constructor = function Extend() {
    return;
};

Extend.extend = function extend(protoProps, staticProps, _super) {
    // Ensure prototype and static are define objects
    protoProps || (protoProps = {});
    staticProps || (staticProps = {});

    var Parent = this,
        Child = function Extend() {
            return this.constructor.apply(this, arguments);
        },
        Surrogate = function Extend() {
            return;
        };

    // Set the prototype chain to inherit from `parent`
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();

    // Assign parent static properties to the new class
    assign(Child, Parent);

    // Ensure new class has static extend method
    assign(Child, Child.extend !== Extend.extend ? {extend: Extend.extend} : {});

    // Assign provided static properties to the new class
    assign(Child, staticProps);

    // Set a constructor on the new prototype
    protoProps.constructor || (protoProps.constructor = Parent.constructor || Parent);

    // Assign provided prototype properties to the new class
    if (_super === true) {
        hook(Parent.prototype, Child.prototype, protoProps);
    } else {
        assign(Child.prototype, protoProps);
    }

    return Child;
};

extend = function extend(Parent, protoProps, staticProps, _super) {
    return Extend.extend.call(Parent, protoProps, staticProps, _super);
};


exports.Extend = Extend;

exports.extend = extend;
