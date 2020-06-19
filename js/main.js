"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    var obj1;
    obj1 = { name: 'zs' };
    var obj2 = { name: 'lisi' };
    var obj3 = {
        name: 'wangwu',
        height: 178,
        isMarry: false
    };
    var obj4 = {
        name: 'zhaoliu',
        sex: 'man'
    };
    // obj4.sex = 'nv'
    var a1 = [1, 2, 3];
    var a2 = ['1', '2'];
    var a3 = [1, '2', true];
    var a4 = ['1', '2'];
    var a5 = [{ user: 'zs', age: 12 }, { user: 'ls', age: 12 }];
    var a6 = [
        { user: 'ww', age: 14 },
        { user: 'zl', age: 16 }
    ];
    var a7 = [{ user: 'qw', age: 15 }];
    function funcType(name, age) {
        return age;
    }
    var ageNum = funcType('zs', 18);
    function funcType2(name, age, sex) {
        return age;
    }
    var ageNum2 = funcType2('ls', 12);
    function funcType3(name, age) {
        if (age === void 0) { age = 19; }
        return age;
    }
    var ageNum3 = funcType3('wangwu');
    var ageNum3 = funcType3('wangwu', 20);
    var funcType4 = function (name, age) {
        return age;
    };
    function getValue(value) {
        return value;
    }
    var val1 = getValue(1);
    var val2 = getValue('1');
    function getAssert(name) {
        // return (<string>name).length
        return name.length;
    }
    var str = '10';
    var str1 = '20';
    str1 = 30;
    var obj5 = {
        name: 'zs'
    };
    var obj6 = {
        age: 20
    };
    function getSex(s) {
        return s;
    }
    var sex1 = getSex('女');
    var Days;
    (function (Days) {
        Days[Days["Sun"] = 0] = "Sun";
        Days[Days["Mon"] = 1] = "Mon";
        Days[Days["Tue"] = 2] = "Tue";
        Days[Days["Wed"] = 3] = "Wed";
        Days[Days["Thu"] = 4] = "Thu";
        Days[Days["Fri"] = 5] = "Fri";
        Days[Days["Sat"] = 6] = "Sat";
    })(Days || (Days = {}));
    console.log(Days.Sun); // 1
    console.log(Days.Sat); // 6
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'zs';
            this.age = 19;
        }
        Person.prototype.sex = function () {
        };
        Person.prototype.say = function () {
            console.log(this.name, this.age, this.sex);
        };
        return Person;
    }());
    var p = new Person();
    p.say();
    // console.log(p.name)
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Child.prototype.callParent = function () {
            console.log(_super.prototype.sex);
            // super.say()
        };
        return Child;
    }(Person));
    var c = new Child();
    c.callParent();
    // console.log(c.name)
    console.log(c.age);
    function createArray(length, value) {
        var arr = [];
        for (var i = 0; i < length; i++) {
            arr[i] = value;
        }
        return arr;
    }
    function createArray1(length, value) {
        var arr = [];
        for (var i = 0; i < length; i++) {
            arr[i] = value;
        }
        return arr;
    }
    var strArry = createArray1(3, '1');
    var strArry1 = createArray1(3, '1');
    var func = function (name, value) {
        return [];
    };
    var res = func('zs', 12);
    var res1 = func('ls', 'as');
}
exports.default = default_1;
