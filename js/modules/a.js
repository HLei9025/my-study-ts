"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aa;
(function (Aa) {
    var Dog33 = /** @class */ (function () {
        function Dog33(name) {
            this.name = name;
        }
        Dog33.prototype.eat = function () {
            console.log(this.name + '不吃屎');
        };
        return Dog33;
    }());
    Aa.Dog33 = Dog33;
    var Cat33 = /** @class */ (function () {
        function Cat33(name) {
            this.name = name;
        }
        Cat33.prototype.eat = function (food) {
            console.log(this.name + "\u60F3\u5403" + food);
        };
        return Cat33;
    }());
    Aa.Cat33 = Cat33;
})(Aa = exports.Aa || (exports.Aa = {}));
var Bb;
(function (Bb) {
    var Dog33 = /** @class */ (function () {
        function Dog33(name) {
            this.name = name;
        }
        Dog33.prototype.eat = function () {
            console.log(this.name + '还是不吃屎');
        };
        return Dog33;
    }());
    Bb.Dog33 = Dog33;
    var Cat33 = /** @class */ (function () {
        function Cat33(name) {
            this.name = name;
        }
        Cat33.prototype.eat = function (food) {
            console.log(this.name + "\u5DF2\u7ECF\u4E0D\u60F3\u5403" + food);
        };
        return Cat33;
    }());
    Bb.Cat33 = Cat33;
})(Bb = exports.Bb || (exports.Bb = {}));
