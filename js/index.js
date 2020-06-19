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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log('你好ts');
/* *
*   1. 【【ts中的数据类型】】
*   2. 【【ts 中的函数】】
*   3. 【【ts 中定义类】】
*   4. 【【ts 中的接口】】
*   5. 【【typescript 中的泛型】】
*   6. 【【ts 类型、接口、类、泛型的综合运用案例】】
*   7. 【【typescript 模块 模块化】】
*   8. 【【typescript 命名空间】】
*   9. 【【typescript 装饰器】】
 */
// 【【ts中的数据类型】】
/*
    布尔类型 (boolean)
    数字类型 (number)
    字符串类型 (string)
    数组类型 (array)
    元组类型 (tuple)
    枚举类型 (enum)
    任意类型 (any)
    null 和 undefined
    void 类型
    never 类型
 */
// 布尔类型 (boolean)
var flag = true;
// flag = 123
flag = false;
var flag = false; // ts 中的写法
// 数字类型 (number)
var num = 123;
var num2 = 1234; // ts 中的写法
num2 = 234;
// 字符串类型 (string)
var str = 'this is str';
var str = 'this is string'; // ts 中的写法 
// 数组类型 (array), ts 中定义数组有2种方式 + any 方法也可以定义数组
var arr = [11, 22, 33, 44]; // 第一种方式
console.log(arr); // [11, 22, 33, 44]
var arr1 = [44, 33, 22, 11]; // 第二种方式
console.log(arr1); // [44, 33, 22, 11]
var arr3 = [123, true, 'str', 456]; // 第三种方式
console.log(arr3); // [123, true, "str", 456]
// 元组类型 (tuple), 属于数组的一种
var arr2 = [123, 'this is str'];
console.log(arr2); // [123, "this is str"]
// 枚举类型 (enum)  
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var s = Flag.success;
console.log(s); //1
var f = Flag.error;
console.log(f); //2
// 如果标识符没有赋值，那他的值就是下标
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 3] = "red";
    Color[Color["orange"] = 4] = "orange";
})(Color || (Color = {}));
var c = Color.blue;
console.log(c); //0
var c1 = Color.red;
console.log(c1); //3
var c2 = Color.orange;
console.log(c2); //4
// 任意类型 (any)
var num3 = 1223;
num3 = 'str';
num3 = true;
console.log(num3); // true
// 任意类型的用处
var oBox = document.getElementById('box');
oBox.style.color = 'red';
// null 和 undefined, 其他(never 类型)数据类型的子类型
// var num4:number; 定义了，但未赋值
// console.log(num4) // 输出 undefined  报错
var num4;
console.log(num4); // 输出 undefined  正确
var num5;
num5 = 123;
console.log(num5); // 123
var num6;
num6 = null;
console.log(num6); // null
var num7;
num7 = 1234;
console.log(num7); // 1234
// void 类型，表示没有任何类型，一般用于方法没有返回值
function run() {
    console.log('run'); // run
}
run();
function run1() {
    return 123;
}
console.log(run1()); // 123
// never 类型，是其他类型（包括 null 和 undefined）的子类型，代表从不会出现的值
// 这意味着声明 never 的变量只能被 never 类型所赋值
// var a:never
// a = (()=>{
//     throw new Error('错误')
// })()
// 【【ts 中的函数】】
// 函数的定义
// es5定义函数的方法
// 函数声明法
function runing() {
    return 'runing';
}
// 匿名函数法
var runing2 = function () {
    return 'runing2';
};
// ts定义函数大的方法
// 函数声明法
function func() {
    return 'func'; //正确
    // return 1223   //错误
}
// 匿名函数法
var func2 = function () {
    return 123;
};
console.log(func2());
// ts中定义方法传参
function getInfo(name, age) {
    return name + "---" + age;
}
console.log(getInfo('zhngsan', 20));
var getInfo2 = function (name, age) {
    return name + "----" + age;
};
console.log(getInfo2('lisi', 40));
// 没有返回值的方法
function run2() {
    console.log('run');
}
run2();
// 可选参数, 可选参数必须配置在参数的最后面
function getInfo1(name, age) {
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getInfo1('zhngsan', 25));
// 默认参数  在 es5 中，不能设置默认参数，es6 和 ts 中是可以设置默认参数的
function getInfo3(name, age) {
    if (age === void 0) { age = 30; }
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getInfo3('zhngsan'));
console.log(getInfo3('zhngsan', 50));
// 剩余参数
// function sum(a:number, b:number, c:number, d:number):number{
//     return a+b+c+d;
// }
// console.log(sum(1,2,3,4))
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    console.log('result:', result); // [1, 2, 3, 4, 5]
    console.log(result instanceof Array); // true
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    console.log('sum:', sum);
}
sum(1, 2, 3, 4, 5);
sum(1, 2, 3, 4, 5, 6);
function abc(str) {
    if (typeof str === 'string') {
        return 'my name is ' + str;
    }
    else {
        return 'my age is ' + str;
    }
}
console.log(abc('Tom')); // my name is Tom
console.log(abc(30)); // my age is 30
function bcd(name, age) {
    if (age) {
        return "my name is " + name + ", and my age is " + age;
    }
    else {
        return "my name is " + name;
    }
}
console.log(bcd('Jack')); // my name is Jack
console.log(bcd('Jack', 20)); // my name is Jack, and my age is 20
// 【【ts 中定义类】】
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('zhangsan');
p.run(); // zhangsan
p.getName(); // zhangsan
p.setName('wangwu');
p.run(); // wangwu
p.getName(); // wangwu
// ts 中实现继承
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person1;
}());
var p1 = new Person1('Tom');
console.log(p1.run()); // Tom在运动
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.work = function () {
        return this.name + "\u5728\u5DE5\u4F5C";
    };
    return Web;
}(Person1));
var w = new Web('Jack');
console.log(w.run()); // Jack在运动
console.log(w.work()); // Jack在工作
// ts 类里面的修饰符， typescript 里面定义属性的时候提供了三种修饰符
/*
    public 公有         在当前类里面、子类、类外面都可以访问
    protected 保护类型   在当前类里面、子类里面可以访问，在类外部无法访问
    private 私有        在当前类里面可以访问，子类、类外部都无法访问

    什么都不加，默认是公有 public
*/
/* function Cat(){
    this.func1 = function(){ // 实例方法
        console.log('111')
    }
}
Cat.func2 = function(){ // 静态方法
    console.log('222')
}
var ccc = new Cat();
ccc.func1() // 111
Cat.func2(); // 222  */
// ts 类中的实例属性和方法以及静态属性和方法
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.age = 20; // 实例属性
        this.name = name;
    }
    Dog.prototype.run = function () {
        console.log(this.name + "\u5728\u72C2\u5954,\u5B83\u5DF2\u7ECF" + this.age + "\u5C81\u4E86");
    };
    Dog.prototype.eat = function () {
        console.log(this.name + "\u5728\u5403\u5C4E");
    };
    Dog.sexInfo = function () {
        console.log(this.sex); // 公
    };
    Dog.sex = '公';
    return Dog;
}());
var d = new Dog('旺财');
console.log(d.name); // 旺财
console.log(d.age); // 20
d.run(); // 旺财在狂奔,它已经20岁了
d.eat(); // 旺财在吃屎
Dog.sexInfo();
console.log(Dog.sex); // 公 
console.dir(Dog); // ƒ Dog(name)
console.log(typeof Dog); // function
// 多态： 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('吃的方法');
    };
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    Tiger.prototype.eat = function () {
        return this.name + "\u5403\u9992\u5934";
    };
    return Tiger;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(name) {
        return _super.call(this, name) || this;
    }
    Lion.prototype.eat = function () {
        return this.name + "\u5403\u96EA\u7CD5";
    };
    return Lion;
}(Animal));
var t = new Tiger('老虎');
console.log(t.eat());
var l = new Lion('狮子');
console.log(l.eat());
// ts 中的抽象类：他是提供其他类继承的基类，不能直接被实例化
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// 抽象方法只能在放在抽象类里面
// 抽象类和抽象方法用来【定义标准】
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    Animals.prototype.run = function () {
        console.log('其他方法可以不实现');
    };
    return Animals;
}());
// var an = new Animals('ss') // 报错。 抽象类无法实现实例化
var Mouse = /** @class */ (function (_super) {
    __extends(Mouse, _super);
    function Mouse(name) {
        return _super.call(this, name) || this;
    }
    Mouse.prototype.eat = function () {
        return this.name + "\u5403\u7CAE\u98DF";
    };
    return Mouse;
}(Animals));
var m = new Mouse('老鼠');
console.log(m.eat()); // 老鼠吃粮食
var Rabbit = /** @class */ (function (_super) {
    __extends(Rabbit, _super);
    function Rabbit(name) {
        return _super.call(this, name) || this;
    }
    Rabbit.prototype.eat = function () {
        return this.name + "\u5403\u841D\u535C";
    };
    return Rabbit;
}(Animals));
var r = new Rabbit('兔子');
console.log(r.eat()); // 兔子吃萝卜
function printName(name) {
    // 必须传入对象 firstName secondName
    console.log(name.firstName + '--' + name.secondName); // 张--三
}
// printName('123') // 错误
var obj = {
    age: 20,
    firstName: '张',
    secondName: '三'
};
printName(obj);
function printInfo(name) {
    console.log("\u6211\u7684\u59D3\u662F'" + name.firstName + "',\u540D\u662F'" + name.secondName + "'"); // 我的姓是'李',名是'四'
}
var info = {
    firstName: '李',
    secondName: '四'
};
printInfo(info);
function getName(name) {
    console.log(name);
}
// 参数的顺序可以不一样
getName({
    firstName: 'firstName',
    secondName: 'secondName'
}); // {firstName: "firstName", secondName: "secondName"}
getName({
    firstName: 'firstName'
}); // {firstName: "firstName"}
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log('success');
                if (config.dataType == 'json') {
                    console.log(JSON.parse(xhr.responseText));
                }
                else {
                    console.log(xhr.responseXML);
                }
            }
        }
    };
}
ajax({
    type: "get",
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
});
var md5 = function (key, value) {
    // 模拟操作
    return key + value;
};
console.log(md5('name', 'zhangsan')); // namezhangsan
var sha1 = function (key, value) {
    return key + "+++" + value;
};
console.log(sha1('lisi', '100岁')); // lisi+++100岁
// 【可索引接口】： 数组、对象的约束（不常用）
var arr11 = [111, 222];
var arr22 = ['1111', '2222'];
var arr33 = ['aaa', 'bbb'];
console.log(arr33[0]); // aaa
var obj33 = { a: 'aa', b: 'bb' };
console.log(obj33.b); // bb
var Dog33 = /** @class */ (function () {
    function Dog33(name) {
        this.name = name;
    }
    Dog33.prototype.eat = function () {
        console.log(this.name + '吃点啥');
    };
    return Dog33;
}());
var dd = new Dog33('小黑');
dd.eat(); // 小黑吃点啥
var Cat33 = /** @class */ (function () {
    function Cat33(name) {
        this.name = name;
    }
    Cat33.prototype.eat = function (food) {
        console.log(this.name + "\u5403" + food);
    };
    return Cat33;
}());
var cc = new Cat33('小花');
cc.eat('老鼠'); // 小花吃老鼠
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        return this.name + "\u5199" + code;
    };
    return Programmer;
}());
var Web11 = /** @class */ (function (_super) {
    __extends(Web11, _super);
    function Web11(name) {
        return _super.call(this, name) || this;
    }
    Web11.prototype.eat = function () {
        console.log(this.name + "\u559C\u6B22\u5403\u9992\u5934");
    };
    Web11.prototype.work = function () {
        console.log(this.name + "\u5199\u4EE3\u7801");
    };
    return Web11;
}(Programmer));
var ww = new Web11('小吴');
ww.eat(); // 小吴喜欢吃馒头
ww.work(); // 小吴写代码
console.log(ww.coding('Hello World')); // 小吴写Hello World
// 【【Typescript 中的泛型】】
// 通俗理解，泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)
/*
1. 泛型函数
2. 泛型类
3. 泛型接口
*/
function getDatas(value) {
    return value; // 这个只能返回 string 类型
}
// 要求同时返回 string 类型和 number 类型  any 可以解决这个问题，但是 any 放弃了类型检查
// T 表示泛型，具体什么类型是调用这个方法的时候决定的
// 泛型函数
function getData11(value) {
    return value;
}
console.log(getData11(123)); // 123
console.log(getData11('123')); // 123
function getData22(value) {
    return '123456' + value;
}
console.log(getData22(123)); // 123456123
console.log(getData22('这是一个泛型')); // 123456这是一个泛型
// 泛型类
// 下面这种有局限性，只能传入一种数据类型
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var mm = new MinClass();
mm.add(3);
mm.add(8);
mm.add(33);
mm.add(2);
mm.add(13);
console.log(mm.min()); // 2
// 用类的泛型改造
var MinClasss = /** @class */ (function () {
    function MinClasss() {
        this.list = [];
    }
    MinClasss.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClasss.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClasss;
}());
var mmm = new MinClasss(); // 实例化类， 并且制定了类的 T 代表的类型是 number
mmm.add(11);
mmm.add(144);
mmm.add(336);
console.log(mmm.min()); // 11
var mmm1 = new MinClasss(); // 实例化类， 并且制定了类的 T 代表的类型是 string
mmm1.add('c');
mmm1.add('d');
mmm1.add('a');
console.log(mmm1.min()); // a
var getData333 = function (value1, value2) {
    return value1 + value2;
};
console.log(getData333('name', 'zhangsan')); // namezhangsan
var getData4 = function (value) {
    return value;
};
console.log(getData4(666)); // 666
console.log(getData4('666')); // 666
function getData33(value) {
    return value;
}
var myGetData33 = getData33;
console.log(myGetData33('aabb')); // aabb
// 把类作为参数类型的泛型类
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (user) {
        console.log(user); // User {username: "张三", password: "123456"}
        return true;
    };
    return MysqlDb;
}());
var u = new User();
u.username = '张三';
u.password = '123456';
var Db = new MysqlDb();
Db.add(u);
var ArticleCate = /** @class */ (function () {
    function ArticleCate() {
    }
    return ArticleCate;
}());
var MysqlDb11 = /** @class */ (function () {
    function MysqlDb11() {
    }
    MysqlDb11.prototype.add = function (info) {
        console.log(info); // ArticleCate {title: "国内", desc: "国内新闻", status: 1}
        return true;
    };
    return MysqlDb11;
}());
var a = new ArticleCate();
a.title = '国内';
a.desc = '国内新闻';
a.status = 1;
var Db1 = new MysqlDb11();
Db1.add(a);
// 改造为把类作为参数的泛型类
var MysqlDb22 = /** @class */ (function () {
    function MysqlDb22() {
    }
    MysqlDb22.prototype.add = function (value) {
        console.log(value);
        return value;
    };
    MysqlDb22.prototype.updated = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return MysqlDb22;
}());
var User22 = /** @class */ (function () {
    function User22() {
    }
    return User22;
}());
var uu = new User22();
uu.username = '吴崇刚';
uu.password = '456123';
var m1 = new MysqlDb22();
m1.add(uu); // User22 {username: "吴崇刚", password: "456123"}
var ArticleCate22 = /** @class */ (function () {
    function ArticleCate22(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate22;
}());
var aa = new ArticleCate22({
    title: '抗击疫情',
    desc: '众志成城'
});
var m2 = new MysqlDb22();
m2.add(aa); // ArticleCate22 {title: "抗击疫情", desc: "众志成城", status: undefined}
var a3 = new ArticleCate22({
    title: 'suizhou',
    desc: 'hubeisheng'
});
a3.status = 1;
m2.updated(a3, 12); // ArticleCate22 {title: "suizhou", desc: "hubeisheng", status: 1}  // 12
// 定义一个操作 mysql 数据库的类  注意：要实现泛型接口，这个类也应该是一个泛型类
var MysqlDbDb = /** @class */ (function () {
    function MysqlDbDb() {
        // 和数据库建立连接
    }
    MysqlDbDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDbDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDbDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDbDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDbDb;
}());
// 定义一个操作 mssql 数据库的类
var MsSqlDb = /** @class */ (function () {
    function MsSqlDb() {
        // 和数据库建立连接
    }
    MsSqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MsSqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.get = function (id) {
        var list = [
            {
                title: 'xxxx',
                desc: 'xxxxxxxxx'
            },
            {
                title: 'xxxx',
                desc: 'xxxxxxxxx'
            }
        ];
        return list;
    };
    return MsSqlDb;
}());
// 操作用户表，定义一个 user 类和数据表做映射
var User5 = /** @class */ (function () {
    function User5() {
    }
    return User5;
}());
var u5 = new User5();
u5.username = '张三';
u5.password = '123456';
var oMysql = new MysqlDbDb();
oMysql.add(u5); // User5 {username: "张三", password: "123456"}
var u6 = new User5();
u6.username = '张三666';
u6.password = '123456654';
var oMssql = new MsSqlDb();
oMssql.add(u6); // User5 {username: "张三666", password: "123456654"}
var dataList = oMssql.get(4);
console.log(dataList); // (2) [{…}, {…}] 
/*
0: {title: "xxxx", desc: "xxxxxxxxx"}
1: {title: "xxxx", desc: "xxxxxxxxx"}
*/
// 【【typescript 模块 模块化】】。和 es6 是一样的
/*
import save, { getData123 as get, dbUrl} from './modules/db'
getData123();
get();
save();
console.log(dbUrl);
 */
// 【【typescript 命名空间】】
/* 命名空间和模块的区别：
    命名空间：内部模块，主要用于组织代码，避免命名冲突
    模块：ts 的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
*/
var A;
(function (A) {
    var Dog33 = /** @class */ (function () {
        function Dog33(name) {
            this.name = name;
        }
        Dog33.prototype.eat = function () {
            console.log(this.name + '不吃屎');
        };
        return Dog33;
    }());
    A.Dog33 = Dog33;
    var Cat33 = /** @class */ (function () {
        function Cat33(name) {
            this.name = name;
        }
        Cat33.prototype.eat = function (food) {
            console.log(this.name + "\u60F3\u5403" + food);
        };
        return Cat33;
    }());
    A.Cat33 = Cat33;
})(A || (A = {}));
var ddd = new A.Dog33('小黑');
ddd.eat(); // 小黑不吃屎
var ccc = new A.Cat33('小花');
ccc.eat('鱼'); // 小花想吃鱼
var B;
(function (B) {
    var Dog33 = /** @class */ (function () {
        function Dog33(name) {
            this.name = name;
        }
        Dog33.prototype.eat = function () {
            console.log(this.name + '还是不吃屎');
        };
        return Dog33;
    }());
    B.Dog33 = Dog33;
    var Cat33 = /** @class */ (function () {
        function Cat33(name) {
            this.name = name;
        }
        Cat33.prototype.eat = function (food) {
            console.log(this.name + "\u5DF2\u7ECF\u4E0D\u60F3\u5403" + food);
        };
        return Cat33;
    }());
    B.Cat33 = Cat33;
})(B || (B = {}));
var d11 = new B.Dog33('小黑');
d11.eat(); // 小黑还是不吃屎
var c11 = new B.Cat33('小花');
c11.eat('鱼'); // 小花已经不想吃鱼 
// 上述的命名空间的代码也可以抽离出去，模块化，一个模块里面可能有多个命名空间
// 如：抽离到 modules 下面的 a.ts 里面去
/*
import {Aa, Bb} from './modules/a'
var a22 = new Aa.Dog33('小黑黑');
a22.eat();
var b22 = new Bb.Dog33('小花花');
b22.eat();

 */
// 【【typescript 装饰器】】
// 装饰器：装饰器是一种特殊类型的声明，它能够附加到类声明，方法，属性或参数上，可以修改类的行为。
// 【通俗的讲装饰器就是一个方法，可以注入到类、方法、属性、参数上来扩展类、属性、方法、参数的功能】
/*
    类装饰器
    属性装饰器
    方法装饰器
    参数装饰器
*/
// 1. 类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视、修改或替换类定义
// 1.1 类装饰器,普通装饰器（无法传参）
function logClass(params) {
    console.log(params); // 普通装饰器这里 params 就是当前类
    /*
    ƒ HttpClient() {
    }
    */
    // params 就是当前类
    params.prototype.apiUrl = 'xxxxx';
    params.prototype.run = function () {
        console.log('我是一个run方法');
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
var h = new HttpClient();
console.log(h.apiUrl); // xxxxx
h.run(); // 我是一个run方法
// 1.2 类装饰器,装饰器工厂（可传参）
function logClass1(params) {
    return function (target) {
        console.log(target); // 打印的是这个类
        /*
        ƒ HttpClient1() {
        }
        */
        console.log(params); // hello
        target.prototype.ttt = params;
    };
}
var HttpClient1 = /** @class */ (function () {
    function HttpClient1() {
    }
    HttpClient1.prototype.getData = function () {
    };
    HttpClient1 = __decorate([
        logClass1('hello')
    ], HttpClient1);
    return HttpClient1;
}());
var hh = new HttpClient1();
console.log(hh.ttt); // hello
function logClass2(target) {
    console.log(target);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl2 = '我是修改后的数据';
            return _this;
        }
        class_1.prototype.getData = function () {
            this.apiUrl2 = this.apiUrl2 + '=====';
            console.log(this.apiUrl2);
        };
        return class_1;
    }(target));
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
        console.log('我是构造函数里的 apiUrl2'); // 我是构造函数里的 apiUrl2
    }
    HttpClient2.prototype.getData = function () {
        console.log(this.apiUrl2);
    };
    HttpClient2 = __decorate([
        logClass2
    ], HttpClient2);
    return HttpClient2;
}());
var h2 = new HttpClient2();
console.log(h2.apiUrl2); // 我是修改后的数据
h2.getData(); // 我是修改后的数据===== 
// 2. 属性装饰器
// 下面这个是类装饰器
function logClass3(params) {
    return function (target) {
        console.log(target); // // 打印的是这个类
        /*
            ƒ HttpClient3() {
            }
        */
        console.log(params); // 这里的 params 就是装饰器传入的参数
        /*
            hello world
        */
    };
}
// 下面这个是属性装饰器
function logProperty(params) {
    return function (target, attr) {
        console.log(target); // 属性装饰器这里的第一个参数 target 打印的是原型对象
        /*
            {getData: ƒ, constructor: ƒ}
                getData: ƒ ()
                url: "123456"
                constructor: ƒ HttpClient3()
                __proto__: Object
        */
        console.log(attr); // url    第二个参数 attr 是运用装饰器的那个属性
        target[attr] = params;
    };
}
var HttpClient3 = /** @class */ (function () {
    function HttpClient3() {
    }
    HttpClient3.prototype.getData = function () {
        console.log(this.url); // 123456
    };
    __decorate([
        logProperty('123456')
    ], HttpClient3.prototype, "url", void 0);
    HttpClient3 = __decorate([
        logClass3('hello world')
    ], HttpClient3);
    return HttpClient3;
}());
var h3 = new HttpClient3();
h3.getData();
// 3. 方法装饰器
// 装饰器
function logMethod(params) {
    return function (target, methodName, desc) {
        console.log(target); // 原型对象
        /*
            {getData: ƒ, constructor: ƒ}
                getData: ƒ ()
                constructor: ƒ HttpClient4()
                __proto__: Object
        */
        console.log(methodName); // 方法名
        /*
            getData
        */
        console.log(desc); // 描述对象
        /*
            {writable: true, enumerable: true, configurable: true, value: ƒ}
                value: ƒ ()
                writable: true
                enumerable: true
                configurable: true
                __proto__: Object
        */
        var oMethod = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            console.log(args); // ["123", "456"]
            oMethod.apply(this, args);
        };
    };
}
var HttpClient4 = /** @class */ (function () {
    function HttpClient4() {
    }
    HttpClient4.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args); // ["123", "456"]
        console.log('我是 getData 里面的方法'); // 我是 getData 里面的方法
    };
    __decorate([
        logMethod('www.baidu.com')
    ], HttpClient4.prototype, "getData", null);
    return HttpClient4;
}());
var h4 = new HttpClient4();
h4.getData(123, '456');
// 4. 方法参数装饰器
function logParams(params) {
    return function (target, methodsName, paramsIndex) {
        console.log(params); // 传入的参数
        /*
            xxxxxx
        */
        console.log(target); // 原型对象
        /*
            {getData: ƒ, constructor: ƒ}
                getData: ƒ (uuid)
                constructor: ƒ HttpClient5()
                __proto__: Object
        */
        console.log(methodsName); // 这个参数所在的方法名
        /*
            getData
        */
        console.log(paramsIndex); // 参数在函数参数列表中的索引
        /*
            0
        */
        target.apiUrl = 'ooooo';
    };
}
var HttpClient5 = /** @class */ (function () {
    function HttpClient5() {
    }
    HttpClient5.prototype.getData = function (uuid) {
        console.log(uuid); // 123456
    };
    __decorate([
        __param(0, logParams('xxxxxx'))
    ], HttpClient5.prototype, "getData", null);
    return HttpClient5;
}());
var h5 = new HttpClient5();
h5.getData(123456);
console.log(h5.apiUrl); // ooooo
// 装饰器的执行顺序
// 属性装饰器 > 方法装饰器 > 方法参数装饰器 > 类装饰器
// 【注意】：并且，同一种类型的装饰器，后面的比前面的先执行 
function logClass6(params) {
    return function (target) {
        console.log('这是类装饰器1');
    };
}
function logClass7(params) {
    return function (target) {
        console.log('这是类装饰器2');
    };
}
function logAttrbute(params) {
    return function (target, attr) {
        console.log('这是属性装饰器');
    };
}
function logMethods6(params) {
    return function (target, methodsName, desc) {
        console.log('这是方法装饰器');
    };
}
function logParams6(params) {
    return function (target, methodsName, paramsIndex) {
        console.log('这是方法参数装饰器1');
    };
}
function logParams7(params) {
    return function (target, methodsName, paramsIndex) {
        console.log('这是方法参数装饰器2');
    };
}
var HttpClient7 = /** @class */ (function () {
    function HttpClient7() {
    }
    HttpClient7.prototype.getData = function () {
    };
    HttpClient7.prototype.setData = function (props) {
    };
    __decorate([
        logAttrbute()
    ], HttpClient7.prototype, "url", void 0);
    __decorate([
        logMethods6()
    ], HttpClient7.prototype, "getData", null);
    __decorate([
        __param(0, logParams6()), __param(0, logParams7())
    ], HttpClient7.prototype, "setData", null);
    HttpClient7 = __decorate([
        logClass6('xxx'),
        logClass7('xxx')
    ], HttpClient7);
    return HttpClient7;
}());
/*
打印结果为：
    这是属性装饰器
    这是方法装饰器
    这是方法参数装饰器2
    这是方法参数装饰器1
    这是类装饰器2
    这是类装饰器1
 */
